import React, { useState, useEffect, useRef } from 'react';
import { Check, CheckCircle, Clock,  ArrowRight, ChevronLeft, MapPin, Phone, User, Building, ChevronDown } from 'lucide-react';

const fallbackPlans = [
  {
    "id": 1,
    "name": "10Mbps Basic Plan",
    "speed": 10,
    "price": 1500,
    "description": "Ideal for light internet users. Basic plan allows smooth browsing, email usage and social media on many devices. Perfect for individuals or small households with basic needs."
  },
  {
    "id": 2,
    "name": "15Mbps Standard Plan",
    "speed": 15,
    "price": 2000,
    "description": "A step up for households with moderate usage. Supports 2-3 HD video streaming (YouTube, Netflix), online gaming, and faster downloads."
  },
  {
    "id": 3,
    "name": "20Mbps Premium Plan",
    "speed": 20,
    "price": 2500,
    "description": "Balanced speed for busy homes. Stream HD content on multiple devices, make lag-free video calls, and download large files quickly. Handle 3-4 devices with ease."
  },
  {
    "id": 4,
    "name": "25Mbps Ultra Plan",
    "speed": 25,
    "price": 3000,
    "description": "Ultra-smooth 4K streaming, rapid file downloads, and seamless online gaming and working across 5+ devices. Best for busy wifi households, content creators, or power users who demand top-tier speed without compromise."
  },
    {
    "id": 5,
    "name": "30Mbps Ultra Plan",
    "speed": 30,
    "price": 3500,
    "description": "Ultra-smooth 4K streaming, rapid file downloads, and seamless online gaming and working across 5+ devices. Best for busy wifi households, content creators, or power users who demand top-tier speed without compromise, Ideal for large families, remote workers, or anyone who wants the best performance for all their online activities without worrying about slowdowns."
  }
];


const LoadingSpinner = () => (
    <div className="flex items-center justify-center py-20">
        <div className="relative">
            <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-200 dark:border-slate-700"></div>
            <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-600 border-t-transparent absolute top-0"></div>
        </div>
    </div>
);

const CoverageSection = ({ setShowForm }) => {
    const [formData, setFormData] = useState({ 
        townArea: '', 
        estateName: '', 
        landmark: '', 
        generalArea: '' 
    });
    const [checkResult, setCheckResult] = useState(null);
    const [showDropdown, setShowDropdown] = useState(false);
    // setShowForm is now passed as a prop

    const coverageAreas = [
        { name: "Maseno Town", coverage: "Full Coverage", status: "active" },
        { name: "Luanda Market", coverage: "Full Coverage", status: "active" },
        { name: "Business District", coverage: "Full Coverage", status: "active" },
        { name: "Yala Township", coverage: "Expanding Soon", status: "active" },
        { name: "Siaya Center", coverage: "Expanding Soon", status: "coming" },
        { name: "Bondo Town", coverage: "Planning Phase", status: "planned" },
        { name: "Kisumu City", coverage: "Full Coverage", status: "coming" },
        { name: "Kakamega Town", coverage: "Expanding Soon", status: "coming" },
        { name: "Vihiga Center", coverage: "Planning Phase", status: "planned" }
    ];

    const handleCoverageCheck = () => {
        if (!formData.townArea.trim()) return;
        
        const area = coverageAreas.find(area => 
            area.name.toLowerCase().includes(formData.townArea.toLowerCase())
        );
        setCheckResult(area || { name: formData.townArea, coverage: "Not yet available", status: "unavailable" });
    };

    const handleAreaSelect = (areaName) => {
        setFormData({...formData, townArea: areaName});
        setShowDropdown(false);
        
        // Auto-check coverage when area is selected
        const area = coverageAreas.find(area => area.name === areaName);
        setCheckResult(area);
    };

    return (
        <section 
        id='contact'
            className="py-10 relative min-h-screen"
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
                        Coverage <span className="text-orange-500 dark:text-blue-400">Map</span>
                    </h2>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Coverage Map */}
                    <div className="space-y-6">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Service Areas</h3>
                        
                        {/* Google Maps */}
                        <div className="bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm rounded-2xl p-6 border border-white/20 dark:border-slate-700/50 shadow-2xl">
                            <div className="relative overflow-hidden rounded-xl">
                                <iframe 
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127674.0511154459!2d34.64900822858899!3d0.08336253283287434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x17800c2778604159%3A0x7e448ddc8e934919!2sVihiga%20County!5e0!3m2!1sen!2ske!4v1752496522699!5m2!1sen!2ske" 
                                    className="w-full h-80 lg:h-96 border-0 rounded-xl" 
                                    allowFullScreen="" 
                                    loading="lazy" 
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Service Coverage Map"
                                />
                                
                                {/* Coverage Overlay Indicators */}
                                <div className="absolute top-4 left-4 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-lg p-3 shadow-lg border border-gray-200/50 dark:border-slate-600/50">
                                    <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-2">Live Coverage Areas</h4>
                                    <div className="space-y-1">
                                        <div className="flex items-center space-x-2">
                                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                            <span className="text-xs text-slate-600 dark:text-slate-300">Active Coverage</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                                            <span className="text-xs text-slate-600 dark:text-slate-300">Expanding Soon</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Updated Dark Theme Form */}
                    <div className="bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm rounded-3xl p-8 border border-white/20 dark:border-slate-700/50 shadow-2xl">
                        <div className="text-center mb-8">
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                                Get connected to Amazons Fibre
                            </h3>
                            <p className="text-slate-600 dark:text-slate-400">
                                Find out if your area is fibre ready
                            </p>
                        </div>

                        <div className="space-y-4">
                            {/* Select Town/Area Dropdown */}
                            <div className="relative">
                                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                                    Select your town/area
                                </label>
                                <div className="relative">
                                    <button
                                        type="button"
                                        onClick={() => setShowDropdown(!showDropdown)}
                                        className="w-full px-4 py-3 text-left bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 dark:focus:ring-blue-500 focus:border-green-500 dark:focus:border-blue-500 flex items-center justify-between text-slate-900 dark:text-white transition-all duration-200"
                                    >
                                        <span className={formData.townArea ? "text-slate-900 dark:text-white" : "text-slate-500 dark:text-slate-400"}>
                                            {formData.townArea || "Select town/area"}
                                        </span>
                                        <ChevronDown className={`w-5 h-5 text-slate-400 dark:text-slate-500 transform transition-transform ${showDropdown ? 'rotate-180' : ''}`} />
                                    </button>
                                    
                                    {showDropdown && (
                                        <div className="absolute z-10 w-full mt-1 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-lg shadow-lg max-h-60 overflow-auto">
                                            {coverageAreas.map((area, index) => (
                                                <button
                                                    key={index}
                                                    type="button"
                                                    onClick={() => handleAreaSelect(area.name)}
                                                    className="w-full px-4 py-3 text-left hover:bg-slate-50 dark:hover:bg-slate-600 flex items-center justify-between border-b border-slate-100 dark:border-slate-600 last:border-b-0 transition-colors duration-150"
                                                >
                                                    <span className="text-slate-900 dark:text-white">{area.name}</span>
                                                    <div className={`w-2 h-2 rounded-full ${
                                                        area.status === 'active' ? 'bg-green-500' :
                                                        area.status === 'coming' ? 'bg-orange-500' : 'bg-slate-400'
                                                    }`}></div>
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>

                           
                            
                            {/* Closest Landmark */}
                            <div>
                                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                                    Enter Closest Landmark
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter closest landmark"
                                    className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 dark:focus:ring-blue-500 focus:border-green-500 dark:focus:border-blue-500 transition-all duration-200"
                                    value={formData.landmark}
                                    onChange={(e) => setFormData({...formData, landmark: e.target.value})}
                                />
                            </div>


                            {/* Get Connected Button/Badge */}
                            {!checkResult ? (
                                <button
                                    onClick={handleCoverageCheck}
                                    disabled={!formData.townArea}
                                    className={`w-full font-semibold py-3 px-6 rounded-lg mt-6 transition-all duration-200 ${
                                        formData.townArea 
                                            ? 'bg-green-600 hover:bg-green-700 dark:bg-blue-600 dark:hover:bg-blue-700 text-white cursor-pointer shadow-lg hover:shadow-xl transform hover:scale-105' 
                                            : 'bg-slate-300 dark:bg-slate-600 text-slate-600 dark:text-slate-400 cursor-not-allowed'
                                    }`}
                                >
                                    Get Connected
                                </button>
                            ) : (
                                <div className="mt-6">
                                    <div className={`w-full p-4 rounded-lg text-center font-semibold ${
                                        checkResult.status === 'active' 
                                            ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 border-2 border-green-200 dark:border-green-700' 
                                            : checkResult.status === 'coming'
                                            ? 'bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300 border-2 border-orange-200 dark:border-orange-700'
                                            : 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300 border-2 border-red-200 dark:border-red-700'
                                    }`}>
                                        <div className="flex items-center justify-center space-x-2">
                                            {checkResult.status === 'active' && <CheckCircle className="w-5 h-5" />}
                                            {checkResult.status === 'coming' && <Clock className="w-5 h-5" />}
                                            {checkResult.status === 'unavailable' && <MapPin className="w-5 h-5" />}
                                            <span>
                                                {checkResult.status === 'active' ? 'Fibre Available!' :
                                                 checkResult.status === 'coming' ? 'Coming Soon' :
                                                 'Not Available Yet'}
                                            </span>
                                        </div>
                                        <p className="text-sm mt-2 opacity-75">
                                            {checkResult.status === 'active' ? 'Great news! Amazons Fibre is available in your area.' :
                                             checkResult.status === 'coming' ? 'We\'re expanding to your area soon. We\'ll notify you when available.' :
                                             'Service not yet available. We\'ll notify you when we expand to your area.'}
                                        </p>
                                    </div>
{/*                                     
                                    {checkResult.status === 'active' && (
                                        <button 
                                            onClick={() => {
                                                // Store the form data for the installation form with clear values
                                                window.installationFormData = {
                                                    location: formData.townArea || '',
                                                    landmark: formData.landmark || ''
                                                };
                                                // Set showForm to true to display the installation form
                                                setShowForm(true);
                                                // Scroll to the form section
                                                document.getElementById('packages').scrollIntoView({ behavior: 'smooth' });
                                            }}
                                            className="w-full bg-green-600 hover:bg-green-700 dark:bg-blue-600 dark:hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg mt-4 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
                                        >
                                            Proceed to Subscribe
                                        </button>
                                        
                                    )} */}

                                    <button 
                        onClick={() => {
                            window.installationFormData = {
                                location: formData.townArea || '',
                                landmark: formData.landmark || ''
                            };
                            setShowForm(true);
                            document.getElementById('packages').scrollIntoView({ behavior: 'smooth' });
                        }}
                                    >
                                        Proceed to Subscribe
                                    </button>

                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const PlanCard = ({ plan, isPopular, onSelect, animationDelay, isSelected }) => {
    const [isVisible, setIsVisible] = useState(false);
    const cardRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setTimeout(() => setIsVisible(true), animationDelay);
                }
            },
            { threshold: 0.1 }
        );

        if (cardRef.current) {
            observer.observe(cardRef.current);
        }

        return () => observer.disconnect();
    }, [animationDelay]);

    // Format description into bullet points
    const formatDescription = (description) => {
        return description
            .split('.')
            .map(sentence => sentence.trim())
            .filter(sentence => sentence.length > 0)
            .map(sentence => sentence.charAt(0).toUpperCase() + sentence.slice(1))
            .slice(0, 3); // Limit to 3 main points
    };

    return (
        <div
            ref={cardRef}
            className={`relative transform transition-all duration-700 flex ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
            } ${isPopular ? 'xl:scale-105 z-10' : 'hover:scale-102'} ${isSelected ? 'ring-2 ring-blue-500' : ''}`}
        >
            <div className={`relative bg-white dark:bg-slate-800 rounded-2xl p-4 sm:p-5 xl:p-8 shadow-lg border transition-all duration-500 group flex flex-col w-full ${(isPopular || isSelected) ? 'mt-6' : ''} ${
                isPopular 
                    ? 'border-blue-500 ring-1 ring-blue-500/20 shadow-blue-500/10 hover:shadow-2xl hover:shadow-blue-500/20' 
                    : 'border-gray-200 dark:border-slate-700 hover:border-orange-400 dark:hover:border-blue-400 hover:shadow-2xl hover:shadow-orange-500/20 dark:hover:shadow-blue-500/20 hover:ring-2 hover:ring-orange-400/30 dark:hover:ring-blue-400/30'
            }`}>
                {isPopular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <div className="bg-gradient-to-r from-orange-600 to-red-600 dark:from-blue-600 dark:to-purple-600 text-white px-6 py-2 rounded-full text-xs font-bold shadow-lg">
                            MOST POPULAR
                        </div>
                    </div>
                )}

                {isSelected && !isPopular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <div className="bg-orange-600 dark:bg-blue-600 text-white px-6 py-2 rounded-full text-xs font-bold shadow-lg">
                            SELECTED
                        </div>
                    </div>
                )}

                <div className="text-center mb-4 sm:mb-6 xl:mb-8">
                    <div className={`inline-flex px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-bold mb-3 sm:mb-4 xl:mb-6 ${
                        isPopular 
                            ? 'bg-gradient-to-r from-orange-600 to-red-600 dark:from-blue-600 dark:to-purple-600 text-white' 
                            : 'bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-slate-300'
                    }`}>
                        {plan.speed} Mbps
                    </div>
                    <h3 className="text-base sm:text-lg xl:text-xl font-bold text-gray-900 dark:text-white mb-1 sm:mb-2 leading-snug break-words">{plan.name}</h3>
                </div>

                <div className="text-center mb-4 sm:mb-6 xl:mb-8">
                    <div className="mb-1 sm:mb-2">
                        <span className="text-3xl sm:text-4xl xl:text-5xl font-black text-gray-900 dark:text-white">
                            {plan.price?.toLocaleString()}
                        </span>
                        <span className="text-sm sm:text-base xl:text-lg text-gray-500 dark:text-slate-400 font-medium ml-1">KES</span>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-500 dark:text-slate-400 font-medium">per month</p>
                </div>

                <div className="mb-4 sm:mb-6 xl:mb-10 flex-grow">
                    <ul className="space-y-2 sm:space-y-3">
                        {formatDescription(plan.description).map((feature, index) => (
                            <li key={index} className="flex items-start text-gray-600 dark:text-slate-400">
                                <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center mr-4 flex-shrink-0 mt-0.5">
                                    <Check className="w-3 h-3 text-white" />
                                </div>
                                <span className="text-sm leading-relaxed">{feature}</span>
                            </li>
                        ))}
                        <li className="flex items-start text-gray-600 dark:text-slate-400">
                            <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center mr-4 flex-shrink-0 mt-0.5">
                                <Check className="w-3 h-3 text-white" />
                            </div>
                            <span className="text-sm leading-relaxed font-medium">Unlimited Internet Access</span>
                        </li>
                        <li className="flex items-start text-gray-600 dark:text-slate-400">
                            <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center mr-4 flex-shrink-0 mt-0.5">
                                <Check className="w-3 h-3 text-white" />
                            </div>
                            <span className="text-sm leading-relaxed font-medium">24/7 Technical Support</span>
                        </li>
                    </ul>
                </div>

                <button
    onClick={() => onSelect(plan)}
    className={`w-full py-3 sm:py-4 px-4 sm:px-6 rounded-xl font-semibold text-sm sm:text-base transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center justify-center mt-auto ${
        isSelected
            ? 'bg-green-600 hover:bg-green-700 text-white shadow-lg'
            : isPopular
                ? 'bg-gradient-to-r from-orange-600 to-red-600 dark:from-blue-600 dark:to-purple-600 text-white hover:from-orange-700 hover:to-red-700 dark:hover:from-blue-700 dark:hover:to-purple-700 shadow-lg'
                : 'bg-gray-100 hover:bg-gray-200 dark:bg-slate-700 dark:hover:bg-slate-600 text-gray-800 dark:text-white'
    }`}
>
    {isSelected ? (
        <>
            <Check className="w-5 h-5 mr-2" />
            Selected
        </>
    ) : (
        <>
            Select Plan
            <ArrowRight className="w-5 h-5 ml-2" />
        </>
    )}
</button>

            </div>
        </div>
    );
};

const PlanDropdown = ({ plans, selectedPlan, onSelect, error }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative">
            <label className="block text-sm font-bold text-gray-700 dark:text-slate-300 mb-3">
                Select Internet Plan
            </label>
            <div className="relative">
                <button
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                    className={`w-full px-3 sm:px-6 py-3 sm:py-4 rounded-lg sm:rounded-xl border transition-all duration-300 ${
                        error 
                            ? 'border-red-500 focus:border-red-500' 
                            : 'border-gray-300 dark:border-slate-600 focus:border-orange-500 dark:focus:border-blue-500'
                    } bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500/20 dark:focus:ring-blue-500/20 flex items-center justify-between text-left shadow-md hover:shadow-lg`}
                >
                    <span className={selectedPlan ? 'text-gray-900 dark:text-white font-medium' : 'text-gray-500 dark:text-slate-400'}>
                        {selectedPlan ? `${selectedPlan.name} - ${selectedPlan.speed}Mbps (KES ${selectedPlan.price?.toLocaleString()}/month)` : 'Choose your plan'}
                    </span>
                    <ChevronDown className={`w-5 h-5 text-gray-400 dark:text-slate-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isOpen && (
                    <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-xl shadow-xl z-20 overflow-hidden">
                        {plans.map((plan) => (
                            <button
                                key={plan.id}
                                type="button"
                                onClick={() => {
                                    onSelect(plan);
                                    setIsOpen(false);
                                }}
                                className={`w-full px-6 py-4 text-left hover:bg-gray-50 dark:hover:bg-slate-700 transition-all duration-200 flex items-center justify-between group ${
                                    selectedPlan?.id === plan.id ? 'bg-orange-50 dark:bg-blue-900/20 border-l-4 border-orange-500 dark:border-blue-500' : ''
                                }`}
                            >
                                <div>
                                    <div className={`font-bold transition-colors ${
                                        selectedPlan?.id === plan.id 
                                            ? 'text-orange-600 dark:text-blue-400' 
                                            : 'text-gray-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-blue-400'
                                    }`}>
                                        {plan.name}
                                        {selectedPlan?.id === plan.id && (
                                            <span className="ml-2 text-xs bg-orange-500 dark:bg-blue-500 text-white px-2 py-1 rounded-full">
                                                Selected
                                            </span>
                                        )}
                                    </div>
                                    <div className="text-sm text-gray-500 dark:text-slate-400">
                                        {plan.speed}Mbps • KES {plan.price?.toLocaleString()}/month
                                    </div>
                                </div>
                                <ArrowRight className={`w-4 h-4 transition-all duration-200 group-hover:translate-x-1 ${
                                    selectedPlan?.id === plan.id 
                                        ? 'text-orange-600 dark:text-blue-400' 
                                        : 'text-gray-400 dark:text-slate-500 group-hover:text-orange-600 dark:group-hover:text-blue-400'
                                }`} />
                            </button>
                        ))}
                    </div>
                )}
            </div>
            {error && <p className="text-red-500 dark:text-red-400 text-sm mt-2 font-medium">{error}</p>}
        </div>
    );
};

const InstallationForm = ({ selectedPlan, onBack, onSuccess, plans }) => {
    // Get installation data from window object
    const initialLocation = window.installationFormData?.location || '';
    const initialLandmark = window.installationFormData?.landmark || '';
    
    const [formData, setFormData] = useState({
        full_name: '',
        phone_number: '',
        location: initialLocation,
        landmark: initialLandmark,
        package: selectedPlan?.id || ''
    });
    const [currentPlan, setCurrentPlan] = useState(selectedPlan);

    // Auto-select the plan when selectedPlan prop changes
    useEffect(() => {
        if (selectedPlan) {
            setCurrentPlan(selectedPlan);
            setFormData(prev => ({
                ...prev,
                package: selectedPlan.id
            }));
        }
    }, [selectedPlan]);
    
    // Update form data when window.installationFormData changes
    useEffect(() => {
        if (window.installationFormData) {
            setFormData(prev => ({
                ...prev,
                location: window.installationFormData.location || prev.location,
                landmark: window.installationFormData.landmark || prev.landmark
            }));
            // Clear the window.installationFormData after using it
            setTimeout(() => {
                window.installationFormData = null;
            }, 500);
        }
    }, []);
    
    // Check for installationFormData on mount and when the component becomes visible
    useEffect(() => {
        const checkForData = () => {
            if (window.installationFormData) {
                setFormData(prev => ({
                    ...prev,
                    location: window.installationFormData.location || prev.location,
                    landmark: window.installationFormData.landmark || prev.landmark
                }));
            }
        };
        
        // Check immediately
        checkForData();
        
        // Listen for the custom event to update form data
        const handleUpdateEvent = (event) => {
            const { location, landmark } = event.detail;
            setFormData(prev => ({
                ...prev,
                location: location || prev.location,
                landmark: landmark || prev.landmark
            }));
        };
        
        document.addEventListener('updateInstallationForm', handleUpdateEvent);
        
        return () => {
            document.removeEventListener('updateInstallationForm', handleUpdateEvent);
        };
    }, []);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitAction, setSubmitAction] = useState('');
    const [errors, setErrors] = useState({});

    const WHATSAPP_NUMBER = '254715080432';

    const validateForm = () => {
        const newErrors = {};
        
        if (!formData.full_name.trim()) newErrors.full_name = 'Full name is required';
        if (!formData.phone_number.trim()) newErrors.phone_number = 'Phone number is required';
        else if (!/^[0-9+\-\s()]+$/.test(formData.phone_number)) newErrors.phone_number = 'Invalid phone number format';
        if (!formData.location.trim()) newErrors.location = 'Location is required';
        if (!formData.landmark.trim()) newErrors.landmark = 'Landmark is required';
        if (!formData.package) newErrors.package = 'Please select a package';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const buildInstallationPayload = () => ({
        plan: currentPlan?.name || '',
        fullname: formData.full_name,
        phone: formData.phone_number,
        location: formData.location,
        landmark: formData.landmark,
        status: 'unread'
    });

    const buildWhatsAppMessage = () => {
        const lines = [
            'Hello Amazons, I would like to request installation.',
            `Name: ${formData.full_name}`,
            `Phone: ${formData.phone_number}`,
            `Plan: ${currentPlan?.name || 'Not selected'}`,
            `Location: ${formData.location}`,
            `Landmark: ${formData.landmark}`
        ];

        return lines.join('\n');
    };

    const submitInstallationRequest = async () => {
        const response = await fetch('https://bit1.amazons.co.ke/api/installation-request', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(buildInstallationPayload())
        });

        return response.ok;
    };

    const handleSubmit = async (action = 'api') => {
        if (!validateForm()) return;

        setIsSubmitting(true);
        setSubmitAction(action);
        try {
            const saved = await submitInstallationRequest();

            if (!saved && action === 'api') {
                throw new Error('Failed to submit request');
            }

            if (action === 'whatsapp') {
                const message = buildWhatsAppMessage();
                const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
                const waTab = window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

                if (!waTab) {
                    window.location.href = whatsappUrl;
                }

                onSuccess();
                setFormData({
                    full_name: '',
                    phone_number: '',
                    location: '',
                    landmark: '',
                    package: selectedPlan?.id || ''
                });

                if (!saved) {
                    alert('WhatsApp opened, but we could not save your request in our system. Please send the message to complete your request.');
                }
            } else {
                onSuccess();
                setFormData({
                    full_name: '',
                    phone_number: '',
                    location: '',
                    landmark: '',
                    package: selectedPlan?.id || ''
                });
            }
        } catch (error) {
            alert('Failed to submit installation request. Please try again.');
        } finally {
            setIsSubmitting(false);
            setSubmitAction('');
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSubmit('whatsapp');
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const handlePlanSelect = (plan) => {
        setCurrentPlan(plan);
        setFormData(prev => ({
            ...prev,
            package: plan.id
        }));
        if (errors.package) {
            setErrors(prev => ({
                ...prev,
                package: ''
            }));
        }
    };

    return (
        <div className="w-full max-w-3xl mx-auto px-0">
           <div className="bg-white dark:bg-slate-800 rounded-xl sm:rounded-2xl p-3 sm:p-6 md:p-8 shadow-xl border border-gray-200 dark:border-slate-700 w-full">
            <div className="flex items-center mb-6 sm:mb-8">
                    <button
                        onClick={onBack}
                        className="p-2 sm:p-3 rounded-xl bg-gray-100 dark:bg-slate-700 hover:bg-gray-200 dark:hover:bg-slate-600 transition-all duration-300 mr-3 sm:mr-6"
                    >
                        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600 dark:text-slate-300" />
                    </button>
                    <div>
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-1 sm:mb-2">Request Installation</h3>
                        <p className="text-gray-600 dark:text-slate-400 text-sm sm:text-base md:text-lg">Fill in your details and we'll get you connected</p>
                    </div>
                </div>

                {currentPlan && (
                    <div className="mb-8 p-6 bg-orange-50 dark:bg-blue-900/20 rounded-xl border border-orange-200 dark:border-blue-700/50 animate-pulse-once">
                        <div className="flex items-center justify-between">
                            <div>
                                <h4 className="text-xl font-bold text-gray-900 dark:text-white">{currentPlan.name}</h4>
                                <p className="text-orange-600 dark:text-blue-400 font-bold text-lg">
                                    {currentPlan.speed}Mbps • KES {currentPlan.price?.toLocaleString()}/month
                                </p>
                            </div>
                            <div className="px-4 py-2 bg-orange-600 dark:bg-blue-600 text-white rounded-full text-sm font-bold">
                                {selectedPlan ? 'Auto-Selected' : 'Selected'}
                            </div>
                        </div>
                    </div>
                )}

                <div className="space-y-8">
                    <PlanDropdown 
                        plans={plans}
                        selectedPlan={currentPlan}
                        onSelect={handlePlanSelect}
                        error={errors.package}
                    />

                    <div>
                        <label className="block text-sm font-bold text-gray-700 dark:text-slate-300 mb-3">
                            <User className="w-5 h-5 inline mr-3" />
                            Full Name
                        </label>
                        <input
                            type="text"
                            name="full_name"
                            value={formData.full_name}
                            onChange={handleChange}
                            onKeyPress={handleKeyPress}
                            className={`w-full px-3 sm:px-6 py-3 sm:py-4 rounded-lg sm:rounded-xl border transition-all duration-300 ${                                errors.full_name 
                                    ? 'border-red-500 focus:border-red-500' 
                                    : 'border-gray-300 dark:border-slate-600 focus:border-orange-500 dark:focus:border-blue-500'
                            } bg-white dark:bg-slate-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500/20 dark:focus:ring-blue-500/20 shadow-md hover:shadow-lg text-lg`}
                            placeholder="Enter your full name"
                        />
                        {errors.full_name && <p className="text-red-500 dark:text-red-400 text-sm mt-2 font-medium">{errors.full_name}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-gray-700 dark:text-slate-300 mb-3">
                            <Phone className="w-5 h-5 inline mr-3" />
                            Phone Number
                        </label>
                        <input
                            type="tel"
                            name="phone_number"
                            value={formData.phone_number}
                            onChange={handleChange}
                            onKeyPress={handleKeyPress}
                            className={`w-full px-3 sm:px-6 py-3 sm:py-4 rounded-lg sm:rounded-xl border transition-all duration-300 ${
                                errors.phone_number 
                                    ? 'border-red-500 focus:border-red-500' 
                                    : 'border-gray-300 dark:border-slate-600 focus:border-orange-500 dark:focus:border-blue-500'
                            } bg-white dark:bg-slate-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500/20 dark:focus:ring-blue-500/20 shadow-md hover:shadow-lg text-lg`}
                            placeholder="e.g., 07000000"
                        />
                        {errors.phone_number && <p className="text-red-500 dark:text-red-400 text-sm mt-2 font-medium">{errors.phone_number}</p>}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-bold text-gray-700 dark:text-slate-300 mb-3">
                                <MapPin className="w-5 h-5 inline mr-3" />
                                Location
                            </label>
                            <input
                                type="text"
                                name="location"
                                value={formData.location}
                                onChange={handleChange}
                                onKeyPress={handleKeyPress}
                                className={`w-full px-3 sm:px-6 py-3 sm:py-4 rounded-lg sm:rounded-xl border transition-all duration-300 ${
                                    errors.location 
                                        ? 'border-red-500 focus:border-red-500' 
                                        : 'border-gray-300 dark:border-slate-600 focus:border-orange-500 dark:focus:border-blue-500'
                                } bg-white dark:bg-slate-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500/20 dark:focus:ring-blue-500/20 shadow-md hover:shadow-lg text-lg`}
                                placeholder="e.g., Luanda"
                            />
                            {errors.location && <p className="text-red-500 dark:text-red-400 text-sm mt-2 font-medium">{errors.location}</p>}
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-gray-700 dark:text-slate-300 mb-3">
                                <Building className="w-5 h-5 inline mr-3" />
                                Landmark
                            </label>
                            <input
                                type="text"
                                name="landmark"
                                value={formData.landmark}
                                onChange={handleChange}
                                onKeyPress={handleKeyPress}
                                className={`w-full px-3 sm:px-6 py-3 sm:py-4 rounded-lg sm:rounded-xl border transition-all duration-300 ${
                                    errors.landmark 
                                        ? 'border-red-500 focus:border-red-500' 
                                        : 'border-gray-300 dark:border-slate-600 focus:border-orange-500 dark:focus:border-blue-500'
                                } bg-white dark:bg-slate-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500/20 dark:focus:ring-blue-500/20 shadow-md hover:shadow-lg text-lg`}
                                placeholder="e.g., Opp Total Petrol Station"
                            />
                            {errors.landmark && <p className="text-red-500 dark:text-red-400 text-sm mt-2 font-medium">{errors.landmark}</p>}
                        </div>
                    </div>

                    <button
                        type="button"
                        onClick={() => handleSubmit('whatsapp')}
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-orange-600 to-red-600 dark:from-blue-600 dark:to-purple-600 text-white py-5 px-8 rounded-xl font-bold text-xl hover:from-orange-700 hover:to-red-700 dark:hover:from-blue-700 dark:hover:to-purple-700 transition-all duration-300 transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-lg hover:shadow-xl"
                    >
                        {isSubmitting && submitAction === 'whatsapp' ? (
                            <div className="flex items-center justify-center">
                                <div className="animate-spin rounded-full h-6 w-6 border-2 border-white border-t-transparent mr-3"></div>
                                Redirecting to WhatsApp...
                            </div>
                        ) : (
                            <div className="flex items-center justify-center">
                                Send via WhatsApp
                                <ArrowRight className="w-6 h-6 ml-3" />
                            </div>
                        )}
                    </button>

                    <button
                        type="button"
                        onClick={() => handleSubmit('api')}
                        disabled={isSubmitting}
                        className="w-full text-center text-sm sm:text-base font-semibold text-orange-600 dark:text-blue-400 hover:text-orange-700 dark:hover:text-blue-300 underline underline-offset-4 disabled:opacity-60"
                    >
                        {isSubmitting && submitAction === 'api' ? 'Submitting...' : "Don't have WhatsApp? Click here"}
                    </button>
                </div>
            </div>
        </div>
    );
};

const SuccessMessage = ({ onReset }) => (
    <div className="max-w-2xl mx-auto text-center">
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-12 shadow-xl border border-gray-200 dark:border-slate-700">
            <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-8">
                <Check className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Request Submitted Successfully!</h3>
            <p className="text-gray-600 dark:text-slate-400 text-lg mb-8 leading-relaxed">
                Thank you for choosing our service! Our technical team will contact you within 24 hours to schedule your fiber installation.
            </p>
            <button
                onClick={onReset}
                className="bg-gradient-to-r from-orange-600 to-red-600 dark:from-blue-600 dark:to-purple-600 text-white py-4 px-8 rounded-xl font-bold text-lg hover:from-orange-700 hover:to-red-700 dark:hover:from-blue-700 dark:hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
                Back to Plans
            </button>
        </div>
    </div>
);

export default function SectionTwo() {
    const [plans, setPlans] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null); // eslint-disable-line no-unused-vars
    const [showForm, setShowForm] = useState(false);
    const [selectedPlan, setSelectedPlan] = useState(null);
    const [showSuccess, setShowSuccess] = useState(false);
    const sectionRef = useRef(null);

   useEffect(() => {
    const fetchPlans = async () => {
        try {
            const response = await fetch('https://v1.api.amazons.co.ke/api/services/home/plans');
            const data = await response.json();
            
            if (data.status === 'success' && data.data && data.data[0]) {
                const formattedPlans = data.data[0].map(plan => ({
                    ...plan,
                    price: parseInt(plan.price)
                }));
                setPlans(formattedPlans);
            } else {
                throw new Error('Invalid data format');
            }
        } catch (err) {
            // Use fallback data when API fails
            setPlans(fallbackPlans);
        } finally {
            setLoading(false);
        }
    };

    fetchPlans();
}, []);


    // Expose function to scroll to section and show form
    useEffect(() => {
        window.requestInstallation = () => {
            sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
            setTimeout(() => {
                setShowForm(true);
                setSelectedPlan(null); // Don't auto-select when called globally
            }, 800);
        };
        
        return () => {
            delete window.requestInstallation;
        };
    }, []);

    const handlePlanSelect = (plan) => {
        setSelectedPlan(plan);
        setShowForm(true);
        // Scroll to form section smoothly
        setTimeout(() => {
            sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    };
    
    // Effect to handle the form data when showForm changes
    useEffect(() => {
        if (showForm && window.installationFormData) {
            // Make sure we're showing the form and scrolling to it
            setTimeout(() => {
                sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
                
                // Force update the installation form data to ensure it's applied
                const event = new CustomEvent('updateInstallationForm', {
                    detail: {
                        location: window.installationFormData.location,
                        landmark: window.installationFormData.landmark
                    }
                });
                document.dispatchEvent(event);
            }, 100);
        }
    }, [showForm]);

    const handleFormSuccess = () => {
        setShowSuccess(true);
        setShowForm(false);
    };

    const handleReset = () => {
        setShowForm(false);
        setSelectedPlan(null);
        setShowSuccess(false);
    };

    const getMostPopularIndex = () => {
        if (plans.length === 0) return -1;
        // Find the plan with speed closest to 8-10 Mbps (sweet spot for most users)
        const idealSpeed = 20;
        let closestIndex = 0;
        let smallestDifference = Math.abs(plans[0].speed - idealSpeed);
        
        plans.forEach((plan, index) => {
            const difference = Math.abs(plan.speed - idealSpeed);
            if (difference < smallestDifference) {
                smallestDifference = difference;
                closestIndex = index;
            }
        });
        
        return closestIndex;
    };

    if (loading) {
        return (
            <section className="min-h-screen bg-gray-50 dark:bg-slate-900 flex items-center justify-center">
                <LoadingSpinner />
            </section>
        );
    }

    if (error) {
        return (
            <section className="min-h-screen bg-gray-50 dark:bg-slate-900 flex items-center justify-center">
                <div className="text-center">
                    <p className="text-red-600 dark:text-red-400 text-xl font-medium">{error}</p>
                    <button 
                        onClick={() => window.location.reload()} 
                        className="mt-4 bg-orange-600 dark:bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-orange-700 dark:hover:bg-blue-700 transition-colors"
                    >
                        Try Again
                    </button>
                </div>
            </section>
        );
    }

    const mostPopularIndex = getMostPopularIndex();

    return (
        <section 
        id='packages'
            ref={sectionRef} 
            className={`min-h-screen transition-all duration-1000 relative ${
                showForm || showSuccess 
                    ? 'bg-gradient-to-b from-slate-50 via-slate-100 to-slate-200 dark:from-slate-900 dark:via-slate-800 dark:to-slate-700' 
                    : 'bg-gradient-to-b from-slate-50 via-slate-100 to-slate-200 dark:from-slate-900 dark:via-slate-800 dark:to-slate-700'
            } block items-center justify-center py-20`}
        >
            <div className="container flex mx-auto px-4">
            {/* Extended data stream background for seamless transition */}
            <div className="absolute inset-0 opacity-20 md:opacity-30 dark:opacity-40 dark:md:opacity-50">
                <div 
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: `url('/images/your-background-image.webp')`,
                        backgroundBlendMode: 'multiply'
                    }}
                />
                <div 
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-0 dark:opacity-100 transition-opacity duration-300"
                    style={{
                       backgroundImage: `url('/images/your-background-image.webp')`,
                        backgroundBlendMode: 'multiply'
                    }}
                />
            </div>
            {/* Subtle overlay for readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-white/60 dark:from-slate-900/60 dark:via-slate-900/40 dark:to-slate-900/60"></div>
            <div className="container mx-auto px-0 sm:px-6 lg:px-8 relative z-10">
                <div className={`transition-all duration-1000 transform ${
                    showForm || showSuccess 
                        ? 'opacity-0 translate-y-8 pointer-events-none absolute' 
                        : 'opacity-100 translate-y-0'
                }`}>
                    <div className="text-center mb-20">
                        <h2 className="text-5xl lg:text-6xl font-black text-gray-900 dark:text-white mb-8 leading-tight">
                            <span className="text-orange-600 dark:text-blue-400">Home Fiber Plans</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 xl:gap-6 max-w-8xl mx-auto mb-16 items-start">
                        {plans.map((plan, index) => (
                            <PlanCard
                                key={plan.id}
                                plan={plan}
                                isPopular={index === mostPopularIndex}
                                onSelect={handlePlanSelect}
                                animationDelay={index * 200}
                                isSelected={selectedPlan?.id === plan.id}
                            />
                        ))}
                    </div>

                    <div className="text-center">
                        <p className="text-gray-600 dark:text-slate-400 mb-8 text-xl">
                            Need help choosing the right plan? Our expert team is here to help!
                        </p>
                        <button
                            onClick={() => setShowForm(true)}
                            className="bg-gradient-to-r from-orange-600 to-red-600 dark:from-blue-600 dark:to-purple-600 text-white py-4 px-10 rounded-xl font-bold text-xl hover:from-orange-700 hover:to-red-700 dark:hover:from-blue-700 dark:hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                        >
                            Get Installation Quote
                            <ArrowRight className="w-6 h-6 ml-3 inline" />
                        </button>
                    </div>
                </div>

                <div className={`transition-all duration-1000 transform ${
                    showForm && !showSuccess 
                        ? 'opacity-100 translate-y-0' 
                        : 'opacity-0 translate-y-8 pointer-events-none absolute'
                }`}>
                    <InstallationForm
                        selectedPlan={selectedPlan}
                        onBack={handleReset}
                        onSuccess={handleFormSuccess}
                       plans={plans}
                    />
                </div>

                           <div className={`transition-all duration-1000 transform ${
                    showSuccess 
                        ? 'opacity-100 translate-y-0' 
                        : 'opacity-0 translate-y-8 pointer-events-none absolute'
                }`}>
                    <SuccessMessage onReset={handleReset} />
                </div>
            </div>
            </div>
            <CoverageSection setShowForm={setShowForm} />
        </section>
    );
}