
export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

export interface CartItem extends MenuItem {
  quantity: number;
}

export interface Booking {
  id: string;
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  createdAt: string;
}

export interface Order {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  items: CartItem[];
  total: number;
  createdAt: string;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
}
