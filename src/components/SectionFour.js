import React, { useState, useEffect, useRef } from 'react';
import { Phone, Mail, MapPin, BookOpen, Smartphone, Download, Star, ArrowRight} from 'lucide-react';

// Custom hook for intersection observer
const useIntersectionObserver = (options = {}) => {
    const [isIntersecting, setIsIntersecting] = useState(false);
    const [hasAnimated, setHasAnimated] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting && !hasAnimated) {
                setIsIntersecting(true);
                setHasAnimated(true);
            }
        }, {
            threshold: 0.1,
            rootMargin: '50px',
            ...options
        });

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [hasAnimated, options]);

    return [ref, isIntersecting];
};

const BlogSection = () => {
    const [sectionRef, isSectionVisible] = useIntersectionObserver();
    
    const blogPosts = [
        {
            title: "5G vs Fiber: Which is Better for Your Home?",
            excerpt: "Discover the key differences between 5G and fiber internet connections and which one suits your needs best.",
            date: "Jul 10, 2025",
            readTime: "5 min read",
            category: "Technology",
            image: "/images/blog-5g-fiber.webp"
        },
        {
            title: "Setting Up Your Home Network Like a Pro",
            excerpt: "Learn professional tips and tricks for optimizing your home network setup for maximum performance.",
            date: "Jul 8, 2025",
            readTime: "8 min read",
            category: "Tips & Guides",
            image: "/images/blog-network-setup.webp"
        },
        {
            title: "The Future of Internet in Kenya",
            excerpt: "Exploring how high-speed internet is transforming businesses and communities across Kenya.",
            date: "Jul 5, 2025",
            readTime: "6 min read",
            category: "Industry News",
            image: "/images/blog-kenya-internet.webp"
        }
    ];

    return (
        <section 
            ref={sectionRef}
            id='blog' 
            className="pb-20 pt-20 bg-gradient-to-br from-slate-50 to-orange-50 dark:from-slate-900 dark:to-slate-800"
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className={`text-center mb-16 transition-all duration-1000 ease-out ${
                    isSectionVisible 
                        ? 'opacity-100 translate-y-0' 
                        : 'opacity-0 translate-y-8'
                }`}>
                    <div className="inline-flex items-center gap-2 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 px-4 py-2 rounded-full font-medium mb-4">
                        <BookOpen className="w-4 h-4" />
                        Our Blog
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white mb-6">
                        Stay <span className="text-orange-500">Informed</span>
                    </h2>
                    <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                        Get the latest insights on internet technology, tips for better connectivity, and industry news from our experts.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {blogPosts.map((post, index) => (
                        <article 
                            key={index} 
                            className={`group bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                                isSectionVisible 
                                    ? 'opacity-100 translate-y-0' 
                                    : 'opacity-0 translate-y-12'
                            }`}
                            style={{
                                transitionDelay: isSectionVisible ? `${index * 200}ms` : '0ms'
                            }}
                        >
                            <div className="h-48 relative overflow-hidden">
                                <img 
                                    src={post.image} 
                                    alt={post.title}
                                    loading="lazy"
                                    decoding="async"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                                <div className="absolute inset-0 bg-black/20"></div>
                                <div className="absolute top-4 left-4">
                                    <span className="bg-white/90 text-orange-600 px-3 py-1 rounded-full text-sm font-medium">
                                        {post.category}
                                    </span>
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400 mb-3">
                                    <span>{post.date}</span>
                                    <span>•</span>
                                    <span>{post.readTime}</span>
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-orange-500 transition-colors">
                                    {post.title}
                                </h3>
                                <p className="text-slate-600 dark:text-slate-400 mb-4 line-clamp-3">
                                    {post.excerpt}
                                </p>
                                <button className="inline-flex items-center gap-2 text-orange-500 font-semibold hover:gap-3 transition-all">
                                    Read More <ArrowRight className="w-4 h-4" />
                                </button>
                            </div>
                        </article>
                    ))}
                </div>

                <div className={`text-center transition-all duration-1000 ease-out ${
                    isSectionVisible 
                        ? 'opacity-100 translate-y-0' 
                        : 'opacity-0 translate-y-8'
                }`} style={{ transitionDelay: isSectionVisible ? '600ms' : '0ms' }}>
                    <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                        View All Articles
                    </button>
                </div>
            </div>
        </section>
    );
};

const AppDownloadSection = () => {
    const [sectionRef, isSectionVisible] = useIntersectionObserver();
    const [hoveredButton, setHoveredButton] = useState(null);
    
    return (
        <section 
            ref={sectionRef}
            className="py-20 bg-gradient-to-br from-orange-500 via-orange-600 to-orange-900 dark:from-slate-800 dark:via-slate-900 dark:to-slate-950 relative overflow-hidden"
        >
            {/* Background Image */}
            <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50 dark:opacity-1"
                style={{
                    backgroundImage: "url('/images/background-image.webp')"
                }}
            ></div>

            {/* Gradient Overlays - Updated for dark mode */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/60 via-orange-600/60 to-orange-700/60 dark:from-slate-800/80 dark:via-slate-900/80 dark:to-slate-950/80"></div>
            
            {/* Animated blur elements */}
            <div className={`absolute top-20 left-1/4 w-96 h-96 bg-orange-400/30 dark:bg-orange-500/20 rounded-full blur-3xl transition-all duration-1000 ${
                isSectionVisible ? 'scale-100 opacity-100' : 'scale-50 opacity-0'
            }`}></div>
            <div className={`absolute bottom-20 right-1/4 w-80 h-80 bg-orange-300/40 dark:bg-orange-400/20 rounded-full blur-3xl transition-all duration-1000 ${
                isSectionVisible ? 'scale-100 opacity-100' : 'scale-50 opacity-0'
            }`} style={{ transitionDelay: '300ms' }}></div>

            {/* Content */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Content */}
                    <div className={`text-white dark:text-slate-100 transition-all duration-1000 ease-out ${
                        isSectionVisible 
                            ? 'opacity-100 translate-x-0' 
                            : 'opacity-0 -translate-x-12'
                    }`}>
                        <div className="inline-flex items-center gap-2 bg-white/20 dark:bg-slate-700/40 backdrop-blur-sm text-white dark:text-slate-200 px-6 py-3 rounded-full font-medium mb-8 border border-white/30 dark:border-slate-600/50">
                            <Smartphone className="w-5 h-5" />
                            Mobile Experience
                        </div>
                        
                        <h2 className="text-4xl lg:text-6xl font-extrabold mb-6 leading-tight">
                            All speeds. All control.
                            <span className="block text-orange-100 dark:text-slate-300">One simple app.</span>
                        </h2>
                        
                        <p className="text-xl text-orange-100 dark:text-slate-300 mb-8 leading-relaxed font-light">
                            The Amazons Fiber app is the best way to manage and monitor your high-speed internet. Track usage, pay bills, get support, and optimize your connection.
                        </p>

                        {/* Features Grid */}
                        <div className="grid grid-cols-2 gap-4 mb-10">
                            {[
                                { icon: <Phone className="w-5 h-5" />, text: "24/7 Support" },
                                { icon: <Mail className="w-5 h-5" />, text: "Instant Billing" },
                                { icon: <MapPin className="w-5 h-5" />, text: "Usage Tracking" },
                                { icon: <Star className="w-5 h-5" />, text: "Speed Tests" }
                            ].map((feature, index) => (
                                <div 
                                    key={index} 
                                    className={`flex items-center gap-3 transition-all duration-700 ease-out ${
                                        isSectionVisible 
                                            ? 'opacity-100 translate-y-0' 
                                            : 'opacity-0 translate-y-4'
                                    }`}
                                    style={{ transitionDelay: `${400 + index * 100}ms` }}
                                >
                                    <div className="w-10 h-10 bg-white/20 dark:bg-slate-700/40 backdrop-blur-sm rounded-xl flex items-center justify-center text-white dark:text-slate-200 border border-white/30 dark:border-slate-600/50">
                                        {feature.icon}
                                    </div>
                                    <span className="text-orange-100 dark:text-slate-300 font-medium">{feature.text}</span>
                                </div>
                            ))}
                        </div>

                        {/* Download Section */}
                        <div className={`transition-all duration-1000 ease-out ${
                            isSectionVisible 
                                ? 'opacity-100 translate-y-0' 
                                : 'opacity-0 translate-y-8'
                        }`} style={{ transitionDelay: '800ms' }}>
                            {/* Primary Download Button */}
                            <div className="mb-8">
                                <button className="group bg-white hover:bg-orange-50 dark:bg-slate-200 dark:hover:bg-slate-100 text-slate-900 dark:text-slate-800 font-bold px-12 py-5 rounded-2xl transition-all duration-300 hover:scale-105 shadow-2xl border-2 border-white/30 dark:border-slate-300/50 hover:border-orange-200 dark:hover:border-orange-300">
                                    <span className="flex items-center gap-3">
                                        <Download className="w-6 h-6 text-orange-500 group-hover:animate-bounce" />
                                        Comming Soon!
                                    </span>
                                </button>
                            </div>

                            {/* App Store Buttons */}
                            <div className="flex flex-row items-center justify-center gap-6 sm:gap-8 py-2">
                                <div 
                                    className="relative"
                                    onMouseEnter={() => setHoveredButton('playstore')}
                                    onMouseLeave={() => setHoveredButton(null)}
                                >
                                    <button
                                        className="hover:scale-105 transition-transform duration-300 border-2 rounded-xl ease-in-out drop-shadow-md border-white/20 dark:border-slate-600/50"
                                        aria-label="Get it on Google Play"
                                        onClick={() => window.open('https://play.google.com/store/apps/details?id=com.amazonsfiber.app', '_blank')}
                                    >
                                        <img
                                            src="/images/gplay.png"
                                            alt="Get it on Google Play"
                                            className="h-20 w-auto"
                                        />
                                    </button>
                                    
                                    {/* QR Code for Play Store */}
                                    {/* <div className={`absolute -top-32 left-1/2 transform -translate-x-1/2 bg-white dark:bg-slate-100 p-3 rounded-lg shadow-xl transition-all duration-300 z-50 ${
                                        hoveredButton === 'playstore' ? 'opacity-100 visible' : 'opacity-0 invisible'
                                    }`}>
                                        <img 
                                            src="https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=https://play.google.com/store/apps/details?id=com.amazonsfiber.app"
                                            alt="QR Code for Play Store"
                                            className="w-20 h-20"
                                        />
                                        <p className="text-xs text-slate-600 text-center mt-1">Scan to download</p>
                                    </div> */}
                                </div>

                                <div 
                                    className="relative"
                                    onMouseEnter={() => setHoveredButton('appstore')}
                                    onMouseLeave={() => setHoveredButton(null)}
                                >
                                    <button
                                        className="hover:scale-105 transition-transform duration-300 ease-in-out drop-shadow-md"
                                        aria-label="Download on the App Store"
                                        onClick={() => window.open('https://apps.apple.com/app/amazons-fiber/id123456789', '_blank')}
                                    >
                                        <img
                                            src="/images/appstore.svg"
                                            alt="Download on the App Store"
                                            className="h-20 w-auto"
                                        />
                                    </button>
                                 
                                    {/* QR Code for App Store */}
                                    {/* <div className={`absolute -top-32 left-1/2 transform -translate-x-1/2 bg-white dark:bg-slate-100 p-3 rounded-lg shadow-xl transition-all duration-300 z-50 ${
                                        hoveredButton === 'appstore' ? 'opacity-100 visible' : 'opacity-0 invisible'
                                    }`}>
                                        <img 
                                            src="https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=https://apps.apple.com/app/amazons-fiber/id123456789"
                                            alt="QR Code for App Store"
                                            className="w-20 h-20"
                                        />
                                        <p className="text-xs text-slate-600 text-center mt-1">Scan to download</p>
                                    </div> */}
                                </div>
                            </div>

                            {/* Download Stats */}
                            {/* <div className="flex justify-center items-center gap-8 mt-8 text-orange-100 dark:text-slate-300">
                                <div className="flex items-center gap-2">
                                    <Star className="w-5 h-5 fill-current" />
                                    <span className="text-sm">4.8/5 Rating</span>
                                </div>
                                <div className="w-1 h-1 bg-orange-300 dark:bg-slate-400 rounded-full"></div>
                                <div className="flex items-center gap-2">
                                    <Download className="w-5 h-5" />
                                    <span className="text-sm">10K+ Downloads</span>
                                </div>
                            </div> */}
                        </div>
                    </div>

                    {/* Right Content - Phone Mockup */}
                    <div className={`flex justify-center lg:justify-end transition-all duration-1000 ease-out ${
                        isSectionVisible 
                            ? 'opacity-100 translate-x-0' 
                            : 'opacity-0 translate-x-12'
                    }`} style={{ transitionDelay: '400ms' }}>
                        <div className="relative">
                            {/* Phone Frame */}
                            <div className="w-full h-full bg-white dark:bg-slate-200 rounded-[2.5rem] overflow-hidden relative shadow-2xl">
                                {/* App Screenshot */}
                                <img 
                                    src="/images/app-screenshot.png" 
                                    alt="Amazons Fiber App Screenshot"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Floating Elements */}
                            <div className={`absolute -top-4 -right-4 w-12 h-12 bg-white/90 dark:bg-slate-200/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center border border-white/30 dark:border-slate-300/50 transition-all duration-700 ${
                                isSectionVisible ? 'scale-100 rotate-0' : 'scale-0 rotate-180'
                            }`} style={{ transitionDelay: '800ms' }}>
                                <Download className="w-6 h-6 text-orange-500" />
                            </div>
                            
                            <div className={`absolute -bottom-4 -left-4 w-16 h-16 bg-orange-400/90 dark:bg-orange-500/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center border border-white/30 dark:border-orange-400/50 transition-all duration-700 ${
                                isSectionVisible ? 'scale-100 rotate-0' : 'scale-0 -rotate-180'
                            }`} style={{ transitionDelay: '1000ms' }}>
                                <Star className="w-8 h-8 text-white fill-current" />
                            </div>
                            
                            {/* Additional floating blur effect */}
                            <div className={`absolute top-1/2 -right-8 w-24 h-24 bg-white/10 dark:bg-orange-300/20 rounded-full blur-2xl transition-all duration-1000 ${
                                isSectionVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                            }`} style={{ transitionDelay: '600ms' }}></div>
                        </div>
                    </div>
                </div>
                
            </div>
        </section>
    );
};

export default function SectionFour() {
    return (
        <>
            <BlogSection />
            <AppDownloadSection />
        </>
    );
}