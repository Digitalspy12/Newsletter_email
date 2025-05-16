
import React, { useState } from "react";
import SignupForm from "../components/SignupForm";
import ConfirmationMessage from "../components/ConfirmationMessage";

const Index: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmitSuccess = () => {
    setIsSubmitted(true);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
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
