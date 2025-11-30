import { useEffect, useMemo, useRef, useState } from 'react';
import * as Automerge from 'automerge';

function randomId() {
    return Math.random().toString(36).slice(2, 8);
}

export default function App() {
    const id = useMemo(() => randomId(), []);
    const [name, setName] = useState<string>(() => {
        const n = localStorage.getItem('name');
        return n || '';
    });
    const color = useMemo(() => {
        // deterministic color from id
        const hues = [220, 190, 150, 120, 280, 340, 30];
        const h = hues[(id.charCodeAt(0) + id.length) % hues.length];
        return `hsl(${h} 80% 45%)`;
    }, [id]);
    const [status, setStatus] = useState<'connecting' | 'open' | 'closed'>('connecting');
    const [peers, setPeers] = useState<Record<string, { x: number; y: number }>>({});
    const [text, setText] = useState('');
    const [room, setRoom] = useState<string>(() => localStorage.getItem('room') || 'main');
    const [docId, setDocId] = useState<string>(() => localStorage.getItem('doc') || 'default');
    const wsRef = useRef<WebSocket | null>(null);
    const docRef = useRef(Automerge.init<{ text: string }>());

    useEffect(() => {
        const ws = new WebSocket(`ws://localhost:${import.meta.env.VITE_WS_PORT || 4000}`);
        wsRef.current = ws;
        ws.onopen = () => {
            setStatus('open');
            ws.send(JSON.stringify({ type: 'join', room }));
            ws.send(JSON.stringify({ type: 'doc:join', doc: docId }));
        };
        ws.onclose = () => setStatus('closed');
        ws.onmessage = (e) => {
            try {
                const msg = JSON.parse(e.data);
                if (msg.type === 'presence') {
                    setPeers((prev) => ({ ...prev, [msg.id]: msg.cursor }));
                } else if (msg.type === 'doc' && typeof msg.payload === 'string') {
                    const bytes = Uint8Array.from(atob(msg.payload), (c) => c.charCodeAt(0));
                    const remote = Automerge.load<{ text: string }>(bytes);
                    const merged = Automerge.merge(docRef.current, remote);
                    docRef.current = merged;
                    setText(merged.text || '');
                }
            } catch { }
        };
        return () => ws.close();
    }, [room, docId]);

    useEffect(() => {
        function onMove(e: MouseEvent) {
            if (wsRef.current && wsRef.current.readyState === 1) {
                wsRef.current.send(
                    JSON.stringify({ type: 'presence', id, name: name || id, color, cursor: { x: e.clientX, y: e.clientY }, room, doc: docId })
                );
            }
        }
        window.addEventListener('mousemove', onMove);
        return () => window.removeEventListener('mousemove', onMove);
    }, [id, name, color, room, docId]);

    return (
        <div style={{ height: '100vh', position: 'relative', fontFamily: 'ui-sans-serif, system-ui' }}>
            <header style={{ padding: 16, borderBottom: '1px solid #eee', display: 'flex', gap: 16, alignItems: 'center', flexWrap: 'wrap' }}>
                <strong>Realtime Client</strong> — status: {status} — your id: {id}
                <span style={{ marginLeft: 'auto' }} />
                <label style={{ fontSize: 12, color: '#374151' }}>
                    Name:
                    <input
                        value={name}
                        onChange={(e) => {
                            setName(e.target.value);
                            localStorage.setItem('name', e.target.value);
                        }}
                        placeholder="Your name"
                        style={{ marginLeft: 8, padding: '4px 8px', border: '1px solid #e5e7eb', borderRadius: 6 }}
                    />
                </label>
                <label style={{ fontSize: 12, color: '#374151' }}>
                    Room:
                    <input
                        value={room}
                        onChange={(e) => {
                            const r = e.target.value.trim() || 'main';
                            setRoom(r);
                            localStorage.setItem('room', r);
                            setPeers({});
                            if (wsRef.current && wsRef.current.readyState === 1) {
                                wsRef.current.send(JSON.stringify({ type: 'join', room: r }));
                            }
                        }}
                        placeholder="main"
                        style={{ marginLeft: 8, padding: '4px 8px', border: '1px solid #e5e7eb', borderRadius: 6 }}
                    />
                </label>
                <label style={{ fontSize: 12, color: '#374151' }}>
                    Document:
                    <input
                        value={docId}
                        onChange={(e) => {
                            const d = e.target.value.trim() || 'default';
                            setDocId(d);
                            localStorage.setItem('doc', d);
                            if (wsRef.current && wsRef.current.readyState === 1) {
                                wsRef.current.send(JSON.stringify({ type: 'doc:join', doc: d }));
                            }
                        }}
                        placeholder="default"
                        style={{ marginLeft: 8, padding: '4px 8px', border: '1px solid #e5e7eb', borderRadius: 6 }}
                    />
                </label>
            </header>
            <main style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 16, padding: 16 }}>
                <section>
                    <h2 style={{ fontSize: 14, color: '#374151', marginBottom: 8 }}>Shared Editor (Automerge)</h2>
                    <textarea
                        value={text}
                        onChange={(e) => {
                            const next = Automerge.change(docRef.current, (d) => {
                                d.text = e.target.value;
                            });
                            docRef.current = next;
                            setText(e.target.value);
                            if (wsRef.current && wsRef.current.readyState === 1) {
                                const bytes = Automerge.save(next);
                                const b64 = btoa(String.fromCharCode(...bytes));
                                wsRef.current.send(JSON.stringify({ type: 'doc', id, payload: b64 }));
                            }
                        }}
                        rows={12}
                        style={{ width: '100%', padding: 12, fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace' }}
                        placeholder="Type here — edits sync across windows"
                    />
                </section>
            </main>
            {Object.entries(peers).map(([pid, p]) => (
                <div
                    key={pid}
                    style={{
                        position: 'absolute',
                        left: p.x + 8,
                        top: p.y + 8,
                        background: 'white',
                        border: `2px solid ${p.color || '#111827'}`,
                        color: '#111827',
                        padding: '2px 6px',
                        borderRadius: 6,
                        fontSize: 12,
                        transform: 'translate(-50%, -50%)',
                        transition: 'left 80ms linear, top 80ms linear',
                    }}
                >
                    <span style={{ display: 'inline-block', width: 8, height: 8, borderRadius: 9999, background: p.color || '#111827', marginRight: 6 }} />
                    {p.name || pid}
                </div>
            ))}
        </div>
    );
}
