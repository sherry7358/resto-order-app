
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { v4: uuidv4 } = require('uuid');

// Simple in-memory database for demonstration
const db = {
  bookings: [],
  orders: [],
  admin: { username: process.env.ADMIN_USER || 'admin', password: process.env.ADMIN_PASS || 'admin' }
};

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// API Routes
app.post('/api/book-table', (req, res) => {
  const booking = {
    ...req.body,
    id: uuidv4(),
    createdAt: new Date().toISOString()
  };
  
  db.bookings.push(booking);
  res.status(201).json({ success: true, booking });
});

app.post('/api/place-order', (req, res) => {
  const order = {
    ...req.body,
    id: uuidv4(),
    createdAt: new Date().toISOString(),
    status: 'pending'
  };
  
  db.orders.push(order);
  res.status(201).json({ success: true, order });
});

app.get('/api/bookings', (req, res) => {
  res.json(db.bookings);
});

app.get('/api/orders', (req, res) => {
  res.json(db.orders);
});

app.post('/api/admin/login', (req, res) => {
  const { username, password } = req.body;
  const { admin } = db;
  
  if (username === admin.username && password === admin.password) {
    res.json({ success: true });
  } else {
    res.status(401).json({ success: false, message: 'Invalid credentials' });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ success: false, message: 'Server error' });
});

// Start the server if not being imported
if (require.main === module) {
  const PORT = process.env.PORT || 4000;
  app.listen(PORT, () => {
    console.log(`Backend running on port ${PORT}`);
  });
}

module.exports = app;
