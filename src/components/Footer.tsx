import React from 'react';
import { Link } from 'react-router-dom';
import { Sunrise, Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="backdrop-blur-md bg-white/85 border-t border-white/30 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & Mission */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 rounded-full bg-gradient-to-br from-orange-400 to-pink-400 shadow-lg">
                <Sunrise className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900" style={{ fontFamily: 'Dancing Script, cursive' }}>
                  Shaam Savera
                </h3>
                <p className="text-lg text-gray-600 -mt-1">Evening & Morning</p>
              </div>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed mb-6 max-w-md">
              Creating a vibrant community where seniors can rewrite their stories, 
              reinvent their passions, and relive the joy of meaningful connections.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-3 rounded-full bg-orange-400 hover:bg-orange-500 text-white transition-all duration-300 hover:scale-110">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="p-3 rounded-full bg-orange-400 hover:bg-orange-500 text-white transition-all duration-300 hover:scale-110">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="p-3 rounded-full bg-orange-400 hover:bg-orange-500 text-white transition-all duration-300 hover:scale-110">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold text-gray-900 mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li>
                <Link to="/" className="text-lg text-gray-700 hover:text-orange-500 transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-lg text-gray-700 hover:text-orange-500 transition-colors duration-300">
                  All Events
                </Link>
              </li>
              <li>
                <a href="#mission" className="text-lg text-gray-700 hover:text-orange-500 transition-colors duration-300">
                  Our Mission
                </a>
              </li>
              <li>
                <a href="#wellness" className="text-lg text-gray-700 hover:text-orange-500 transition-colors duration-300">
                  Wellness Programs
                </a>
              </li>
              <li>
                <a href="#community" className="text-lg text-gray-700 hover:text-orange-500 transition-colors duration-300">
                  Community Activities
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-xl font-bold text-gray-900 mb-6">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-6 w-6 text-orange-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    123 Community Gardens Lane<br />
                    Wellness District<br />
                    Mumbai, Maharashtra 400001
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-6 w-6 text-orange-400 flex-shrink-0" />
                <p className="text-lg text-gray-700">+91 98765 43210</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-6 w-6 text-orange-400 flex-shrink-0" />
                <p className="text-lg text-gray-700">hello@shaamsavera.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-lg text-gray-600">
              © 2024 Shaam Savera. All rights reserved.
            </p>
            <div className="flex space-x-8">
              <a href="#" className="text-lg text-gray-600 hover:text-orange-500 transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-lg text-gray-600 hover:text-orange-500 transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-lg text-gray-600 hover:text-orange-500 transition-colors duration-300">
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;