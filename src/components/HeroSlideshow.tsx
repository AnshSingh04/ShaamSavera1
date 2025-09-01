import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Slide {
  id: number;
  title: string;
  description: string;
  image: string;
  date: string;
}

const slides: Slide[] = [
  {
    id: 1,
    title: "Morning Yoga in the Park",
    description: "A beautiful gathering of our community members enjoying peaceful morning yoga sessions in the lush green gardens.",
    image: "https://images.pexels.com/photos/3822621/pexels-photo-3822621.jpeg?auto=compress&cs=tinysrgb&w=1200",
    date: "March 2024"
  },
  {
    id: 2,
    title: "Laughter Club Celebration",
    description: "Joyful moments from our weekly laughter therapy sessions that bring smiles and wellness to our community.",
    image: "https://images.pexels.com/photos/3768131/pexels-photo-3768131.jpeg?auto=compress&cs=tinysrgb&w=1200",
    date: "February 2024"
  },
  {
    id: 3,
    title: "Community Health Workshop",
    description: "Educational health and wellness workshops designed specifically for our senior community members.",
    image: "https://images.pexels.com/photos/3768146/pexels-photo-3768146.jpeg?auto=compress&cs=tinysrgb&w=1200",
    date: "January 2024"
  }
];

const HeroSlideshow: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className="relative h-[70vh] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20"></div>
          
          {/* Content Overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="max-w-4xl mx-auto px-6 text-center">
              <div className="backdrop-blur-md bg-white/85 rounded-2xl p-8 md:p-12 shadow-2xl border border-white/30">
                <span className="inline-block px-4 py-2 bg-orange-400 text-white text-lg font-medium rounded-full mb-6">
                  {slide.date}
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  {slide.title}
                </h2>
                <p className="text-xl md:text-2xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
                  {slide.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 p-4 rounded-full backdrop-blur-md bg-white/90 border border-white/30 shadow-lg hover:bg-white hover:shadow-xl transition-all duration-300"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-8 w-8 text-gray-800" />
      </button>
      
      <button
        onClick={goToNext}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 p-4 rounded-full backdrop-blur-md bg-white/90 border border-white/30 shadow-lg hover:bg-white hover:shadow-xl transition-all duration-300"
        aria-label="Next slide"
      >
        <ChevronRight className="h-8 w-8 text-gray-800" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-4 h-4 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-orange-400 shadow-lg' 
                : 'bg-white/60 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlideshow;