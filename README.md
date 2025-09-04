# Simple SSE Reader

A minimal TypeScript project that connects to server-sent events and logs them. This project supports both Node.js and browser environments.

## Setup

1. Install dependencies:
```bash
npm install
```

## Usage

### Node.js Environment

Run the TypeScript SSE consumer in Node.js:

```bash
npm run start:node
```

This will:
- Connect to the SSE endpoint defined in `src/index.ts`
- Log each event to the console
- Handle connection status and errors
- Gracefully close on `Ctrl+C`

**Configuration**: Edit the `SSE_URL` variable in `src/index.ts` to point to your SSE endpoint.

### Browser Environment

Run the browser-based SSE demo:

```bash
npm run start:browser
```

Then open your browser and navigate to:
```
http://localhost:8080
```

This will:
- Serve the interactive HTML demo at `src/index.html`
- Provide a web interface to configure API key, server URL, and last ID
- Display events in real-time with timestamps
- Show connection status and event count
- Allow you to connect/disconnect and clear events

## Project Structure

- `src/index.ts` - Node.js SSE consumer
- `src/index.html` - Browser-based SSE demo interface
- `package.json` - Dependencies and scripts

## Dependencies

- `eventsource` - SSE client library