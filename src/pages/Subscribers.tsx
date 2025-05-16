
import React from "react";
import SubscribersList from "../components/SubscribersList";

const Subscribers: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Newsletter Subscribers
        </h1>
        
        <SubscribersList />
      </div>
    </div>
  );
};

export default Subscribers;
