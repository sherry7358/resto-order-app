
import React from 'react';
import { useLocation, Navigate, Link } from 'react-router-dom';
import { Booking, Order } from '../types';

interface LocationState {
  type: 'booking' | 'order';
  data: Booking | Order;
}

const Confirmation = () => {
  const location = useLocation();
  const state = location.state as LocationState | null;
  
  if (!state) {
    return <Navigate to="/" replace />;
  }
  
  const { type, data } = state;
  const isBooking = type === 'booking';
  const bookingData = isBooking ? data as Booking : null;
  const orderData = !isBooking ? data as Order : null;
  
  return (
    <div className="py-12">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-accent rounded-full mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            
            <h1 className="text-3xl font-bold mb-2">
              {isBooking ? 'Table Reserved Successfully!' : 'Order Placed Successfully!'}
            </h1>
            
            <p className="text-gray-600">
              {isBooking 
                ? 'We look forward to welcoming you to our restaurant.' 
                : 'Thank you for your order. We\'ll prepare it with care.'}
            </p>
          </div>
          
          <div className="border-t border-b py-4 my-6">
            <h2 className="text-xl font-semibold mb-4">
              {isBooking ? 'Reservation Details' : 'Order Details'}
            </h2>
            
            {isBooking ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-600">Name</p>
                  <p className="font-medium">{bookingData?.name}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Date & Time</p>
                  <p className="font-medium">
                    {bookingData?.date} at {bookingData?.time}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Number of Guests</p>
                  <p className="font-medium">{bookingData?.guests}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Confirmation Number</p>
                  <p className="font-medium">{bookingData?.id}</p>
                </div>
              </div>
            ) : (
              <div>
                <div className="mb-4">
                  <p className="text-sm text-gray-600">Order Number</p>
                  <p className="font-medium">{orderData?.id}</p>
                </div>
                
                <div className="mb-4">
                  <p className="text-sm text-gray-600">Delivery To</p>
                  <p className="font-medium">{orderData?.name}</p>
                  <p>{orderData?.address}</p>
                </div>
                
                <div className="mb-4">
                  <p className="text-sm text-gray-600 mb-2">Order Summary</p>
                  <div className="space-y-2">
                    {orderData?.items.map((item) => (
                      <div key={item.id} className="flex justify-between">
                        <span>
                          {item.quantity} x {item.name}
                        </span>
                        <span>${(item.price * item.quantity).toFixed(2)}</span>
                      </div>
                    ))}
                    <div className="border-t pt-2 mt-2 font-bold flex justify-between">
                      <span>Total</span>
                      <span>${orderData?.total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          <div className="text-center">
            <Link to="/" className="btn-primary">
              Return to Homepage
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
