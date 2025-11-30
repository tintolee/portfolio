import LineChart from '../components/LineChart';
import type { GetServerSideProps } from 'next';
import useSWR from 'swr';

type MetricPoint = { t: string; lcp: number; fid: number; cls: number };

export default function Home({ data }: { data: MetricPoint[] }) {
    const { data: live } = useSWR<MetricPoint[]>('/api/ingest', (url) => fetch(url).then((r) => r.json()), { refreshInterval: 5000 });
    const source = Array.isArray(live) && live.length ? live : data;
    const lcp = source.map((d) => ({ t: d.t, value: d.lcp }));
    const fid = source.map((d) => ({ t: d.t, value: d.fid }));
    const cls = source.map((d) => ({ t: d.t, value: d.cls }));
    return (
        <main style={{ minHeight: '100vh', padding: 24, background: '#f9fafb' }}>
            <h1 style={{ margin: 0, marginBottom: 8 }}>Performance Insights Dashboard</h1>
            <p style={{ color: '#4b5563', marginTop: 0 }}>Live charts with SWR; seeded fallback available</p>
            <div style={{ display: 'grid', gap: 16, gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
                <section>
                    <h2 style={{ fontSize: 14, color: '#374151', marginBottom: 8 }}>Largest Contentful Paint (ms)</h2>
                    <LineChart data={lcp} color="#10b981" />
                </section>
                <section>
                    <h2 style={{ fontSize: 14, color: '#374151', marginBottom: 8 }}>First Input Delay (ms)</h2>
                    <LineChart data={fid} color="#3b82f6" />
                </section>
                <section>
                    <h2 style={{ fontSize: 14, color: '#374151', marginBottom: 8 }}>Cumulative Layout Shift</h2>
                    <LineChart data={cls} color="#f59e0b" />
                </section>
            </div>
            <section style={{ marginTop: 24 }}>
                <h2 style={{ fontSize: 14, color: '#374151', marginBottom: 8 }}>Ingest a metric</h2>
                <MetricForm />
            </section>
            <section style={{ marginTop: 24 }}>
                <h2 style={{ fontSize: 14, color: '#374151', marginBottom: 8 }}>Recent metrics</h2>
                <MetricsTable data={source} />
            </section>
        </main>
    );
}

function MetricForm() {
    async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const fd = new FormData(e.currentTarget);
        const body = {
            t: fd.get('t'),
            lcp: Number(fd.get('lcp')),
            fid: Number(fd.get('fid')),
            cls: Number(fd.get('cls')),
        };
        const res = await fetch('/api/ingest', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body),
        });
        if (res.ok) location.reload();
        else alert('Failed to ingest');
    }
    const today = new Date().toISOString().slice(0, 10);
    return (
        <form onSubmit={onSubmit} style={{ display: 'flex', gap: 8, alignItems: 'flex-end', flexWrap: 'wrap' }}>
            <label style={{ display: 'grid' }}>
                <span style={{ fontSize: 12 }}>Date</span>
                <input type="date" name="t" defaultValue={today} />
            </label>
            <label style={{ display: 'grid' }}>
                <span style={{ fontSize: 12 }}>LCP</span>
                <input type="number" name="lcp" defaultValue={2000} />
            </label>
            <label style={{ display: 'grid' }}>
                <span style={{ fontSize: 12 }}>FID</span>
                <input type="number" name="fid" defaultValue={10} />
            </label>
            <label style={{ display: 'grid' }}>
                <span style={{ fontSize: 12 }}>CLS</span>
                <input type="number" step="0.01" name="cls" defaultValue={0.03} />
            </label>
            <button type="submit" style={{ padding: '6px 12px' }}>Submit</button>
        </form>
    );
}

function MetricsTable({ data }: { data: MetricPoint[] }) {
    return (
        <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', background: 'white', borderRadius: 12, overflow: 'hidden' }}>
                <thead style={{ background: '#f3f4f6' }}>
                    <tr>
                        <th style={{ textAlign: 'left', padding: 8 }}>Date</th>
                        <th style={{ textAlign: 'right', padding: 8 }}>LCP</th>
                        <th style={{ textAlign: 'right', padding: 8 }}>FID</th>
                        <th style={{ textAlign: 'right', padding: 8 }}>CLS</th>
                    </tr>
                </thead>
                <tbody>
                    {data.slice(-20).map((r, i) => (
                        <tr key={i} style={{ borderTop: '1px solid #e5e7eb' }}>
                            <td style={{ padding: 8 }}>{r.t}</td>
                            <td style={{ padding: 8, textAlign: 'right' }}>{r.lcp}</td>
                            <td style={{ padding: 8, textAlign: 'right' }}>{r.fid}</td>
                            <td style={{ padding: 8, textAlign: 'right' }}>{r.cls}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export const getServerSideProps: GetServerSideProps = async () => {
    try {
        const { prisma } = await import('../lib/prisma');
        const rows = await prisma.metric.findMany({ orderBy: { t: 'asc' } });
        if (rows.length === 0) throw new Error('no data');
        const data = rows.map((r) => ({ t: r.t.toISOString().slice(0, 10), lcp: r.lcp, fid: r.fid, cls: r.cls }));
        return { props: { data } };
    } catch {
        // fallback to static seed
        const metrics = (await import('../data/metrics.json')).default as MetricPoint[];
        return { props: { data: metrics } };
    }
};
