
import React, { useState } from "react";
import { validateEmail } from "../utils/validation";
import { useSubscribers } from "../context/SubscriberContext";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

interface SignupFormProps {
  onSuccess: () => void;
}

const SignupForm: React.FC<SignupFormProps> = ({ onSuccess }) => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [emailError, setEmailError] = useState("");
  const { addSubscriber } = useSubscribers();

  const isValidEmail = validateEmail(email);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isValidEmail) {
      setEmailError("Please enter a valid email address");
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate network delay
    setTimeout(() => {
      addSubscriber(email);
      setIsSubmitting(false);
      onSuccess();
    }, 800);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    
    if (emailError && validateEmail(newEmail)) {
      setEmailError("");
    }
  };

  return (
    <Card className="bg-gray-900/60 border-gray-800 backdrop-blur-sm">
      <div className="w-full max-w-lg mx-auto p-6">
        <form 
          onSubmit={handleSubmit} 
          className="flex flex-col md:flex-row gap-4 w-full" 
          noValidate
        >
          <div className="flex-1">
            <Input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="your@email.com"
              className="w-full px-4 py-6 rounded-md border transition-all duration-300 border-gray-700 bg-gray-800/70 text-white focus:ring-[#4338ca] focus:border-[#4338ca] hover:border-gray-500 transform hover:scale-[1.01] focus:scale-[1.01]"
              disabled={isSubmitting}
              aria-invalid={!!emailError}
              aria-describedby={emailError ? "email-error" : undefined}
              required
            />
            {emailError && (
              <p 
                id="email-error" 
                className="text-red-500 text-sm mt-1 animate-fade-in"
                aria-live="polite"
              >
                {emailError}
              </p>
            )}
          </div>
          
          <Button
            type="submit"
            disabled={!isValidEmail || isSubmitting}
            className="px-6 py-6 bg-[#4338ca] hover:bg-[#3730a3] text-white rounded-md transition-all duration-300 transform hover:scale-105 active:scale-95 disabled:bg-gray-700 disabled:text-gray-300"
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing...
              </span>
            ) : "Subscribe now"}
          </Button>
        </form>
      </div>
    </Card>
  );
};

export default SignupForm;
