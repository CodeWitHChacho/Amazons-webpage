import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Play, Video, Monitor, Users,  Smartphone, Tablet,  Shield } from 'lucide-react';
import { option } from 'framer-motion/client';

// Custom hook for intersection observer
const useInView = (options = {}) => {
    const [isInView, setIsInView] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsInView(true);
                observer.unobserve(entry.target); // Only animate once
            }
        }, {
            threshold: 0.1,
            rootMargin: '50px',
            ...options
        });

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, []);

    return [ref, isInView];
};

// FAQ Component - Compact with animations
const FaqItem = ({ question, answer, index }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [itemRef, itemInView] = useInView();

    return (
        <div 
            ref={itemRef}
            className={`border-b border-slate-200 dark:border-slate-700 last:border-b-0 transform transition-all duration-700 ease-out ${
                itemInView 
                ? 'translate-y-0 opacity-100' 
                : 'translate-y-8 opacity-0'
            }`}
            style={{ transitionDelay: `${index * 100}ms` }}
        >
            <button 
                onClick={() => setIsOpen(!isOpen)} 
                className="w-full flex justify-between items-center text-left py-3 sm:py-4 hover:text-orange-500 transition-colors group"
            >
                <span className="text-sm sm:text-base lg:text-lg font-semibold text-slate-900 dark:text-white pr-4 group-hover:text-orange-500 transition-colors">
                    {question}
                </span>
                <ChevronDown className={`w-4 h-4 sm:w-5 sm:h-5 text-orange-500 transform transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 pb-3 sm:pb-4' : 'max-h-0'}`}>
                <div className="pr-6 sm:pr-8 text-slate-600 dark:text-slate-400 leading-relaxed text-xs sm:text-sm lg:text-base">
                    <p>{answer}</p>
                </div>
            </div>
        </div>
    );
};

// TV Package Section with Professional Animations and Background Image
const TvPackageSection = () => {
    const [sectionRef, sectionInView] = useInView();
    const [headerRef, headerInView] = useInView();
    const [tvRef, tvInView] = useInView();
    const [ appInView] = useInView();
    const [logosRef, logosInView] = useInView();

    return (
        <section 
            ref={sectionRef}
            className="py-6 sm:py-8 lg:py-12 relative overflow-hidden"
        >
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img 
                    src="/images/tv-section-bg.webp" 
                    alt="Background" 
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'block';
                    }}
                />
                {/* Fallback gradient background */}
                <div 
                    className="w-full h-full bg-gradient-to-br from-red-600 via-red-500 to-orange-500 dark:from-slate-800 dark:via-slate-700 dark:to-slate-600" 
                    style={{display: 'none'}}
                ></div>
            </div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-600/80 via-red-500/70 to-orange-500/80 dark:from-slate-800/90 dark:via-slate-700/80 dark:to-slate-600/90 z-10"></div>
            
            {/* Additional Dark Overlay for Better Text Readability */}
            <div className="absolute inset-0 bg-black/20 dark:bg-black/40 z-20"></div>

            {/* Background decorations */}
            <div className="absolute inset-0 z-30">
                <div className={`absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl transition-all duration-1000 ${
                    sectionInView ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                }`} style={{ transitionDelay: '200ms' }}></div>
                <div className={`absolute bottom-20 right-20 w-32 h-32 bg-orange-300/20 rounded-full blur-2xl transition-all duration-1000 ${
                    sectionInView ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                }`} style={{ transitionDelay: '400ms' }}></div>
                <div className={`absolute top-1/2 left-1/4 w-16 h-16 bg-red-300/20 rounded-full blur-xl transition-all duration-1000 ${
                    sectionInView ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                }`} style={{ transitionDelay: '600ms' }}></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-40">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 items-center">
                    {/* Left Side - Content */}
                    <div className="text-white space-y-4 sm:space-y-5 order-2 lg:order-1">
                        {/* Header */}
                        <div 
                            ref={headerRef}
                            className={`space-y-3 sm:space-y-4 transform transition-all duration-1000 ease-out ${
                                headerInView 
                                ? 'translate-x-0 opacity-100' 
                                : '-translate-x-12 opacity-0'
                            }`}
                        >
                            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight drop-shadow-lg">
                                Get AMAZONS<br />
                                <span className="text-yellow-300 dark:text-yellow-400 drop-shadow-lg">SmartTV packages</span>
                            </h1>
                            
                            <p className="text-sm sm:text-base lg:text-lg text-white/95 leading-relaxed max-w-lg drop-shadow-md">
                                Get connected with AMAZONS Unlimited Internet that can provide your every technology need to connect the world.
                                Download our app and manage your TV remotely once paired. Connect to Amazons Network from your phone.
                            </p>
                            
                            {/* Google TV Store CTA */}
                            <div className="inline-flex items-center space-x-2 bg-white/15 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
                                <Monitor className="w-4 h-4 text-white/90" />
                                <span className="text-sm text-white/90 font-medium">Comming soon on Google TV Store</span>
                            </div>
                            <div className="flex flex-wrap gap-2 sm:gap-3">
                                <div className={`flex items-center space-x-2 bg-white/25 px-3 py-1.5 rounded-full text-xs sm:text-sm transform transition-all duration-700 ${
                                    appInView ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
                                }`} style={{ transitionDelay: '500ms' }}>
                                    <Smartphone className="w-3 h-3 sm:w-4 sm:h-4" />
                                    <span className="text-white font-medium drop-shadow-sm">Remote Control</span>
                                </div>
                                <div className={`flex items-center space-x-2 bg-white/25 px-3 py-1.5 rounded-full text-xs sm:text-sm transform transition-all duration-700 ${
                                    appInView ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
                                }`} style={{ transitionDelay: '600ms' }}>
                                    <Shield className="w-3 h-3 sm:w-4 sm:h-4" />
                                    <span className="text-white font-medium drop-shadow-sm">Easy Pairing</span>
                                </div>
                            </div>
                        </div>

                        {/* All Services Logos */}
                        <div 
                            ref={logosRef}
                            className={`space-y-3 transform transition-all duration-1000 ease-out ${
                                logosInView 
                                ? 'translate-x-0 opacity-100' 
                                : 'translate-x-12 opacity-0'
                            }`}
                            style={{ transitionDelay: '400ms' }}
                        >
                            <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-white/95 flex items-center space-x-2 drop-shadow-md">
                                <div className="bg-white/25 p-1.5 rounded-lg">
                                    <Play className="w-4 h-4 sm:w-5 sm:h-5" />
                                </div>
                                <span>Stream & Stay Connected:</span>
                            </h3>
                            <img 
                                src="/images/all-services-logos.webp" 
                                alt="Netflix, YouTube, Prime Video, Disney+, Hulu, HBO Max, Apple TV+, Facebook, Instagram, Twitter, TikTok, WhatsApp, Telegram"
                                loading="lazy"
                                decoding="async"
                                className={`w-3/4 sm:w-4/5 lg:w-3/5 h-auto object-contain rounded-lg transform transition-all duration-1000 ${
                                    logosInView ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
                                }`}
                                style={{ transitionDelay: '600ms' }}
                                onError={(e) => {
                                    e.target.style.display = 'none';
                                    e.target.nextSibling.style.display = 'flex';
                                }}
                            />
                            {/* Fallback content */}
                            <div className="w-3/4 h-12 sm:h-14 flex items-center justify-center text-center" style={{display: 'none'}}>
                                <div>
                                    <Users className="w-5 h-5 sm:w-6 sm:h-6 text-white/60 mx-auto mb-1" />
                                    <p className="text-white/60 text-xs sm:text-sm">All Services Logos</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - TV Images - Reduced Size */}
                    <div className="flex justify-center items-center relative order-1 lg:order-2">
                        <div 
                            ref={tvRef}
                            className={`relative w-full max-w-xs sm:max-w-sm lg:max-w-2xl xl:max-w-3xl transform transition-all duration-1200 ease-out ${
                                tvInView 
                                ? 'scale-100 opacity-100 rotate-0' 
                                : 'scale-75 opacity-0 rotate-3'
                            }`}
                        >
                            {/* Main TV Image - Big on Large Screens */}
                            <div className="relative">
                                <div className="w-full h-32 sm:h-40 lg:h-80 xl:h-96 2xl:h-[28rem] overflow-hidden">
                                    <img 
                                        src="/images/secondary-tv-imag.webp" 
                                        alt="Main Smart TV" 
                                        loading="lazy"
                                        decoding="async"
                                        className="w-full h-full object-contain filter drop-shadow-2xl"
                                        onError={(e) => {
                                            e.target.style.display = 'none';
                                            e.target.nextSibling.style.display = 'flex';
                                        }}
                                    />
                                    {/* Fallback content */}
                                    <div className="w-full h-full flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20" style={{display: 'none'}}>
                                        <div className="text-center">
                                            <Monitor className="w-8 h-8 sm:w-12 sm:h-12 lg:w-20 lg:h-20 xl:w-24 xl:h-24 text-white/60 mx-auto mb-2" />
                                            <p className="text-white/60 text-sm sm:text-base lg:text-xl">Main TV Image</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Secondary TV - Big on Large Screens */}
                            <div className={`absolute -top-2 sm:-top-3 lg:-top-6 xl:-top-8 -right-2 sm:-right-3 lg:-right-6 xl:-right-8 transform rotate-12 z-10 transition-all duration-1000 ease-out ${
                                tvInView 
                                ? 'translate-x-0 translate-y-0 opacity-100' 
                                : 'translate-x-8 -translate-y-4 opacity-0'
                            }`} style={{ transitionDelay: '300ms' }}>
                                <div className="w-20 h-16 sm:w-28 sm:h-22 lg:w-56 lg:h-42 xl:w-72 xl:h-54 2xl:w-80 2xl:h-60 overflow-hidden">
                                    <img 
                                        src="/images/main-tv-image.webp" 
                                        alt="Secondary Smart TV" 
                                        loading="lazy"
                                        decoding="async"
                                        className="w-full h-full object-contain filter drop-shadow-xl"
                                        onError={(e) => {
                                            e.target.style.display = 'none';
                                            e.target.nextSibling.style.display = 'flex';
                                        }}
                                    />
                                    {/* Fallback content */}
                                    <div className="w-full h-full flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-lg border border-white/20" style={{display: 'none'}}>
                                        <div className="text-center">
                                            <Tablet className="w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8 xl:w-10 xl:h-10 text-white/60 mx-auto mb-1" />
                                            <p className="text-white/60 text-xs sm:text-sm lg:text-base">Secondary</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Action Icons - Big on Large Screens */}
                            <div className={`absolute top-2 sm:top-3 lg:top-8 xl:top-12 left-2 sm:left-3 lg:left-8 xl:left-12 bg-red-600 text-white p-2 sm:p-2.5 lg:p-4 xl:p-6 rounded-xl shadow-lg animate-bounce z-20 transition-all duration-1000 ${
                                tvInView ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                            }`} style={{ transitionDelay: '800ms' }}>
                                <Play className="w-3 h-3 sm:w-4 sm:h-4 lg:w-6 lg:h-6 xl:w-8 xl:h-8" />
                            </div>
                            <div className={`absolute bottom-2 sm:bottom-3 lg:bottom-8 xl:bottom-12 right-2 sm:right-3 lg:right-8 xl:right-12 bg-blue-600 text-white p-2 sm:p-2.5 lg:p-4 xl:p-6 rounded-xl shadow-lg animate-pulse z-20 transition-all duration-1000 ${
                                tvInView ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                            }`} style={{ transitionDelay: '1000ms' }}>
                                <Video className="w-3 h-3 sm:w-4 sm:h-4 lg:w-6 lg:h-6 xl:w-8 xl:h-8" />
                            </div>
                            
                            {/* Enhanced Glow Effect */}
                            <div className={`absolute inset-0 bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 rounded-3xl blur-2xl lg:blur-[4rem] xl:blur-[5rem] opacity-30 -z-10 transform scale-110 animate-pulse transition-all duration-1000 ${
                                tvInView ? 'opacity-30' : 'opacity-0'
                            }`} style={{ transitionDelay: '200ms' }}></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// FAQ Section - Compact
const FaqSection = () => {
    const faqs = [
        { 
            q: "What internet speeds do you offer?", 
            a: "We offer a range of speeds from 5 mbps to meet every need and budget. Our fiber-optic network ensures consistent performance with symmetrical upload and download speeds, perfect for streaming, gaming, and remote work." 
        },
        { 
            q: "Are there any data caps or hidden fees?", 
            a: "Absolutely not. All our plans come with unlimited data usage. There are no hidden fees, no overage charges, and no throttling. What you see is what you pay - transparent pricing with no surprises." 
        },
        { 
            q: "How long does installation take?", 
            a: "Most installations are completed within 2-4 hours on the same day. We'll schedule a time that's convenient for you, and our certified local technicians will handle everything from fiber connection to Wi-Fi setup." 
        },
        { 
            q: "Do you offer business internet plans?", 
            a: "Yes, we have dedicated business plans with enhanced features including static IP addresses, priority customer support, service level agreements (SLAs), and higher bandwidth options. Contact us for a custom business quote." 
        },
        { 
            q: "What if I experience technical issues?", 
            a: "Our local technical support team is available 24/7 to help resolve any issues. We offer phone support, remote troubleshooting, and on-site visits when necessary - all included in your monthly plan." 
        },
        { 
            q: "Can I upgrade or downgrade my plan?", 
            a: "Yes, you can change your plan at any time without penalties or installation fees. Simply contact our customer service team, and we'll adjust your service level to meet your current needs." 
        }
    ];

    return (
        <section className="py-8 sm:py-12 lg:py-16 bg-gradient-to-br from-slate-50 via-orange-50 to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 relative">
            {/* Background decorations */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-10 left-10 w-24 h-24 bg-orange-200/30 dark:bg-orange-500/10 rounded-full blur-xl"></div>
                <div className="absolute bottom-10 right-10 w-28 h-28 bg-red-200/30 dark:bg-red-500/10 rounded-full blur-xl"></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
                {/* Section Header - Compact */}
                <div className="text-center mb-8 sm:mb-12">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-3">
                        Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">Questions</span>
                    </h2>
                    <p className="text-sm sm:text-base lg:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        Everything you need to know about our internet service
                    </p>
                </div>

                {/* FAQ Container - Compact */}
                <div className="max-w-3xl mx-auto">
                    <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-lg rounded-2xl p-4 sm:p-6 border border-orange-100 dark:border-slate-700 shadow-xl">
                        <div className="space-y-0">
                            {faqs.map((faq, index) => (
                                <FaqItem key={index} question={faq.q} answer={faq.a} />
                            ))}
                        </div>
                    </div>
                </div>

               
            </div>
        </section>
    );
};

// Main Component
export default function ComprehensiveLandingSection() {
    return (
        <div className="min-h-screen">
            <TvPackageSection />
            <FaqSection />
        </div>
    );
}