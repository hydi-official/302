import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import home4 from '../assets/images/home4.jpg';


const AnimatedText = ({ children }) => {
  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
  });

  return <animated.div style={props}>{children}</animated.div>;
};

const Donate = () => {
  const [donationAmount, setDonationAmount] = useState(0);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [paymentStatus, setPaymentStatus] = useState('');

  const handleDonationChange = (e) => {
    setDonationAmount(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleSuccessPayment = () => {
    setPaymentStatus('success');
  };

  const handleFailedPayment = () => {
    setPaymentStatus('error');
  };

  const initializePaystack = async () => {
    const amountInKobo = donationAmount * 100;

    const handler = window.PaystackPop.setup({
      key: 'pk_test_fd7daa1ecb724650b386b5626d1529c8905392d1', // Your Paystack public key
      email: 'esseldacosta00@gmail.com', // Update with the user's email
      amount: amountInKobo,
      currency: 'GHS', // Use GHS for Ghanaian Cedis
      ref: '' + Math.floor(Math.random() * 1000000000 + 1), // Unique reference for the payment
      callback: (response) => {
        // Handle successful payment
        handleSuccessPayment();
      },
      onClose: () => {
        // Handle closed payment popup
        handleFailedPayment();
      },
    });

    handler.openIframe(); // Open Paystack payment popup
  };

  return (
    <div className="min-h-screen bg-cover bg-center bg-gradient-to-r from-blue-500 to-purple-500 text-white flex flex-col md:flex-row">
      {/* Background Image */}
      <div className="w-full md:w-1/2 h-64 md:h-auto bg-cover bg-center" style={{ backgroundImage: `url(${home4 })` }} />

      {/* Donation Content */}
      <div className="w-full md:w-1/2 p-8">
        <AnimatedText>
          <div>
            <h2 className="text-4xl font-bold mb-4">Donate to Care Prime</h2>
          </div>
        </AnimatedText>

        <div className="mb-4">
          <p>
            To help the care prime with any sort of financial support to improve services, you can donate using MTN Mobile Money.
            Contact Essel Eghan, the Executive Director, on +233 (0) 59 530 9592 for assistance.
          </p>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2">Donation Amount</label>
          <input
            type="number"
            value={donationAmount}
            onChange={handleDonationChange}
            className="w-full md:w-2/3 lg:w-1/2 text-black p-2 border border-gray-300 rounded"
            placeholder="Enter donation amount"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2">MTN Mobile Money Number</label>
          <input
            type="tel"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
            className="w-full md:w-2/3 lg:w-1/2 text-black p-2 border border-gray-300 rounded"
            placeholder="Enter your MTN Mobile Money number"
          />
        </div>

        {paymentStatus === 'success' && (
          <p className="text-green-500 mb-4">Payment successful! Thank you for your donation.</p>
        )}

        {paymentStatus === 'error' && (
          <p className="text-red-500 mb-4">Payment failed. Please try again later.</p>
        )}

        <button
          onClick={initializePaystack}
          className="bg-green-500 text-white px-4 py-2 rounded cursor-pointer hover:bg-green-600"
        >
          Donate
        </button>
      </div>
    </div>
  );
};

export default Donate;
