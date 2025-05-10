
import { Booking, Order } from '../types';

const API_URL = '/api';

export const bookTable = async (bookingData: Omit<Booking, 'id' | 'createdAt'>): Promise<{ success: boolean }> => {
  try {
    const response = await fetch(`${API_URL}/book-table`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bookingData),
    });
    
    return await response.json();
  } catch (error) {
    console.error('Error booking table:', error);
    return { success: false };
  }
};

export const placeOrder = async (orderData: Omit<Order, 'id' | 'createdAt' | 'status'>): Promise<{ success: boolean }> => {
  try {
    const response = await fetch(`${API_URL}/place-order`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(orderData),
    });
    
    return await response.json();
  } catch (error) {
    console.error('Error placing order:', error);
    return { success: false };
  }
};

export const getBookings = async (): Promise<Booking[]> => {
  try {
    const response = await fetch(`${API_URL}/bookings`);
    return await response.json();
  } catch (error) {
    console.error('Error fetching bookings:', error);
    return [];
  }
};

export const getOrders = async (): Promise<Order[]> => {
  try {
    const response = await fetch(`${API_URL}/orders`);
    return await response.json();
  } catch (error) {
    console.error('Error fetching orders:', error);
    return [];
  }
};

export const adminLogin = async (username: string, password: string): Promise<{ success: boolean }> => {
  try {
    const response = await fetch(`${API_URL}/admin/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });
    
    return await response.json();
  } catch (error) {
    console.error('Error logging in:', error);
    return { success: false };
  }
};
