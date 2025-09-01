import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Lock, User, Phone, Eye, EyeOff } from 'lucide-react';
import toast from 'react-hot-toast';

const SignUp: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.info('Sign up functionality is coming soon! This is just a prototype.', {
      icon: '🎉',
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-lg w-full">
        <div className="backdrop-blur-md bg-white/90 rounded-3xl border border-white/30 shadow-2xl p-8 md:p-12">
          {/* Header */}
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Join Our Community
            </h2>
            <p className="text-lg text-gray-600">
              Create your Shaam Savera account today
            </p>
          </div>

          {/* Sign Up Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-lg font-medium text-gray-900 mb-3">
                  First Name
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-400" />
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-14 pr-4 py-4 text-lg border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition-all duration-300"
                    placeholder="First name"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="lastName" className="block text-lg font-medium text-gray-900 mb-3">
                  Last Name
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-400" />
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-14 pr-4 py-4 text-lg border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition-all duration-300"
                    placeholder="Last name"
                  />
                </div>
              </div>
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-lg font-medium text-gray-900 mb-3">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-400" />
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full pl-14 pr-4 py-4 text-lg border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition-all duration-300"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            {/* Phone Field */}
            <div>
              <label htmlFor="phone" className="block text-lg font-medium text-gray-900 mb-3">
                Phone Number
              </label>
              <div className="relative">
                <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-400" />
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full pl-14 pr-4 py-4 text-lg border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition-all duration-300"
                  placeholder="Enter your phone number"
                />
              </div>
            </div>

            {/* Password Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="password" className="block text-lg font-medium text-gray-900 mb-3">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-400" />
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-14 pr-14 py-4 text-lg border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition-all duration-300"
                    placeholder="Password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors duration-300"
                  >
                    {showPassword ? <EyeOff className="h-6 w-6" /> : <Eye className="h-6 w-6" />}
                  </button>
                </div>
              </div>

              <div>
                <label htmlFor="confirmPassword" className="block text-lg font-medium text-gray-900 mb-3">
                  Confirm Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-400" />
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={showPassword ? 'text' : 'password'}
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-14 pr-4 py-4 text-lg border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition-all duration-300"
                    placeholder="Confirm password"
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-4 px-6 text-xl font-semibold text-white bg-orange-400 hover:bg-orange-500 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Create Account
            </button>
          </form>

          {/* Footer */}
          <div className="mt-8 text-center">
            <p className="text-lg text-gray-600">
              Already have an account?{' '}
              <Link to="/login" className="font-medium text-orange-500 hover:text-orange-600 transition-colors duration-300">
                Sign in here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;