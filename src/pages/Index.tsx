
import React, { useState } from "react";
import SignupForm from "../components/SignupForm";
import ConfirmationMessage from "../components/ConfirmationMessage";

const Index: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmitSuccess = () => {
    setIsSubmitted(true);
  };

  return (
    <div 
      className="container mx-auto px-4 py-12 min-h-screen flex items-center justify-center bg-cover bg-center bg-fixed"
      style={{ 
        backgroundImage: "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80')",
        backgroundBlendMode: "overlay",
        backgroundColor: "rgba(255, 255, 255, 0.7)"
      }}
    >
      <div className="max-w-xl w-full">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8 font-serif animate-fade-in backdrop-blur-sm bg-white/30 py-4 rounded-lg shadow-sm">
          Join Our Newsletter
        </h1>
        
        {isSubmitted ? (
          <ConfirmationMessage />
        ) : (
          <SignupForm onSuccess={handleSubmitSuccess} />
        )}
      </div>
    </div>
  );
};

export default Index;
