
import React from "react";
import { Link } from "react-router-dom";

const ConfirmationMessage: React.FC = () => {
  return (
    <div className="w-full max-w-md mx-auto p-8 bg-white rounded-lg shadow-md animate-fade-in text-center">
      <div className="mb-6 bg-newsletter-light p-4 rounded-full inline-block">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-8 w-8 text-newsletter" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M5 13l4 4L19 7" 
          />
        </svg>
      </div>
      
      <h2 className="text-3xl font-bold mb-2 text-gray-900">
        You are IN.
      </h2>
      <p className="text-xl font-semibold text-gray-800 mb-6">
        There is no going back.
      </p>
      
      <Link 
        to="/subscribers" 
        className="inline-block py-3 px-6 bg-newsletter hover:bg-newsletter-hover text-white font-medium rounded-md transition-all duration-200 active:scale-[0.98] focus:outline-none focus:ring-4 focus:ring-newsletter-light"
      >
        View Subscribers
      </Link>
    </div>
  );
};

export default ConfirmationMessage;
