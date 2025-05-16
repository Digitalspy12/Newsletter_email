
import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

// Define the subscriber type
export interface Subscriber {
  id: string;
  email: string;
  timestamp: string;
}

// Define the context type
interface SubscriberContextType {
  subscribers: Subscriber[];
  addSubscriber: (email: string) => void;
  removeSubscriber: (id: string) => void;
}

// Create context with default values
const SubscriberContext = createContext<SubscriberContextType>({
  subscribers: [],
  addSubscriber: () => {},
  removeSubscriber: () => {},
});

// Custom hook for using the context
export const useSubscribers = () => useContext(SubscriberContext);

// Context provider component
export const SubscriberProvider: React.FC<{children: ReactNode}> = ({ children }) => {
  const [subscribers, setSubscribers] = useState<Subscriber[]>([]);

  // Load subscribers from localStorage on mount
  useEffect(() => {
    const storedSubscribers = localStorage.getItem("subscribers");
    if (storedSubscribers) {
      setSubscribers(JSON.parse(storedSubscribers));
    }
  }, []);

  // Save subscribers to localStorage when updated
  useEffect(() => {
    localStorage.setItem("subscribers", JSON.stringify(subscribers));
  }, [subscribers]);

  // Add a new subscriber
  const addSubscriber = (email: string) => {
    const newSubscriber: Subscriber = {
      id: crypto.randomUUID(),
      email,
      timestamp: new Date().toISOString(),
    };
    setSubscribers((prev) => [newSubscriber, ...prev]);
  };

  // Remove a subscriber by ID
  const removeSubscriber = (id: string) => {
    setSubscribers((prev) => prev.filter((subscriber) => subscriber.id !== id));
  };

  return (
    <SubscriberContext.Provider value={{ subscribers, addSubscriber, removeSubscriber }}>
      {children}
    </SubscriberContext.Provider>
  );
};
