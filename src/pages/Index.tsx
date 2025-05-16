
import React, { useState } from "react";
import SignupForm from "../components/SignupForm";
import ConfirmationMessage from "../components/ConfirmationMessage";
import TargetAudience from "../components/TargetAudience";
import Testimonials from "../components/Testimonials";
import TeamSection from "../components/TeamSection";
import { Card, CardContent } from "../components/ui/card";

const Index: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmitSuccess = () => {
    setIsSubmitted(true);
  };

  return (
    <div 
      className="min-h-screen bg-[#121212] text-white flex flex-col items-center justify-start pt-16 pb-20"
    >
      <div className="w-full max-w-4xl px-4 mx-auto space-y-24">
        {/* Hero Section */}
        <div className="text-center space-y-6">
          <div className="h-20 w-20 bg-gray-800 rounded-full mx-auto flex items-center justify-center mb-4">
            <span className="text-2xl">{"</>"}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold font-serif tracking-tight">
            The #1 Newsletter
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold font-serif tracking-tight text-gray-300">
            For Dev Hackers.
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto text-lg">
            Weekly insights on coding, security, and developer career growth. 
            Stay ahead with practical tips and expert advice.
          </p>
          
          <div className="pt-6">
            {isSubmitted ? (
              <Card className="bg-gray-900/60 border-gray-800">
                <CardContent className="pt-6">
                  <ConfirmationMessage />
                </CardContent>
              </Card>
            ) : (
              <SignupForm onSuccess={handleSubmitSuccess} />
            )}
          </div>
        </div>
        
        {/* Target Audience Section */}
        <TargetAudience />
        
        {/* Team Section */}
        <TeamSection />
        
        {/* Testimonials Section */}
        <Testimonials />
      </div>
    </div>
  );
};

export default Index;
