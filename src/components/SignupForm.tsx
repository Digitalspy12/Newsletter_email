
import React, { useState } from "react";
import { validateEmail } from "../utils/validation";
import { useSubscribers } from "../context/SubscriberContext";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

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
    <div className="w-full max-w-md mx-auto p-6 bg-white rounded-lg shadow-md animate-fade-in backdrop-blur-sm bg-white/90">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800 font-serif transform transition-all hover:scale-105 duration-300">
        Subscribe to our Newsletter
      </h2>
      
      <form onSubmit={handleSubmit} className="space-y-4" noValidate>
        <div className="space-y-2 transition-all duration-300 hover:translate-y-[-2px]">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 font-serif">
            Email Address
          </label>
          <Input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="your@email.com"
            className={`w-full px-4 py-3 rounded-md border transition-all duration-300 ${
              emailError 
                ? "border-red-500 focus:ring-red-200" 
                : "border-gray-300 focus:ring-newsletter-light"
            } focus:outline-none focus:ring-4 focus:scale-[1.02] hover:border-newsletter`}
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
          className={`w-full py-3 px-6 rounded-md font-medium text-white transition-all duration-300 transform hover:scale-105 active:scale-95 ${
            !isValidEmail 
              ? "bg-gray-400 cursor-not-allowed" 
              : isSubmitting 
                ? "bg-newsletter opacity-80 cursor-wait" 
                : "bg-newsletter hover:bg-newsletter-hover hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-newsletter-light"
          }`}
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Processing...
            </span>
          ) : "Sign Up"}
        </Button>
      </form>
    </div>
  );
};

export default SignupForm;
