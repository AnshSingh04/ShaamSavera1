import React from 'react';
import { Calendar, MapPin, Users } from 'lucide-react';
import toast from 'react-hot-toast';

interface Event {
  id: number;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  capacity: number;
  image: string;
}

const upcomingEvents: Event[] = [
  {
    id: 1,
    title: "Meditation & Mindfulness",
    description: "Join us for a peaceful morning meditation session in the beautiful rose garden. Perfect for beginners and experienced practitioners alike.",
    date: "April 15, 2024",
    time: "7:00 AM - 8:30 AM",
    location: "Community Rose Garden",
    capacity: 25,
    image: "https://images.pexels.com/photos/3760275/pexels-photo-3760275.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 2,
    title: "Healthy Cooking Workshop",
    description: "Learn to prepare nutritious and delicious meals with our expert nutritionist. All ingredients and recipes provided!",
    date: "April 18, 2024",
    time: "10:00 AM - 12:00 PM",
    location: "Community Kitchen",
    capacity: 15,
    image: "https://images.pexels.com/photos/3768131/pexels-photo-3768131.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 3,
    title: "Evening Music & Dance",
    description: "Celebrate life through traditional music and gentle dance movements. Bring your friends and family for an evening of joy!",
    date: "April 22, 2024",
    time: "5:00 PM - 7:00 PM",
    location: "Community Hall",
    capacity: 40,
    image: "https://images.pexels.com/photos/3768146/pexels-photo-3768146.jpeg?auto=compress&cs=tinysrgb&w=600"
  }
];

const UpcomingEvents: React.FC = () => {
  const handleEventSignUp = (eventTitle: string) => {
    toast.success(`Thank you for your interest in "${eventTitle}"! Full sign-up functionality is coming soon.`, {
      icon: '🎉',
    });
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Upcoming Events
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Join our vibrant community for wellness, joy, and meaningful connections
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {upcomingEvents.map((event) => (
            <div
              key={event.id}
              className="group relative backdrop-blur-md bg-white/85 rounded-2xl border border-white/30 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden"
            >
              {/* Event Image */}
              <div className="aspect-video overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Event Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-orange-500 transition-colors duration-300">
                  {event.title}
                </h3>
                
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  {event.description}
                </p>

                {/* Event Details */}
                <div className="space-y-3 mb-8">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="h-5 w-5 text-orange-400 mr-3 flex-shrink-0" />
                    <span className="text-lg">{event.date}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="h-5 w-5 text-orange-400 mr-3 flex-shrink-0" />
                    <span className="text-lg">{event.location}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Users className="h-5 w-5 text-orange-400 mr-3 flex-shrink-0" />
                    <span className="text-lg">{event.capacity} spots available</span>
                  </div>
                </div>

                {/* Sign Up Button */}
                <button
                  onClick={() => handleEventSignUp(event.title)}
                  className="w-full py-4 px-6 text-lg font-semibold text-white bg-orange-400 hover:bg-orange-500 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  Sign Up for Event
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;