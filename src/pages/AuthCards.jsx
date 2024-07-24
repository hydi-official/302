// src/components/AuthCards.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FaSignInAlt, FaUserPlus } from 'react-icons/fa';

const AuthCards = () => {
  return (
    <div className="fixed top-18 right-4 z-50 flex flex-col gap-2">
      <Link to="/login" className="bg-white shadow-md rounded-lg flex items-center p-3 border border-gray-300 hover:shadow-lg transition w-40">
        <FaSignInAlt className="text-blue-500 text-xl mr-2" />
        <span className="text-sm font-medium">Sign In</span>
      </Link>
      <Link to="/register" className="bg-white shadow-md rounded-lg flex items-center p-3 border border-gray-300 hover:shadow-lg transition w-40">
        <FaUserPlus className="text-green-500 text-xl mr-2" />
        <span className="text-sm font-medium">Sign Up</span>
      </Link>
    </div>
  );
};

export default AuthCards;
