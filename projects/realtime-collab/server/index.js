import { WebSocketServer } from 'ws';

const PORT = process.env.PORT || 4000;
const wss = new WebSocketServer({ port: PORT });

function broadcast(data, except) {
  for (const client of wss.clients) {
    if (client !== except && client.readyState === 1) {
      // If rooms are used, only send within the same room
      if (data.room && client.room && client.room !== data.room) continue;
      // If a document is specified, only send within the same doc context
      if (data.doc && client.doc && client.doc !== data.doc) continue;
      client.send(JSON.stringify(data));
    }
  }
}

wss.on('connection', (ws) => {
  ws.room = 'main';
  ws.send(JSON.stringify({ type: 'welcome', now: Date.now() }));

  ws.on('message', (raw) => {
    try {
      const msg = JSON.parse(String(raw));
      if (!msg) return;
      if (msg.type === 'join') {
        ws.room = msg.room || 'main';
        ws.send(JSON.stringify({ type: 'joined', room: ws.room }));
      } else if (msg.type === 'doc:join') {
        ws.doc = msg.doc || 'default';
        ws.send(JSON.stringify({ type: 'doc:joined', doc: ws.doc }));
      } else if (msg.type === 'presence') {
        // Re-broadcast presence message as-is to include optional fields like name/color
        broadcast(msg, ws);
      } else if (msg.type === 'doc') {
        // Forward document sync messages (CRDT updates)
        broadcast({ type: 'doc', id: msg.id, payload: msg.payload, room: ws.room, doc: ws.doc }, ws);
      }
    } catch (e) {
      // ignore
    }
  });
});

console.log(`ws server listening on ws://localhost:${PORT}`);
