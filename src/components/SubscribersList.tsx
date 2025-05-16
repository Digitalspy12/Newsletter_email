
import React from "react";
import { Link } from "react-router-dom";
import { useSubscribers, Subscriber } from "../context/SubscriberContext";

const SubscribersList: React.FC = () => {
  const { subscribers, removeSubscriber } = useSubscribers();

  // Format the timestamp to a readable date
  const formatDate = (timestamp: string): string => {
    const date = new Date(timestamp);
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    }).format(date);
  };

  const handleRemove = (id: string) => {
    if (window.confirm("Are you sure you want to remove this subscriber?")) {
      removeSubscriber(id);
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md animate-fade-in">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Subscribers List</h2>
        <Link 
          to="/" 
          className="text-newsletter hover:text-newsletter-hover transition-colors duration-200"
        >
          Back to Sign Up
        </Link>
      </div>

      {subscribers.length === 0 ? (
        <div className="text-center py-12 bg-gray-50 rounded-lg">
          <p className="text-gray-500 text-lg">No subscribers yet.</p>
          <Link 
            to="/" 
            className="inline-block mt-4 text-newsletter hover:text-newsletter-hover transition-colors duration-200"
          >
            Add your first subscriber
          </Link>
        </div>
      ) : (
        <div className="overflow-hidden rounded-lg border border-gray-200">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Email
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date Subscribed
                </th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {subscribers.map((subscriber: Subscriber) => (
                <tr key={subscriber.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {subscriber.email}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {formatDate(subscriber.timestamp)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button
                      onClick={() => handleRemove(subscriber.id)}
                      className="text-red-600 hover:text-red-900 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 rounded-md px-2 py-1"
                      aria-label={`Remove ${subscriber.email}`}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default SubscribersList;
