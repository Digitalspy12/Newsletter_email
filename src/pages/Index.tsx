
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
      className="min-h-screen bg-[#0e1419] text-green-400 flex flex-col items-center justify-start pt-16 pb-20 font-mono"
    >
      <div className="w-full max-w-4xl px-4 mx-auto space-y-24">
        {/* Hero Section */}
        <div className="text-center space-y-6">
          <div className="h-20 w-20 bg-gray-800 rounded-full mx-auto flex items-center justify-center mb-4 border border-green-500">
            <span className="text-2xl text-green-400 glitch-text">{"</>"}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight glitch-text">
            The #1 Newsletter
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight typing">
            For Dev Hackers.
          </h2>
          <p className="text-green-300 max-w-lg mx-auto text-lg font-mono">
            Weekly insights on coding, security, and developer career growth. 
            Stay ahead with practical tips and expert advice.
          </p>
          
          <div className="pt-6">
            {isSubmitted ? (
              <Card className="terminal-window">
                <div className="terminal-header">
                  <span className="terminal-circle red"></span>
                  <span className="terminal-circle yellow"></span>
                  <span className="terminal-circle green"></span>
                  <span className="ml-2 text-green-400 text-sm">confirmation.sh</span>
                </div>
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
