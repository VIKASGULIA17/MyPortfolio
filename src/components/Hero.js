import React, { useEffect, useRef } from 'react';
import { ArrowDown, Download, Mail, MapPin } from 'lucide-react';
import { portfolioData } from '../data/mock';
import resume from "../assets/Resume_vikas.pdf"
import img from "../assets/image.png"
const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    // Animate floating particles
    const particles = document.querySelectorAll('[data-particle]');
    particles.forEach((particle, index) => {
      particle.style.animation = `float ${10 + Math.random() * 20}s infinite linear`;
      particle.style.animationDelay = `${Math.random() * 10}s`;
    });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const scrollToNext = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen relative overflow-hidden bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      {/* Animated Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-purple-500 rounded-full opacity-20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 10}s`,
                animationDuration: `${10 + Math.random() * 20}s`,
              }}
              data-particle={i}
            ></div>
          ))}
        </div>
        
        {/* Moving Gradient Orbs */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse floating-orb"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse floating-orb-delayed"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse floating-orb-slow"></div>
        
        {/* Animated Lines */}
        <div className="absolute inset-0">
          <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#8b5cf6', stopOpacity: 0.1 }} />
                <stop offset="100%" style={{ stopColor: '#ec4899', stopOpacity: 0.3 }} />
              </linearGradient>
            </defs>
            <path
              d="M0,200 Q400,100 800,200 T1600,200"
              stroke="url(#lineGradient)"
              strokeWidth="2"
              fill="none"
              className="animate-draw"
            />
            <path
              d="M0,400 Q600,300 1200,400 T2400,400"
              stroke="url(#lineGradient)"
              strokeWidth="1"
              fill="none"
              className="animate-draw-delayed"
            />
          </svg>
        </div>
        
        {/* Geometric Shapes */}
        <div className="absolute   top-20 right-20 w-16 h-16 border-2 border-purple-500 opacity-20 rotate-45 animate-spin-slow"></div>
        <div className="absolute bottom-20 left-20 w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 opacity-20 animate-bounce-slow"></div>
        <div className="absolute top-1/3 left-1/4 w-8 h-8 bg-blue-500 opacity-20 animate-pulse"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          {/* Text Content */}
          <div ref={heroRef} className="space-y-8 opacity-0 transform translate-y-8 transition-all duration-1000">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-sm font-medium text-purple-600 dark:text-purple-400">
                <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                <span>Available for opportunities</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-gray-900 dark:text-white">Hi, I'm </span>
                <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent animate-gradient">
                  {portfolioData.personal.name}
                </span>
              </h1>
              
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-700 dark:text-gray-300">
                {portfolioData.personal.title}
              </h2>
              
              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed">
                {portfolioData.personal.tagline}
              </p>
            </div>

            {/* Contact Info */}
            <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>{portfolioData.personal.email}</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>{portfolioData.personal.location}</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Get In Touch
              </button>
              
              <a
                href={resume}
                download
                className="px-8 py-3 border-2 border-purple-600 text-purple-600 dark:text-purple-400 font-semibold rounded-lg hover:bg-purple-600 hover:text-white transition-all duration-300 flex items-center space-x-2 group"
              >
                <Download className="w-4 h-4 group-hover:animate-bounce" />
                <span>Download Resume</span>
              </a>
            </div>
          </div>

          {/* Image/Avatar */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-700 shadow-2xl transform hover:scale-105 transition-all duration-500">
                <img
                  src={img}
                  alt={portfolioData.personal.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold animate-bounce">
                AI
              </div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold animate-bounce animation-delay-1000">
                ML
              </div>
              <div className="absolute top-1/2 -left-8 w-12 h-12 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold animate-pulse">
                📊
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={scrollToNext}
          className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400"
        >
          <ArrowDown className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
};

export default Hero;