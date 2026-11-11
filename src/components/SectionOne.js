import React, { useState, useEffect } from 'react';
import { Zap, ShieldCheck, LifeBuoy, Check, Rocket, BarChart, HardDrive, Wifi, Globe, Signal } from 'lucide-react';

const GradientText = ({children}) => (
    <span className="bg-gradient-to-r from-primary-500 to-primary-600 dark:from-cyan-400 dark:to-sky-500 bg-clip-text text-transparent">
        {children}
    </span>
);

const FloatingElements = () => {
  const elements = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 15 + 10,
    delay: Math.random() * 5,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {elements.map((element) => (
        <div
          key={element.id}
          className="absolute rounded-full bg-primary-500/20 dark:bg-cyan-400/20 animate-float"
          style={{
            left: `${element.x}%`,
            top: `${element.y}%`,
            width: `${element.size}px`,
            height: `${element.size}px`,
            animationDuration: `${element.duration}s`,
            animationDelay: `${element.delay}s`,
          }}
        />
      ))}
    </div>
  );
};

const InteractiveBackground = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <div 
        className="absolute w-96 h-96 bg-primary-500/10 dark:bg-cyan-500/10 rounded-full blur-3xl transition-all duration-1000 ease-out"
        style={{
          left: `${mousePos.x}%`,
          top: `${mousePos.y}%`,
          transform: 'translate(-50%, -50%)',
        }}
      />
      <div 
        className="absolute w-64 h-64 bg-primary-600/5 dark:bg-sky-500/5 rounded-full blur-2xl transition-all duration-1500 ease-out"
        style={{
          left: `${100 - mousePos.x}%`,
          top: `${100 - mousePos.y}%`,
          transform: 'translate(-50%, -50%)',
        }}
      />
    </div>
  );
};

const FuturisticImageDisplay = () => {
  const images = [
    '/images/slide-2.webp',
    '/images/slide-5.webp', 
    '/images/slide-3.webp',
    '/images/slide-6.webp',
    '/images/slide-1.webp',
    '/images/slide-4.webp'
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative flex justify-center items-center w-full h-64 sm:h-80 md:h-auto">
      <InteractiveBackground />
      
      {/* Desktop/Tablet View - Orbital Display */}
      <div className="hidden md:block relative w-full max-w-4xl h-[40rem] lg:h-[50rem]">
        
        {/* Holographic display container */}
        <div className="relative w-full h-full">
          
          {/* Main center display - large active image */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 lg:w-96 lg:h-96 xl:w-[28rem] xl:h-[28rem] z-30">
            <div className="relative w-full h-full">
              {/* Holographic frame */}
              <div className="absolute inset-0 border-2 border-primary-400/60 dark:border-cyan-400/60 rounded-3xl" />
              <div className="absolute inset-2 border border-primary-300/40 dark:border-cyan-300/40 rounded-2xl" />
              
              {/* Main image */}
              <div className="absolute inset-4 lg:inset-8 flex items-center justify-center">
                <img 
                  src={images[activeIndex]}
                  alt={`Featured service ${activeIndex + 1}`}
                  className="max-w-full max-h-full object-contain filter drop-shadow-2xl transition-all duration-1000 hover:scale-110"
                  style={{
                    filter: 'drop-shadow(0 0 20px rgba(59,130,246,0.5)) drop-shadow(0 0 40px rgba(59,130,246,0.3))'
                  }}
                />
              </div>
            </div>
          </div>
          
          {/* Orbital thumbnails */}
          {images.map((image, index) => {
            const angle = (index * 60) - 90;
            const radius = window.innerWidth < 1024 ? 220 : 280;
            const x = Math.cos((angle * Math.PI) / 180) * radius;
            const y = Math.sin((angle * Math.PI) / 180) * radius;
            const isActive = index === activeIndex;
            
            return (
              <div
                key={index}
                className={`absolute w-20 h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-1000 cursor-pointer z-20 ${
                  isActive ? 'scale-125 opacity-100' : 'scale-100 opacity-60 hover:opacity-80 hover:scale-110'
                }`}
                style={{
                  left: `calc(50% + ${x}px)`,
                  top: `calc(50% + ${y}px)`,
                  transform: `translate(-50%, -50%) rotate(${index * 6}deg)`,
                }}
                onClick={() => setActiveIndex(index)}
              >
                <div className={`relative w-full h-full rounded-2xl overflow-hidden border-2 transition-all duration-500 ${
                  isActive 
                    ? 'border-primary-400 dark:border-cyan-400 shadow-lg shadow-primary-400/50 dark:shadow-cyan-400/50' 
                    : 'border-primary-200/40 dark:border-cyan-200/40 hover:border-primary-300 dark:hover:border-cyan-300'
                }`}>
                  <div className="absolute inset-1 bg-gradient-to-br from-slate-100/80 to-slate-200/80 dark:from-slate-800/80 dark:to-slate-900/80 rounded-xl backdrop-blur-sm flex items-center justify-center">
                    <img 
                      src={image}
                      alt={`Service ${index + 1}`}
                      className="max-w-full max-h-full object-contain filter drop-shadow-lg"
                    />
                  </div>
                  
                  {/* Active indicator */}
                  {isActive && (
                    <div className="absolute -inset-1 border border-primary-500 dark:border-cyan-500 rounded-2xl animate-ping" />
                  )}
                </div>
              </div>
            );
          })}
          
          {/* Connecting lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
            {images.map((_, index) => {
              const angle = (index * 60) - 90;
              const radius = window.innerWidth < 1024 ? 220 : 280;
              const x = Math.cos((angle * Math.PI) / 180) * radius;
              const y = Math.sin((angle * Math.PI) / 180) * radius;
              
              return (
                <line
                  key={index}
                  x1="50%"
                  y1="50%"
                  x2={`calc(50% + ${x}px)`}
                  y2={`calc(50% + ${y}px)`}
                  stroke={index === activeIndex ? "rgba(59,130,246,0.6)" : "rgba(59,130,246,0.2)"}
                  strokeWidth={index === activeIndex ? "2" : "1"}
                  className="transition-all duration-500"
                  strokeDasharray="5,5"
                />
              );
            })}
          </svg>
        </div>
        
        {/* Progress indicators - Desktop */}
        <div className="absolute bottom-4 lg:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeIndex 
                  ? 'bg-primary-500 dark:bg-cyan-400 scale-125' 
                  : 'bg-primary-200 dark:bg-cyan-200 hover:bg-primary-300 dark:hover:bg-cyan-300'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Mobile View - Simple Carousel */}
      <div className="md:hidden relative w-full h-full flex items-center justify-center">
        <div className="relative w-48 h-48 sm:w-56 sm:h-56">
          <div className="absolute inset-0 border-2 border-primary-400/60 dark:border-cyan-400/60 rounded-2xl" />
          <div className="absolute inset-4 flex items-center justify-center">
            <img 
              src={images[activeIndex]}
              alt={`Featured service ${activeIndex + 1}`}
              className="max-w-full max-h-full object-contain filter drop-shadow-xl"
            />
          </div>
        </div>
        
        {/* Progress indicators - Mobile */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === activeIndex 
                  ? 'bg-primary-500 dark:bg-cyan-400 scale-125' 
                  : 'bg-primary-200 dark:bg-cyan-200'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const TypewriterText = () => {
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  
  const phrases = [
    "Blazing Fast Fiber For Your Digital Lifestyle",
    "Seamless Streaming, Gaming & Work From Home",
    "Reliable Connectivity For All Your Devices",
    "Experience The Speed You Deserve"
  ];

  useEffect(() => {
    const typingSpeed = isDeleting ? 30 : 100;
    const currentPhrase = phrases[textIndex];
    
    const timer = setTimeout(() => {
      setText(currentPhrase.substring(0, charIndex));
      
      if (!isDeleting && charIndex === currentPhrase.length) {
        // Start deleting after a pause
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && charIndex === 0) {
        // Move to next phrase
        setIsDeleting(false);
        setTextIndex((textIndex + 1) % phrases.length);
      } else {
        // Continue typing or deleting
        setCharIndex(charIndex + (isDeleting ? -1 : 1));
      }
    }, typingSpeed);
    
    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, textIndex, phrases]);
  
  return (
    <span className="text-orange-600 dark:text-blue-400 min-h-[1.5em] inline-block">
      {text}
      <span className="animate-pulse">|</span>
    </span>
  );
};


const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen pt-20 sm:pt-24 md:pt-10 lg:pt-12 pb-4 sm:pb-6 md:pb-12 lg:pb-28 theme-transition">
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-12 items-center">
          <div className="text-center lg:text-left order-2 lg:order-1">
           
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight mb-4 md:mb-6">
              <TypewriterText />
            </h1>
            
            <p className="mt-4 md:mt-6 text-base md:text-lg text-slate-600 dark:text-slate-300 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Experience seamless streaming, gaming, and remote work with our cutting-edge fiber network in Kisumu, Luanda, Vihiga, Kenya. 
              <span className="font-semibold text-primary-600 dark:text-cyan-400"> Reliable, uncapped, and unbelievably fast.</span>
            </p>
            
            <div className="mt-6 md:mt-8 flex flex-col sm:flex-row justify-center lg:justify-start gap-3 md:gap-4">
              <a href="#packages" className="group inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-3.5 text-sm md:text-base font-semibold text-white bg-gradient-to-r from-primary-500 to-primary-600 dark:from-cyan-500 dark:to-sky-500 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-primary-500/50 dark:hover:shadow-cyan-500/50 hover:scale-105 transform">
                <Rocket className="w-4 h-4 md:w-5 md:h-5 mr-2 group-hover:animate-pulse" />
                View Plans & Installation
              </a>
              
              <a href="#terms" className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-3.5 text-sm md:text-base font-semibold text-slate-700 dark:text-white bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm hover:bg-white dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform">
                <Globe className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                Terms of Service
              </a>
            </div>
            
            <div className="mt-6 md:mt-8 flex flex-col sm:flex-row sm:flex-wrap justify-center lg:justify-start gap-3 md:gap-4 text-xs md:text-sm">
              <div className="flex items-center bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm px-3 md:px-4 py-2 rounded-full border border-slate-200 dark:border-slate-700">
                <ShieldCheck className="w-4 h-4 md:w-5 md:h-5 text-primary-500 dark:text-cyan-400 mr-2 animate-pulse"/>
                <span className="text-slate-700 dark:text-slate-300 font-medium">99.9% Uptime Guarantee</span>
              </div>
              
              <div className="flex items-center bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm px-3 md:px-4 py-2 rounded-full border border-slate-200 dark:border-slate-700">
                <LifeBuoy className="w-4 h-4 md:w-5 md:h-5 text-primary-500 dark:text-cyan-400 mr-2 animate-pulse"/>
                <span className="text-slate-700 dark:text-slate-300 font-medium">24/7 Local Support</span>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <FuturisticImageDisplay />
          </div>
        </div>
      </div>
    </section>
  );
};

const FeaturesSection = () => {
  const benefits = [
    { 
      image: "/images/home.webp", 
      title: "Home Fiber", 
      description: "High-speed internet for your home test",
      clickable: true 
    },
    { 
      image: "/images/business.webp", 
      title: "Business Package", 
      description: "Enterprise solutions for your business",
      clickable: true 
    },
    { 
      image: "/images/shop.webp", 
      title: "Amazons Shop", 
      description: "Visit our online store",
      link: "https://amazons.co.ke",
      clickable: true 
    },
    { 
      icon: Rocket, 
      title: "Fastest Broadband Speeds", 
      description: "Lightning-fast fiber technology" 
    },
    { 
      icon: LifeBuoy, 
      title: "24/7 Call Service", 
      description: "Local support always available" 
    },
    { 
      icon: Zap, 
      title: "Fiber Optic Connection", 
      description: "Ultra-reliable infrastructure" 
    },
    { 
      icon: BarChart, 
      title: "98%+ Uptime Guaranteed", 
      description: "Stay connected always" 
    },
    { 
      icon: ShieldCheck, 
      title: "Advanced Monitoring", 
      description: "Proactive network management" 
    },
    { 
      icon: HardDrive, 
      title: "Unlimited Internet", 
      description: "No caps, no limits" 
    }
  ];

  return (
    <section id="features">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="w-full max-w-6xl  mx-auto">
          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 xlg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 mb-6 sm:mb-8 md:mb-12 px-2 sm:px-0">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className={`group p-3 sm:p-4 md:p-6 bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-lg sm:rounded-xl border border-slate-200/50 dark:border-slate-700/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
                  benefit.clickable ? 'cursor-pointer hover:border-primary-400 dark:hover:border-cyan-400 hover:bg-white/80 dark:hover:bg-slate-700/80 hover:shadow-primary-500/20 dark:hover:shadow-cyan-500/20' : ''
                } ${benefit.link ? 'relative overflow-hidden' : ''}`}
                onClick={benefit.link ? () => window.open(benefit.link, '_blank') : undefined}
              >
                {benefit.clickable && (
                  <div className="absolute top-1.5 right-1.5 sm:top-2 sm:right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-primary-500 dark:bg-cyan-500 rounded-full flex items-center justify-center animate-pulse">
                      <span className="text-white text-xs">👆</span>
                    </div>
                  </div>
                )}
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className={`flex-shrink-0 transition-transform duration-300 ${
                    benefit.image 
                      ? 'w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg sm:rounded-xl overflow-hidden group-hover:scale-110' 
                      : 'p-2 sm:p-3 bg-gradient-to-r from-primary-500 to-primary-600 dark:from-cyan-500 dark:to-sky-500 rounded-lg sm:rounded-xl shadow-lg group-hover:scale-110'
                  }`}>
                    {benefit.image ? (
                      <img 
                        src={benefit.image} 
                        alt={benefit.title}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <benefit.icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-slate-900 dark:text-white text-sm sm:text-sm md:text-base group-hover:text-primary-600 dark:group-hover:text-cyan-400 transition-colors duration-300 mb-1 leading-tight">
                      {benefit.title}
                    </h3>
                    <p className="text-xs sm:text-xs md:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default function SectionOne() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(180deg); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes slide-up {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        
        @keyframes slide-horizontal {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.5; box-shadow: 0 0 20px currentColor; }
          50% { opacity: 1; box-shadow: 0 0 40px currentColor, 0 0 60px currentColor; }
        }
        
        @keyframes scan {
          0% { top: 0; }
          100% { top: 100%; }
        }
        
        .animate-float {
          animation: float linear infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 12s linear infinite;
        }
        
        .animate-slide-up {
          animation: slide-up 8s linear infinite;
        }
        
        .animate-slide-horizontal {
          animation: slide-horizontal 12s linear infinite;
        }
        
        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }
        
        .animate-scan {
          animation: scan 3s linear infinite;
        }
        
        .theme-transition {
          transition: all 0.3s ease;
        }
      `}</style>
      
      {/* Extended background for both sections */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-slate-100 to-slate-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900" />
      
      {/* Data stream background image - extended */}
      <div className="absolute inset-0 opacity-30 md:opacity-40 dark:opacity-50 dark:md:opacity-60">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/images/data-stream-light.png')`,
            backgroundBlendMode: 'multiply'
          }}
        />
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-0 dark:opacity-100 transition-opacity duration-300"
          style={{
            backgroundImage: `url('/images/data-stream-dark.png')`,
            backgroundBlendMode: 'multiply'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/40 via-transparent to-slate-900/40 md:from-slate-900/50 md:via-transparent md:to-slate-900/50 dark:from-slate-900/60 dark:via-transparent dark:to-slate-900/60 dark:md:from-slate-900/70 dark:md:via-transparent dark:md:to-slate-900/70" />
      </div>
      
      {/* Enhanced overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/70 via-white/50 to-white/70 md:from-white/80 md:via-white/60 md:to-white/80 dark:from-slate-900/70 dark:via-slate-900/50 dark:to-slate-900/70 dark:md:from-slate-900/80 dark:md:via-slate-900/60 dark:md:to-slate-900/80" />
      
      {/* Floating elements */}
      <FloatingElements />
      
      <HeroSection />
     
      {/* Man Image Layer - Between Sections - Responsive */}
      <div className="relative md:flex z-30 -mt-8 sm:-mt-12 md:-mt-32 lg:-mt-64">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-start md:pt-8">
            
            {/* Man image container - responsive sizing */}
            <div className="relative mb-8 lg:mb-0 md:px-4 lg:pl-8 xl:pl-16">
              <div className="relative w-48 h-64 sm:w-56 sm:h-72 md:w-64 md:h-88 lg:w-72 lg:h-[28rem] xl:w-96 xl:h-[36rem]">
                <img 
                  src="/images/man-standing.webp" 
                  alt="AMAZONS Internet Professional"
                  decoding="async"
                  className="w-full h-full object-cover object-bottom transition-all duration-1000 hover:scale-105"
                  style={{
                    filter: 'drop-shadow(0 0 20px rgba(59,130,246,0.3)) drop-shadow(0 0 30px rgba(59,130,246,0.2)) brightness(1.1) contrast(1.1)'
                  }}
                />
              </div>
              
              {/* Floating tech elements around the man - responsive positioning */}
              <div className="absolute top-8 -right-4 sm:top-12 sm:-right-6 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-r from-primary-500 to-primary-600 dark:from-cyan-500 dark:to-sky-500 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                <Wifi className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
              </div>
              <div className="absolute bottom-12 -left-4 sm:bottom-16 sm:-left-6 md:bottom-20 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-r from-primary-600 to-primary-700 dark:from-sky-500 dark:to-cyan-600 rounded-full flex items-center justify-center shadow-lg animate-bounce" style={{animationDelay: '0.5s'}}>
                <Signal className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
              </div>
              <div className="absolute top-1/2 -right-6 sm:-right-8 md:-right-10 w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-gradient-to-r from-primary-400 to-primary-500 dark:from-cyan-400 dark:to-sky-400 rounded-full flex items-center justify-center shadow-lg animate-bounce" style={{animationDelay: '1s'}}>
                <Zap className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-white" />
              </div>
            </div>
            
            {/* Features section container - responsive spacing */}
            <div className="w-full lg:flex-1 md:mt-4 lg:mt-16 xl:mt-32 lg:ml-4 xl:ml-8">
              <FeaturesSection />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}