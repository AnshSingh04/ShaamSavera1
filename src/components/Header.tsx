import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sunrise } from 'lucide-react';

const Header: React.FC = () => {
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-white/20 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="p-2 rounded-full bg-gradient-to-br from-orange-400 to-pink-400 shadow-lg group-hover:shadow-xl transition-all duration-300">
              <Sunrise className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900 group-hover:text-orange-500 transition-colors duration-300">
                Shaam Savera
              </h1>
              <p className="text-sm text-gray-600 -mt-1">Evening & Morning</p>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`text-lg font-medium transition-colors duration-300 ${
                location.pathname === '/' ? 'text-orange-500' : 'text-gray-700 hover:text-orange-500'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/events" 
              className={`text-lg font-medium transition-colors duration-300 ${
                location.pathname === '/events' ? 'text-orange-500' : 'text-gray-700 hover:text-orange-500'
              }`}
            >
              Events
            </Link>
          </nav>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-4">
            <Link 
              to="/login"
              className="px-6 py-3 text-lg font-medium text-gray-700 hover:text-orange-500 transition-colors duration-300 min-w-[80px] text-center"
            >
              Login
            </Link>
            <Link 
              to="/signup"
              className="px-8 py-3 text-lg font-medium text-white bg-orange-400 hover:bg-orange-500 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 min-w-[100px] text-center"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;