
import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import ProtectedRoute from '../components/ProtectedRoute';
import { getBookings, getOrders } from '../services/api';
import { Booking, Order } from '../types';
import { mockBookings, mockOrders } from '../data/mockData';

const AdminDashboard = () => {
  const { logout } = useAuth();
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);
  const [activeTab, setActiveTab] = useState<'bookings' | 'orders'>('bookings');
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        // In a real app, these would call the API
        // const bookingsData = await getBookings();
        // const ordersData = await getOrders();
        
        // Using mock data for demonstration
        setBookings(mockBookings);
        setOrders(mockOrders);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchData();
  }, []);
  
  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gray-50">
        <nav className="bg-text text-white shadow-md">
          <div className="container-custom py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold">Admin Dashboard</h1>
            <button
              onClick={logout}
              className="px-4 py-2 bg-white text-text rounded hover:bg-gray-100 transition-colors"
            >
              Logout
            </button>
          </div>
        </nav>
        
        <div className="container-custom py-8">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="flex border-b">
              <button
                className={`px-6 py-3 text-lg font-medium flex-1 ${
                  activeTab === 'bookings'
                    ? 'bg-primary text-white'
                    : 'bg-white text-text hover:bg-gray-50'
                }`}
                onClick={() => setActiveTab('bookings')}
              >
                Table Bookings
              </button>
              <button
                className={`px-6 py-3 text-lg font-medium flex-1 ${
                  activeTab === 'orders'
                    ? 'bg-primary text-white'
                    : 'bg-white text-text hover:bg-gray-50'
                }`}
                onClick={() => setActiveTab('orders')}
              >
                Food Orders
              </button>
            </div>
            
            <div className="p-6">
              {isLoading ? (
                <div className="text-center py-8">
                  <p className="text-lg">Loading data...</p>
                </div>
              ) : activeTab === 'bookings' ? (
                <div>
                  <h2 className="text-2xl font-semibold mb-4">Table Reservations</h2>
                  
                  {bookings.length === 0 ? (
                    <p className="text-gray-600">No reservations found.</p>
                  ) : (
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="bg-gray-100">
                            <th className="px-4 py-2 text-left">Name</th>
                            <th className="px-4 py-2 text-left">Date</th>
                            <th className="px-4 py-2 text-left">Time</th>
                            <th className="px-4 py-2 text-left">Guests</th>
                            <th className="px-4 py-2 text-left">Contact</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y">
                          {bookings.map((booking) => (
                            <tr key={booking.id}>
                              <td className="px-4 py-3">{booking.name}</td>
                              <td className="px-4 py-3">{booking.date}</td>
                              <td className="px-4 py-3">{booking.time}</td>
                              <td className="px-4 py-3">{booking.guests}</td>
                              <td className="px-4 py-3">
                                <div>{booking.phone}</div>
                                <div className="text-sm text-gray-600">{booking.email}</div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              ) : (
                <div>
                  <h2 className="text-2xl font-semibold mb-4">Food Orders</h2>
                  
                  {orders.length === 0 ? (
                    <p className="text-gray-600">No orders found.</p>
                  ) : (
                    <div className="space-y-6">
                      {orders.map((order) => (
                        <div key={order.id} className="border rounded-md p-4">
                          <div className="flex justify-between items-start mb-4">
                            <div>
                              <h3 className="font-semibold">Order #{order.id}</h3>
                              <p className="text-sm text-gray-600">
                                {new Date(order.createdAt).toLocaleString()}
                              </p>
                            </div>
                            <div className="text-right">
                              <span className="bg-secondary text-text px-3 py-1 rounded-full text-sm font-medium capitalize">
                                {order.status}
                              </span>
                            </div>
                          </div>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <div>
                              <h4 className="text-sm font-medium text-gray-700 mb-1">
                                Customer
                              </h4>
                              <p>{order.name}</p>
                              <p>{order.phone}</p>
                              <p>{order.email}</p>
                            </div>
                            <div>
                              <h4 className="text-sm font-medium text-gray-700 mb-1">
                                Delivery Address
                              </h4>
                              <p>{order.address}</p>
                            </div>
                          </div>
                          
                          <h4 className="text-sm font-medium text-gray-700 mb-2">
                            Order Items
                          </h4>
                          <div className="space-y-2 mb-4">
                            {order.items.map((item) => (
                              <div key={item.id} className="flex justify-between">
                                <span>
                                  {item.quantity} x {item.name}
                                </span>
                                <span>${(item.price * item.quantity).toFixed(2)}</span>
                              </div>
                            ))}
                            <div className="border-t pt-2 font-bold flex justify-between">
                              <span>Total</span>
                              <span>${order.total.toFixed(2)}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default AdminDashboard;
