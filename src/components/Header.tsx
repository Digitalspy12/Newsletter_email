
import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header: React.FC = () => {
  const location = useLocation();

  return (
    <header className="w-full bg-white shadow-sm px-4 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="font-bold text-xl text-newsletter">Newsletter App</div>
        <nav className="flex gap-6">
          <Link 
            to="/" 
            className={`transition-colors duration-200 hover:text-newsletter ${
              location.pathname === "/" ? "text-newsletter font-medium" : "text-gray-600"
            }`}
          >
            Sign Up
          </Link>
          <Link 
            to="/subscribers" 
            className={`transition-colors duration-200 hover:text-newsletter ${
              location.pathname === "/subscribers" ? "text-newsletter font-medium" : "text-gray-600"
            }`}
          >
            Subscribers
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
