# Realtime Collaboration Suite

Summary: OT + CRDT editor enabling presence, comments, offline sync, and conflict resolution.
Stack: React, WebSocket, CRDT, Node

Goals:

- Collaborative text editor with cursors, selections, and comments.
- Presence indicators and user sessions.
- Offline-first sync with conflict resolution (CRDTs).

Planned scaffold:

- React app (Vite) for the client
- Node server with WebSocket (ws) for presence and sync
- CRDT library evaluation (Yjs/Automerge); initial PoC TBD

Getting started:

Server:

```
cd projects/realtime-collab/server
npm install
npm start
```

Client (in a second terminal):

```
cd projects/realtime-collab/client
npm install
echo "VITE_WS_PORT=4000" > .env
npm run dev
```

Open the client in the browser, move your mouse to broadcast presence; open a second window to see peers.

Docker (server alternative):

```
cd projects/realtime-collab/server
npm run docker:build
npm run docker:run
```

This exposes the server on ws://localhost:4000.

CRDT Shared Editor:

- The client includes a basic Automerge-powered textarea. Open two browser windows,
  type in one and see the other update in real time. Messages are forwarded via the same WebSocket server.

Presence details:

- Set your display name in the top-right input. It is saved to localStorage.
- Presence labels near the cursor now include your name and a unique color.

Rooms:

- Use the Room input to join a room (default: `main`). Only users in the same room see each other.
  Documents:
- Use the Document input to select a document ID (default: `default`). Doc updates and presence are scoped by both room and document.

Milestones:

- M1: Basic editor and presence
- M2: Commenting + persistence
- M3: Offline sync + conflict resolution
- M4: Auth and multi-document support
