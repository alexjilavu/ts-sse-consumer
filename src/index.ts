const SSESource = require('eventsource');

const SSE_URL = '{insert sse url here}';

console.log('Connecting to SSE...');

const eventSource = new SSESource(SSE_URL);

eventSource.onopen = () => {
  console.log('✅ Connected!');
};

eventSource.onmessage = (event: any) => {
  console.log('📨 Event received:', event.data);
};

eventSource.onerror = (error: any) => {
  console.error('❌ Error:', error);
};

// Handle Ctrl+C to close connection
process.on('SIGINT', () => {
  console.log('\nClosing connection...');
  eventSource.close();
  process.exit(0);
});