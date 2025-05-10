
import { MenuItem, Booking, Order } from '../types';

export const menuItems: MenuItem[] = [
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
];

export const mockBookings: Booking[] = [
  {
    id: "b1",
    name: "John Doe",
    email: "john@example.com",
    phone: "555-1234",
    date: "2025-05-15",
    time: "19:00",
    guests: 2,
    createdAt: "2025-05-10T12:00:00Z"
  },
  {
    id: "b2",
    name: "Jane Smith",
    email: "jane@example.com",
    phone: "555-5678",
    date: "2025-05-16",
    time: "20:30",
    guests: 4,
    createdAt: "2025-05-10T13:30:00Z"
  }
];

export const mockOrders: Order[] = [
  {
    id: "o1",
    name: "Alex Johnson",
    email: "alex@example.com",
    phone: "555-9012",
    address: "123 Main St, Anytown, AN 12345",
    items: [
      { ...menuItems[0], quantity: 1 },
      { ...menuItems[2], quantity: 2 }
    ],
    total: 82.97,
    createdAt: "2025-05-10T15:45:00Z",
    status: "confirmed"
  },
  {
    id: "o2",
    name: "Sam Wilson",
    email: "sam@example.com",
    phone: "555-3456",
    address: "456 Elm St, Othertown, OT 67890",
    items: [
      { ...menuItems[1], quantity: 1 },
      { ...menuItems[4], quantity: 1 },
      { ...menuItems[6], quantity: 2 }
    ],
    total: 49.96,
    createdAt: "2025-05-10T16:20:00Z",
    status: "pending"
  }
];
