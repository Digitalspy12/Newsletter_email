
import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header: React.FC = () => {
  const location = useLocation();

  return (
    <header className="w-full bg-[#0b1015] shadow-sm px-4 py-4 border-b border-green-800/30">
      <div className="container mx-auto flex justify-between items-center">
        <div className="font-bold text-xl text-green-500 font-mono">console.log(<span className="text-green-300">"Newsletter"</span>)</div>
        <nav className="flex gap-6">
          <Link 
            to="/" 
            className={`transition-colors duration-200 hover:text-green-400 font-mono ${
              location.pathname === "/" ? "text-green-400 font-medium" : "text-green-700"
            }`}
          >
            sign_up.sh
          </Link>
          <Link 
            to="/subscribers" 
            className={`transition-colors duration-200 hover:text-green-400 font-mono ${
              location.pathname === "/subscribers" ? "text-green-400 font-medium" : "text-green-700"
            }`}
          >
            subscribers.sh
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
