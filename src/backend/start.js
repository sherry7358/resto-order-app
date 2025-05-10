
const { spawn } = require('child_process');
const path = require('path');
const server = require('./server');

// Start the backend server
const PORT = process.env.PORT || 4000;
server.listen(PORT, () => {
  console.log(`Backend server running on port ${PORT}`);
});

// Log a message to help users
console.log('Backend API server is running. Frontend can connect to it at /api.');
console.log('You can now use the application with real backend integration!');
