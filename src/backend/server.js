
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { v4: uuidv4 } = require('uuid');

// Simple in-memory database for demonstration
const db = {
  bookings: [],
  orders: [],
  menuItems: [
    {
      id: 1,
      name: "Crispy Calamari",
      description: "Tender calamari rings, lightly breaded and fried, served with lemon aioli",
      price: 12.99,
      image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "appetizers"
    },
    {
      id: 2,
      name: "Bruschetta",
      description: "Toasted bread topped with fresh tomatoes, basil and garlic",
      price: 9.99,
      image: "https://images.unsplash.com/photo-1572695157335-daab09de6668?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "appetizers"
    },
    {
      id: 3,
      name: "Beef Wellington",
      description: "Tenderloin wrapped in puff pastry with mushroom duxelles",
      price: 34.99,
      image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "mains"
    },
    {
      id: 4,
      name: "Grilled Salmon",
      description: "Fresh salmon fillet with lemon butter sauce and seasonal vegetables",
      price: 28.99,
      image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "mains"
    },
    {
      id: 5,
      name: "Mushroom Risotto",
      description: "Creamy arborio rice with wild mushrooms and parmesan",
      price: 19.99,
      image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "mains"
    },
    {
      id: 6,
      name: "Tiramisu",
      description: "Classic Italian dessert with layers of coffee-soaked ladyfingers and mascarpone cream",
      price: 8.99,
      image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "desserts"
    },
    {
      id: 7,
      name: "Chocolate Lava Cake",
      description: "Warm chocolate cake with a molten center, served with vanilla ice cream",
      price: 9.99,
      image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "desserts"
    },
    {
      id: 8,
      name: "House Red Wine",
      description: "Glass of our signature red blend",
      price: 11.99,
      image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "drinks"
    },
    {
      id: 9,
      name: "Craft Mojito",
      description: "Refreshing cocktail with rum, lime, mint, and soda",
      price: 13.99,
      image: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "drinks"
    }
  ],
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

app.get('/api/menu-items', (req, res) => {
  res.json(db.menuItems);
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
    res.status(401).json({ 
      success: false, 
      message: 'Invalid credentials. Please use username: admin, password: admin' 
    });
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
