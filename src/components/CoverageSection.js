import React, { useState } from 'react';
import { CheckCircle, Clock, MapPin, ChevronDown } from 'lucide-react';

const CoverageSection = () => {
    const [formData, setFormData] = useState({ 
        townArea: '', 
        estateName: '', 
        landmark: '', 
        generalArea: '' 
    });
    const [checkResult, setCheckResult] = useState(null);
    const [showDropdown, setShowDropdown] = useState(false);

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
        <section className="py-20 bg-gradient-to-br from-slate-50 to-orange-50 dark:from-slate-900 dark:to-slate-800">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white mb-4">
                        Coverage <span className="text-orange-500">Map</span>
                    </h2>
                    <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        Check if high-speed fiber internet is available in your area
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Coverage Map */}
                    <div className="space-y-6">
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Service Areas</h3>

                        {/* Google Maps */}
                        <div className="bg-white dark:!bg-slate-800 rounded-2xl p-6 border border-orange-100 dark:border-slate-700 shadow-lg">
                            <div className="relative overflow-hidden rounded-xl">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127674.0511154459!2d34.64900822858899!3d0.08336253283287434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x17800c2778604159%3A0x7e448ddc8e934919!2sVihiga%20County!5e0!3m2!1sen!2ske!4v1752496522699!5m2!1sen!2ske"
                                    className="w-full h-80 lg:h-96 border-0 rounded-xl dark:brightness-90 dark:contrast-110 dark:hue-rotate-180 dark:invert"
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Service Coverage Map" />

                                {/* Coverage Overlay Indicators */}
                                <div className="absolute top-4 left-4 bg-white dark:!bg-slate-800 backdrop-blur-sm rounded-lg p-3 shadow-lg border border-orange-100 dark:border-slate-700">
                                    <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-2">Live Coverage Areas</h4>
                                    <div className="space-y-1">
                                        <div className="flex items-center space-x-2">
                                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                            <span className="text-xs text-slate-600 dark:text-slate-400">Active Coverage</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                                            <span className="text-xs text-slate-600 dark:text-slate-400">Expanding Soon</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <div className="w-2 h-2 bg-slate-400 dark:bg-slate-500 rounded-full"></div>
                                            <span className="text-xs text-slate-600 dark:text-slate-400">Planning Phase</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Coverage Areas List */}
                        <div className="bg-white dark:!bg-slate-800 rounded-2xl p-6 border border-orange-100 dark:border-slate-700 shadow-lg">
                            <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Available Areas</h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {coverageAreas.map((area, index) => (
                                    <div key={index} className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-700 rounded-lg border border-slate-200 dark:border-slate-600">
                                        <span className="text-sm font-medium text-slate-900 dark:text-white">{area.name}</span>
                                        <div className={`w-2 h-2 rounded-full ${area.status === 'active' ? 'bg-green-500' :
                                                area.status === 'coming' ? 'bg-orange-500' : 'bg-slate-400 dark:bg-slate-500'}`}></div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Coverage Check Form */}
                    <div className="bg-white dark:!bg-slate-800 rounded-3xl p-8 border border-orange-100 dark:border-slate-700 shadow-lg">
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
                                        className="w-full px-4 py-3 text-left bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 flex items-center justify-between transition-all duration-200 hover:border-orange-400"
                                    >
                                        <span className={formData.townArea ? "text-slate-900 dark:text-white" : "text-slate-500 dark:text-slate-400"}>
                                            {formData.townArea || "Select town/area"}
                                        </span>
                                        <ChevronDown className={`w-5 h-5 text-slate-400 dark:text-slate-500 transform transition-transform ${showDropdown ? 'rotate-180' : ''}`} />
                                    </button>

                                    {showDropdown && (
                                        <div className="absolute z-20 w-full mt-1 bg-white dark:!bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-lg shadow-lg max-h-60 overflow-auto">
                                            {coverageAreas.map((area, index) => (
                                                <button
                                                    key={index}
                                                    type="button"
                                                    onClick={() => handleAreaSelect(area.name)}
                                                    className="w-full px-4 py-3 text-left hover:bg-slate-50 dark:hover:bg-slate-600 flex items-center justify-between border-b border-slate-100 dark:border-slate-600 last:border-b-0 transition-colors duration-200"
                                                >
                                                    <span className="text-slate-900 dark:text-white">{area.name}</span>
                                                    <div className={`w-2 h-2 rounded-full ${area.status === 'active' ? 'bg-green-500' :
                                                            area.status === 'coming' ? 'bg-orange-500' : 'bg-slate-400 dark:bg-slate-500'}`}></div>
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Estate/Building Name */}
                            <div>
                                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                                    Enter Estate/Building name
                                </label>
                                <input
                                    type="text"
                                    placeholder="e.g., Garden Estate, Sunset Apartments"
                                    className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200"
                                    value={formData.estateName}
                                    onChange={(e) => setFormData({ ...formData, estateName: e.target.value })} />
                            </div>

                            {/* Closest Landmark */}
                            <div>
                                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                                    Enter Closest Landmark
                                </label>
                                <input
                                    type="text"
                                    placeholder="e.g., Opp Total Petrol Station"
                                    className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200"
                                    value={formData.landmark}
                                    onChange={(e) => setFormData({ ...formData, landmark: e.target.value })} />
                            </div>

                            {/* General Area */}
                            <div>
                                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                                    Enter your general area
                                </label>
                                <input
                                    type="text"
                                    placeholder="Town/Street"
                                    className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200"
                                    value={formData.generalArea}
                                    onChange={(e) => setFormData({ ...formData, generalArea: e.target.value })} />
                            </div>

                            {/* Get Connected Button/Badge */}
                            {!checkResult ? (
                                <button
                                    onClick={handleCoverageCheck}
                                    disabled={!formData.townArea}
                                    className={`w-full font-semibold py-3 px-6 rounded-lg mt-6 transition-all duration-300 transform hover:scale-105 active:scale-95 ${formData.townArea
                                            ? 'bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white cursor-pointer shadow-lg hover:shadow-xl'
                                            : 'bg-slate-300 dark:bg-slate-600 text-slate-600 dark:text-slate-400 cursor-not-allowed'}`}
                                >
                                    Check Coverage
                                </button>
                            ) : (
                                <div className="mt-6">
                                    <div className={`w-full p-4 rounded-lg text-center font-semibold transition-all duration-300 ${checkResult.status === 'active'
                                            ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 border-2 border-green-200 dark:border-green-700'
                                            : checkResult.status === 'coming'
                                                ? 'bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300 border-2 border-orange-200 dark:border-orange-700'
                                                : checkResult.status === 'planned'
                                                    ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 border-2 border-blue-200 dark:border-blue-700'
                                                    : 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300 border-2 border-red-200 dark:border-red-700'}`}>
                                        <div className="flex items-center justify-center space-x-2">
                                            {checkResult.status === 'active' && <CheckCircle className="w-5 h-5" />}
                                            {(checkResult.status === 'coming' || checkResult.status === 'planned') && <Clock className="w-5 h-5" />}
                                            {checkResult.status === 'unavailable' && <MapPin className="w-5 h-5" />}
                                            <span>
                                                {checkResult.status === 'active' ? 'Fibre Available!' :
                                                    checkResult.status === 'coming' ? 'Expanding Soon' :
                                                        checkResult.status === 'planned' ? 'Planning Phase' :
                                                            'Not Available Yet'}
                                            </span>
                                        </div>
                                        <p className="text-sm mt-2 opacity-75">
                                            {checkResult.status === 'active' ? 'Great news! Amazons Fibre is available in your area.' :
                                                checkResult.status === 'coming' ? 'We\'re expanding to your area soon. We\'ll notify you when available.' :
                                                    checkResult.status === 'planned' ? 'Your area is in our expansion plan. We\'ll keep you updated.' :
                                                        'Service not yet available. We\'ll notify you when we expand to your area.'}
                                        </p>
                                    </div>

                                    {checkResult.status === 'active' && (
                                        <button className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold py-3 px-6 rounded-lg mt-4 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                                            Proceed to Subscribe
                                        </button>
                                    )}

                                    {(checkResult.status === 'coming' || checkResult.status === 'planned') && (
                                        <button className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-semibold py-3 px-6 rounded-lg mt-4 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                                            Notify Me When Available
                                        </button>
                                    )}

                                    <button
                                        onClick={() => setCheckResult(null)}
                                        className="w-full bg-slate-200 dark:bg-slate-600 hover:bg-slate-300 dark:hover:bg-slate-500 text-slate-700 dark:text-slate-300 font-medium py-2 px-4 rounded-lg mt-3 transition-all duration-200"
                                    >
                                        Check Another Area
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

export default CoverageSection;