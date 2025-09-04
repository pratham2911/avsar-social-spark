import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroEducation from '@/assets/hero-education.jpg';
import communityLearning from '@/assets/community-learning.jpg';
import childHope from '@/assets/child-hope.jpg';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: heroEducation,
      title: "Empowering Through Education",
      subtitle: "Providing free, quality education to underprivileged children",
      description: "Join us in creating opportunities for every child to learn, grow, and build a brighter future.",
    },
    {
      image: communityLearning,
      title: "Building Stronger Communities",
      subtitle: "Community-driven initiatives for lasting change",
      description: "Working at grassroots level to create sustainable impact through education and awareness.",
    },
    {
      image: childHope,
      title: "A Vision for Every Child",
      subtitle: "Every child deserves a chance to dream and achieve",
      description: "Together, we can bridge the gap between privilege and underprivilege.",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Slide Images */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-transform duration-1000 ease-in-out ${
            index === currentSlide ? 'translate-x-0' : 
            index < currentSlide ? '-translate-x-full' : 'translate-x-full'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl text-white">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                {slides[currentSlide].title}
              </h1>
              <p className="text-xl md:text-2xl mb-4 text-orange-200">
                {slides[currentSlide].subtitle}
              </p>
              <p className="text-lg md:text-xl mb-8 text-gray-200 max-w-2xl">
                {slides[currentSlide].description}
              </p>
            </div>
            
            <div className="animate-slide-up flex flex-col sm:flex-row gap-4">
              <Button className="btn-hero text-lg px-8 py-4">
                Join Our Mission
              </Button>
              <Button className="btn-outline-hero text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-300 text-white"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-300 text-white"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-white scale-125' : 'bg-white/50'
            }`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 z-20 animate-bounce">
        <div className="w-1 h-16 bg-white/30 rounded-full">
          <div className="w-1 h-4 bg-white rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;