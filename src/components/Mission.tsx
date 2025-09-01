import React from 'react';
import { Heart, Users, Sunrise } from 'lucide-react';

const Mission: React.FC = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="backdrop-blur-md bg-white/85 rounded-3xl border border-white/30 shadow-2xl p-8 md:p-16">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Mission
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-pink-400 mx-auto rounded-full"></div>
          </div>

          {/* Mission Statement */}
          <div className="text-center mb-16">
            <p className="text-2xl md:text-3xl text-gray-800 leading-relaxed font-medium mb-8">
              "Rewrite, Reinvent, Relive"
            </p>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
              At Shaam Savera, we believe that every sunset brings the promise of a new dawn. 
              Our mission is to create a vibrant community where seniors can rewrite their stories, 
              reinvent their passions, and relive the joy of meaningful connections.
            </p>
          </div>

          {/* Mission Points */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-orange-400 to-pink-400 shadow-lg mb-6 group-hover:shadow-xl transition-all duration-300">
                <Heart className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Wellness</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Promoting physical and mental well-being through yoga, meditation, and health workshops tailored for seniors.
              </p>
            </div>

            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-orange-400 to-pink-400 shadow-lg mb-6 group-hover:shadow-xl transition-all duration-300">
                <Users className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Community</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Building lasting friendships and connections through shared activities, conversations, and celebrations.
              </p>
            </div>

            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-orange-400 to-pink-400 shadow-lg mb-6 group-hover:shadow-xl transition-all duration-300">
                <Sunrise className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Growth</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Encouraging personal growth, learning new skills, and discovering fresh perspectives on life.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;