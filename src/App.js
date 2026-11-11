// src/App.js
import React, { useState, useRef, useEffect } from 'react';
// CORRECTED: Added Linkedin to the imports here as well.
import { Twitter, Linkedin, Facebook, Wifi, MessageCircle, X, Send, User, Bot, Minimize2 } from 'lucide-react'; 
import { ThemeProvider } from './context/ThemeContext';
import PageHeader from './components/PageHeader';

import SectionOne from './components/SectionOne';
import SectionTwo from './components/SectionTwo';
import SectionThree from './components/SectionThree';
import SectionFour from './components/SectionFour';
import Logo from './components/Logo';

const termsPdfPath = '/AMAZONS%20%20TERMS%20OF%20SERVICE%20STAMPED.pdf';

const Footer = () => {
    const GradientText = ({children}) => (
        <span className="bg-gradient-to-r from-primary-500 to-primary-600 dark:from-cyan-400 dark:to-sky-500 bg-clip-text text-transparent">
            {children}
        </span>
    );

  return (
    <footer className="bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 theme-transition">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Mobile Accordion for small screens */}
        <div className="block sm:hidden mb-6">
          <details className="group mb-4 footer-accordion">
            <summary className="flex justify-between items-center p-3 rounded-lg bg-slate-100 dark:bg-slate-800">
              <div className="flex items-center">
                <Logo className="h-8 w-auto" />
              </div>
              <span className="transform group-open:rotate-180 transition-transform duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-500">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </span>
            </summary>
            <div className="p-4 bg-white dark:bg-slate-900 rounded-lg mt-2 space-y-4">
              <p className="text-slate-500 dark:text-slate-400 text-sm">
                Delivering lightning-fast fiber internet to Vihiga, Kenya.
              </p>
              <div>
                <h3 className="font-semibold text-slate-900 dark:text-white mb-2">About Us</h3>
                <div className="text-slate-500 dark:text-slate-400 text-sm space-y-2">
                  <p>
                    <GradientText>Lence Amazons</GradientText> is Kenya's premier fiber internet provider, 
                    committed to bridging the digital divide in Vihiga and surrounding areas.
                  </p>
                </div>
              </div>
            </div>
          </details>
          
          <details className="group mb-4 footer-accordion">
            <summary className="flex justify-between items-center p-3 rounded-lg bg-slate-100 dark:bg-slate-800">
              <h3 className="font-semibold text-slate-900 dark:text-white">Quick Links</h3>
              <span className="transform group-open:rotate-180 transition-transform duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-500">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </span>
            </summary>
            <div className="p-4 bg-white dark:bg-slate-900 rounded-lg mt-2">
              <ul className="space-y-3">
                <li>
                  <a 
                    href="#features" 
                    className="text-slate-500 dark:text-slate-400 hover:text-primary-500 dark:hover:text-cyan-400 text-sm theme-transition inline-flex items-center group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-200">Features</span>
                  </a>
                </li>
                <li>
                  <a 
                    href="#packages" 
                    className="text-slate-500 dark:text-slate-400 hover:text-primary-500 dark:hover:text-cyan-400 text-sm theme-transition inline-flex items-center group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-200">Packages</span>
                  </a>
                </li>
                <li>
                  <a 
                    href="#faq" 
                    className="text-slate-500 dark:text-slate-400 hover:text-primary-500 dark:hover:text-cyan-400 text-sm theme-transition inline-flex items-center group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-200">FAQ</span>
                  </a>
                </li>
              </ul>
            </div>
          </details>
          
          <details className="group">
            <summary className="flex justify-between items-center cursor-pointer list-none p-3 rounded-lg bg-slate-100 dark:bg-slate-800">
              <h3 className="font-semibold text-slate-900 dark:text-white">Contact & Legal</h3>
              <span className="transform group-open:rotate-180 transition-transform duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-500">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </span>
            </summary>
            <div className="p-4 bg-white dark:bg-slate-900 rounded-lg mt-2 space-y-4">
              <div>
                <h4 className="text-xs font-medium text-slate-600 dark:text-slate-300 mb-2 uppercase tracking-wide">Contact</h4>
                <ul className="space-y-2">
                  <li>
                    <a 
                      href="mailto:support.amazons@gmail.com" 
                      className="text-slate-500 dark:text-slate-400 hover:text-primary-500 dark:hover:text-cyan-400 text-sm theme-transition hover:underline"
                    >
                      support.amazons@gmail.com
                    </a>
                  </li>
                  <li>
                    <a 
                      href="tel:+254715080432" 
                      className="text-slate-500 dark:text-slate-400 hover:text-primary-500 dark:hover:text-cyan-400 text-sm theme-transition hover:underline"
                    >
                      +254 715 080 432
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://maps.app.goo.gl/V8vyhHi4nbL2AJCS7" 
                      className="text-slate-500 dark:text-slate-400 hover:text-primary-500 dark:hover:text-cyan-400 text-sm theme-transition hover:underline"
                    >
                      Visit us at Sunrise, Maseno
                    </a>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-xs font-medium text-slate-600 dark:text-slate-300 mb-2 uppercase tracking-wide">Legal</h4>
                <ul className="space-y-2">
                  <li>
                    <a 
                      href="#policy" 
                      className="text-slate-500 dark:text-slate-400 hover:text-primary-500 dark:hover:text-cyan-400 text-sm theme-transition hover:underline"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a 
                      href="#terms" 
                      className="text-slate-500 dark:text-slate-400 hover:text-primary-500 dark:hover:text-cyan-400 text-sm theme-transition hover:underline"
                    >
                      Terms of Service
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </details>
        </div>
        
        {/* Desktop layout for larger screens */}
        <div className="hidden sm:grid sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
             <Logo />
            <p className="text-slate-500 dark:text-slate-400 text-sm mt-4">
              Delivering lightning-fast fiber internet to Vihiga, Kenya.
            </p>
          </div>
          
          {/* About Us Section */}
          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-4">About Us</h3>
            <div className="text-slate-500 dark:text-slate-400 text-sm space-y-2">
              <p>
                <GradientText>Lence Amazons</GradientText> is Kenya's premier fiber internet provider, 
                committed to bridging the digital divide in Vihiga and surrounding areas.
              </p>
              <p>
                We deliver reliable, high-speed connectivity that empowers businesses, 
                students, and families to thrive in the digital age.
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="#features" 
                  className="text-slate-500 dark:text-slate-400 hover:text-primary-500 dark:hover:text-cyan-400 text-sm theme-transition inline-flex items-center group"
                >
                  <span className="group-hover:translate-x-1 transition-transform duration-200">Features</span>
                </a>
              </li>
              <li>
                <a 
                  href="#packages" 
                  className="text-slate-500 dark:text-slate-400 hover:text-primary-500 dark:hover:text-cyan-400 text-sm theme-transition inline-flex items-center group"
                >
                  <span className="group-hover:translate-x-1 transition-transform duration-200">Packages</span>
                </a>
              </li>
              <li>
                <a 
                  href="#faq" 
                  className="text-slate-500 dark:text-slate-400 hover:text-primary-500 dark:hover:text-cyan-400 text-sm theme-transition inline-flex items-center group"
                >
                  <span className="group-hover:translate-x-1 transition-transform duration-200">FAQ</span>
                </a>
              </li>
            </ul>
          </div>
         
          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-4">Contact & Legal</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-xs font-medium text-slate-600 dark:text-slate-300 mb-2 uppercase tracking-wide">Contact</h4>
                <ul className="space-y-2">
                  <li>
                    <a 
                      href="mailto:support.amazons@gmail.com" 
                      className="text-slate-500 dark:text-slate-400 hover:text-primary-500 dark:hover:text-cyan-400 text-sm theme-transition hover:underline"
                    >
                      support.amazons@gmail.com
                    </a>
                  </li>
                  <li>
                    <a 
                      href="tel:+254715080432" 
                      className="text-slate-500 dark:text-slate-400 hover:text-primary-500 dark:hover:text-cyan-400 text-sm theme-transition hover:underline"
                    >
                      +254 715 080 432
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://maps.app.goo.gl/V8vyhHi4nbL2AJCS7" 
                      className="text-slate-500 dark:text-slate-400 hover:text-primary-500 dark:hover:text-cyan-400 text-sm theme-transition hover:underline"
                    >
                      Visit us at Sunrise, Maseno
                    </a>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-xs font-medium text-slate-600 dark:text-slate-300 mb-2 uppercase tracking-wide">Legal</h4>
                <ul className="space-y-2">
                  <li>
                    <a 
                      href="#policy" 
                      className="text-slate-500 dark:text-slate-400 hover:text-primary-500 dark:hover:text-cyan-400 text-sm theme-transition hover:underline"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a 
                      href="#terms" 
                      className="text-slate-500 dark:text-slate-400 hover:text-primary-500 dark:hover:text-cyan-400 text-sm theme-transition hover:underline"
                    >
                      Terms of Service
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-6 sm:pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-slate-500 text-sm text-center sm:text-left">
            © {new Date().getFullYear()} <GradientText>Lence Amazons LTD</GradientText>. All Rights Reserved.
          </p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <a 
              href="#" 
              className="text-slate-500 hover:text-primary-500 dark:hover:text-cyan-400 transform hover:scale-110 transition-all duration-200"
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </a>
            <a 
              href="#" 
              className="text-slate-500 hover:text-primary-500 dark:hover:text-cyan-400 transform hover:scale-110 transition-all duration-200"
              aria-label="Facebook"
            >
              <Facebook size={20} />
            </a>
            <a 
              href="#" 
              className="text-slate-500 hover:text-primary-500 dark:hover:text-cyan-400 transform hover:scale-110 transition-all duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
const WhatsAppIcon = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);
const ChatBot = () => {
  const whatsappUrl = "https://wa.me/254702026544?text=Hello%20I%20need%20help%20with%20Amazons%20internet%20service";

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 flex items-center justify-center"
        aria-label="Chat on WhatsApp"
      >
        <WhatsAppIcon size={24} />
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
      </a>
    </div>
  );
};
// const ChatBot = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isMinimized, setIsMinimized] = useState(false);
//   const [messages, setMessages] = useState([
//     {
//       id: 1,
//       text: "Hi! I'm your Amazons support assistant. How can I help you today?",
//       isBot: true,
//       timestamp: new Date()
//     }
//   ]);
//   const [newMessage, setNewMessage] = useState('');
//   const [isTyping, setIsTyping] = useState(false);
//   const messagesEndRef = useRef(null);
//   const whatsappUrl = "https://wa.me/254702026544?text=Hello%20I%20need%20help%20with%20Amazons%20internet%20service";

//   const scrollToBottom = () => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   };

//   useEffect(() => {
//     scrollToBottom();
//   }, [messages]);

//   const handleSendMessage = async (e) => {
//     e.preventDefault();
//     if (!newMessage.trim()) return;

//     const userMessage = {
//       id: Date.now(),
//       text: newMessage,
//       isBot: false,
//       timestamp: new Date()
//     };

//     setMessages(prev => [...prev, userMessage]);
//     setNewMessage('');
//     setIsTyping(true);

//     // Simulate bot response
//     setTimeout(() => {
//       const botResponse = {
//         id: Date.now() + 1,
//         text: getBotResponse(newMessage),
//         isBot: true,
//         timestamp: new Date()
//       };
//       setMessages(prev => [...prev, botResponse]);
//       setIsTyping(false);
//     }, 1500);
//   };

//   const getBotResponse = (userMessage) => {
//     const message = userMessage.toLowerCase();
    
//     if (message.includes('price') || message.includes('cost') || message.includes('package')) {
//       return "Our packages start from KSh 2,500 for 10Mbps. Would you like me to show you all available packages?";
//     } else if (message.includes('speed') || message.includes('mbps')) {
//       return "We offer speeds from 10Mbps up to 100Mbps! What speed would work best for your needs?";
//     } else if (message.includes('installation') || message.includes('setup')) {
//       return "Installation is free and typically takes 2-3 hours. Our technicians will handle everything. When would be convenient for you?";
//     } else if (message.includes('coverage') || message.includes('area') || message.includes('location')) {
//       return "We currently serve Maseno and surrounding areas. Can you share your specific location so I can check availability?";
//     } else if (message.includes('support') || message.includes('problem') || message.includes('issue')) {
//       return "I'm here to help! Can you describe the issue you're experiencing? Our technical team is available 24/7.";
//     } else {
//       return "Thanks for reaching out! For detailed assistance, you can call us at +254 715 080 432 or email support.amazons@gmail.com. Is there anything specific I can help you with?";
//     }
//   };

//   const quickActions = [
//     "View packages",
//     "Check coverage",
//     "Installation info",
//     "Technical support"
//   ];

//   return (
//     <>
//       {/* Floating Chat Button */}
//       <div className="fixed bottom-6 right-6 z-50">
//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           className={`relative group bg-gradient-to-r from-primary-500 to-primary-600 dark:from-cyan-500 dark:to-sky-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 ${
//             isOpen ? 'rotate-180' : ''
//           }`}
//         >
//           {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
          
//           {/* Notification dot */}
//           {!isOpen && (
//             <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
//           )}
          
//           {/* Tooltip */}
//           {/* <div className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-slate-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
//             Chat with support
//           </div> */}
//         </button>
//       </div>

//       {/* Chat Popup */}
//       {isOpen && (
//         <div className="fixed bottom-24 right-6 sm:w-90 lg:w-96 h-[500px] bg-white dark:bg-slate-800 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700 z-50 flex flex-col overflow-hidden transform animate-in slide-in-from-bottom-5 duration-300">
//           {/* Header */}
//           <div className="bg-gradient-to-r from-primary-500 to-primary-600 dark:from-cyan-500 dark:to-sky-600 text-white p-4 flex items-center justify-between">
//             <div className="flex items-center space-x-3">
//               <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
//                 <Bot size={20} />
//               </div>
//               <div>
//                 <h3 className="font-semibold">Amazons Support</h3>
//                 <p className="text-sm opacity-90">Always here to help</p>
//               </div>
//             </div>
//             <div className="flex space-x-2">
//               <a
//                 href={whatsappUrl}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="p-1 hover:bg-white/20 rounded"
//                 aria-label="Contact via WhatsApp"
//               >
//                 <WhatsAppIcon size={16} />
//               </a>
//               <button
//                 onClick={() => setIsMinimized(!isMinimized)}
//                 className="p-1 hover:bg-white/20 rounded"
//               >
//                 <Minimize2 size={16} />
//               </button>
//               <button
//                 onClick={() => setIsOpen(false)}
//                 className="p-1 hover:bg-white/20 rounded"
//               >
//                 <X size={16} />
//               </button>
//             </div>
//           </div>

//           {!isMinimized && (
//             <>
//               {/* Messages Area */}
//               <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50 dark:bg-slate-900">
//                 {messages.map((message) => (
//                   <div
//                     key={message.id}
//                     className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
//                   >
//                     <div className={`flex items-start space-x-2 max-w-[80%]`}>
//                       {message.isBot && (
//                         <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-primary-600 dark:from-cyan-500 dark:to-sky-600 rounded-full flex items-center justify-center text-white flex-shrink-0">
//                           <Bot size={16} />
//                         </div>
//                       )}
//                       <div
//                         className={`p-3 rounded-2xl ${
//                           message.isBot
//                             ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm'
//                             : 'bg-gradient-to-r from-primary-500 to-primary-600 dark:from-cyan-500 dark:to-sky-600 text-white'
//                         }`}
//                       >
//                         <p className="text-sm">{message.text}</p>
//                       </div>
//                       {!message.isBot && (
//                         <div className="w-8 h-8 bg-slate-300 dark:bg-slate-600 rounded-full flex items-center justify-center flex-shrink-0">
//                           <User size={16} />
//                         </div>
//                       )}
//                     </div>
//                   </div>
//                 ))}

//                 {/* Typing Indicator */}
//                 {isTyping && (
//                   <div className="flex justify-start">
//                     <div className="flex items-start space-x-2">
//                       <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-primary-600 dark:from-cyan-500 dark:to-sky-600 rounded-full flex items-center justify-center text-white">
//                         <Bot size={16} />
//                       </div>
//                       <div className="bg-white dark:bg-slate-800 p-3 rounded-2xl shadow-sm">
//                         <div className="flex space-x-1">
//                           <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
//                           <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
//                           <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 )}

//                 {/* Quick Actions */}
//                 {messages.length === 1 && (
//                   <div className="space-y-2">
//                     <p className="text-xs text-slate-500 dark:text-slate-400 text-center">Quick actions:</p>
//                     <div className="grid grid-cols-2 gap-2">
//                       {quickActions.map((action) => (
//                         <button
//                           key={action}
//                           onClick={() => setNewMessage(action)}
//                           className="p-2 text-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-primary-50 dark:hover:bg-slate-700 transition-colors duration-200"
//                         >
//                           {action}
//                         </button>
//                       ))}
//                     </div>
//                   </div>
//                 )}

//                 <div ref={messagesEndRef} />
//               </div>

//               {/* Input Area */}
//               <div className="p-4 bg-white dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700">
//                 <form onSubmit={handleSendMessage} className="flex space-x-2">
//                   <input
//                     type="text"
//                     value={newMessage}
//                     onChange={(e) => setNewMessage(e.target.value)}
//                     placeholder="Type your message..."
//                     className="flex-1 p-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:ring-2 focus:ring-primary-500 dark:focus:ring-cyan-500 focus:border-transparent outline-none transition-all duration-200"
//                   />
//                   <button
//                     type="submit"
//                     disabled={!newMessage.trim()}
//                     className="p-2 bg-gradient-to-r from-primary-500 to-primary-600 dark:from-cyan-500 dark:to-sky-600 text-white rounded-lg hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
//                   >
//                     <Send size={18} />
//                   </button>
//                 </form>
//               </div>
//             </>
//           )}
//         </div>
//       )}
//     </>
//   );
// };

const careerOpportunities = [
  'Network Engineering',
  'IT Support',
  'Customer Support / Business / Marketing',
  'Finance',
];

const careerRequirements = [
  'Relevant course in IT, Computer Science, Telecommunications, Business, or a related field.',
  'Basic computer and communication skills.',
  'Willingness to learn and work in a team.',
];

const applicationDeadline = new Date(2026, 3, 12, 23, 59, 59, 999);

const CareerPage = () => {
  const isDeadlineDue = new Date() > applicationDeadline;

  return (
  <main className="min-h-screen bg-slate-50 px-4 pb-16 pt-32 dark:bg-slate-900 sm:px-6 lg:px-8">
    <div className="mx-auto max-w-5xl">
      <div className="rounded-3xl border border-slate-200 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-900 dark:shadow-2xl dark:shadow-black/30">
        <div className="border-b border-slate-200 px-6 py-8 dark:border-slate-700 sm:px-8 lg:px-10 lg:py-10">
          <a
            href="https://pdflink.to/4115949e/"
            download
            className="inline-flex text-sm font-semibold uppercase tracking-[0.2em] text-orange-500 underline-offset-4 transition-colors hover:text-orange-600 hover:underline dark:text-orange-300 dark:hover:text-cyan-300"
          >
            Click here to Download document
          </a>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Internship & Industrial Attachment Opportunity
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600 dark:text-slate-200">
            Lence Amazons Co. invites applications from motivated students and graduates seeking practical experience in the networking industry.
          </p>
        </div>

        <div className="grid gap-8 px-6 py-8 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:px-10 lg:py-10">
          <div className="space-y-8">
            <section>
              <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Opportunities Available In</h2>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {careerOpportunities.map((item) => (
                  <div key={item} className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100">
                    {item}
                  </div>
                ))}
              </div>
            </section>

            <section className="grid gap-6 md:grid-cols-2">
              <div>
                <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Who Can Apply</h2>
                <div className="mt-4 space-y-3 text-sm leading-7 text-slate-600 dark:text-slate-200">
                  <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-4 dark:border-slate-600 dark:bg-slate-800">
                    <span className="font-semibold text-slate-900 dark:text-white">Internship:</span> Students who have completed their 4th year (graduates).
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-4 dark:border-slate-600 dark:bg-slate-800">
                    <span className="font-semibold text-slate-900 dark:text-white">Attachment:</span> Continuing students (Diploma or Degree).
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Duration</h2>
                <div className="mt-4 space-y-3 text-sm leading-7 text-slate-600 dark:text-slate-200">
                  <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-4 dark:border-slate-600 dark:bg-slate-800">
                    <span className="font-semibold text-slate-900 dark:text-white">Internship:</span> 3 to 6 months.
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-4 dark:border-slate-600 dark:bg-slate-800">
                    <span className="font-semibold text-slate-900 dark:text-white">Attachment:</span> As required by your institution.
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Requirements</h2>
              <div className="mt-4 space-y-3">
                {careerRequirements.map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-4 dark:border-slate-600 dark:bg-slate-800">
                    <div className="mt-2 h-2 w-2 rounded-full bg-primary-500 dark:bg-cyan-400" />
                    <p className="text-sm leading-7 text-slate-600 dark:text-slate-200">{item}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <aside className="rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-600 dark:bg-slate-800">
            <h2 className="text-lg font-semibold text-slate-900 dark:text-white">How to Apply</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-200">
              Send your CV, Cover Letter, and for attachment applicants, an Introduction Letter to:
            </p>
            <a
              href="mailto:lenceamazons@gmail.com?subject=Application%20for%20Internship%20or%20Attachment"
              className="mt-5 inline-flex rounded-xl bg-primary-600 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-700 dark:bg-cyan-400 dark:text-slate-950 dark:hover:bg-cyan-300"
            >
              lenceamazons@gmail.com
            </a>

        

            <div className="mt-8 border-t border-slate-200 pt-6 dark:border-slate-600">
              <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-300">Deadline</h3>
              <p
                className={`mt-3 text-sm leading-7 ${
                  isDeadlineDue ? 'text-red-600 dark:text-red-400 font-semibold' : 'text-slate-600 dark:text-slate-200'
                }`}
              >
                12th April 2026.
              </p>
                <p
                className={`mt-3 text-sm font-semibold leading-7 ${
                  isDeadlineDue ? 'text-red-600 dark:text-red-400' : 'text-green-600 dark:text-green-400'
                }`}
              >
                {isDeadlineDue ? 'Application Closed' : 'Application Open'}
              </p>
            </div>

            <div className="mt-8 border-t border-slate-200 pt-6 dark:border-slate-600">
              <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-300">Note</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-200">
                Only shortlisted candidates will be contacted.
              </p>
            </div>

            <div className="mt-8 rounded-xl bg-white px-4 py-4 text-sm leading-7 text-slate-600 dark:border dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100">
              Join Amazons Networks Today and Make a Difference with Excellence.
            </div>

          
          </aside>
        </div>
      </div>
    </div>
  </main>
  );
};

const TermsAndPolicyPage = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <main className="min-h-screen bg-slate-50 px-4 pb-16 pt-32 dark:bg-slate-900 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="rounded-3xl border border-slate-200 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-900 dark:shadow-2xl dark:shadow-black/30">
          <div className="border-b border-slate-200 px-6 py-8 dark:border-slate-700 sm:px-8 lg:px-10 lg:py-10">
            <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              Terms of Service & Policy
            </h1>
            <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600 dark:text-slate-200">
              Review the official Amazons Network Terms of Service below. Download the stamped PDF copy anytime.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={termsPdfPath}
                download="AMAZONS TERMS OF SERVICE STAMPED.pdf"
                className="inline-flex items-center rounded-xl bg-primary-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-700 dark:bg-cyan-400 dark:text-slate-950 dark:hover:bg-cyan-300"
              >
                Download PDF
              </a>
              
            </div>
          </div>

          <div className="space-y-8 p-6 text-slate-700 dark:text-slate-200 sm:p-8 lg:p-10">
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">1. Purpose</h2>
              <p className="leading-8">
                These Terms of Service set out the terms and conditions governing the provision and use of internet connectivity and related services offered by Amazons Network. By subscribing to or using the Company services, the client agrees to comply with these terms.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">2. Service Provision</h2>
              <p className="leading-8">
                Amazons Network shall provide internet and related network services in accordance with the subscribed package, coverage availability, and the agreed service plan.
              </p>
              <p className="leading-8">
                The Company reserves the right to modify, upgrade, suspend, or discontinue any service where necessary for operational, technical, security, or regulatory purposes.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">3. Client Registration and Account Responsibility</h2>
              <p className="leading-8">The client shall:</p>
              <ul className="list-disc space-y-2 pl-6 leading-8">
                <li>Provide accurate and complete registration information.</li>
                <li>Maintain updated contact details for communication and billing purposes.</li>
                <li>Be responsible for all activities conducted under their account.</li>
                <li>Ensure confidentiality of login credentials and account access details.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">4. Billing and Payment Terms</h2>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">4.1 Subscription Fees</h3>
              <p className="leading-8">Clients shall pay all applicable subscription, installation, and service charges within the stipulated billing period.</p>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">4.2 Invoice Issuance</h3>
              <p className="leading-8">The applicable Terms of Service and installation terms shall accompany invoices and quotations issued by the Company.</p>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">4.3 Late Payments and Debt Management</h3>
              <p className="leading-8">Failure to settle outstanding balances within a period of three months may result in:</p>
              <ul className="list-disc space-y-2 pl-6 leading-8">
                <li>Service suspension,</li>
                <li>Restricted access,</li>
                <li>Account deactivation,</li>
                <li>Debt recovery follow-up procedures.</li>
              </ul>
              <p className="leading-8">The Company reserves the right to implement debt control measures on overdue accounts.</p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">5. Installation Terms</h2>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">5.1 Installation Process</h3>
              <p className="leading-8">All installations shall be carried out by authorized Company personnel.</p>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">5.2 Client Obligations During Installation</h3>
              <p className="leading-8">The client shall:</p>
              <ul className="list-disc space-y-2 pl-6 leading-8">
                <li>Provide a safe and accessible installation environment,</li>
                <li>Allow reasonable access to the premises,</li>
                <li>Ensure availability during scheduled installation appointments.</li>
              </ul>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">5.3 Installation Charges</h3>
              <p className="leading-8">Installation fees and related costs shall be communicated to the client before service activation.</p>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">5.4 Equipment Ownership</h3>
              <ul className="list-disc space-y-2 pl-6 leading-8">
                <li>All customer-purchased equipment (routers and adapters) shall remain the property of the client upon full payment.</li>
                <li>Where equipment is provided by Amazons Network under rentals, lease, or temporary usage arrangements, such equipment shall remain the property of the Company unless otherwise agreed in writing.</li>
                <li>The client shall be responsible for the proper handling and safety of all equipment installed at their premises. Any loss, intentional damage, or misuse of Company-owned equipment may attract replacement or repair charges.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">6. Acceptable Use Policy</h2>
              <p className="leading-8">Clients shall not:</p>
              <ul className="list-disc space-y-2 pl-6 leading-8">
                <li>Use the service for unlawful activities,</li>
                <li>Interfere with network performance or security,</li>
                <li>Resell services without Company authorization,</li>
                <li>Engage in activities that may negatively affect other users or the Company infrastructure.</li>
              </ul>
              <p className="leading-8">Violation of this policy may result in suspension or termination of services, and where applicable, legal procedures shall be applied.</p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">7. Service Availability and Interruptions</h2>
              <p className="leading-8">The Company shall make reasonable efforts to maintain reliable network availability. However, Amazons Network shall not be held liable for service interruptions resulting from:</p>
              <ul className="list-disc space-y-2 pl-6 leading-8">
                <li>Power outages,</li>
                <li>Technical faults caused by clients,</li>
                <li>Natural disasters,</li>
                <li>Third-party infrastructure interruptions,</li>
                <li>Circumstances beyond reasonable control.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">8. Access Control and System Security</h2>
              <p className="leading-8">To enhance operational efficiency and data protection:</p>
              <ul className="list-disc space-y-2 pl-6 leading-8">
                <li>Access control measures may be implemented across Company systems,</li>
                <li>Unauthorized access or misuse of systems is strictly prohibited,</li>
                <li>The Company reserves the right to monitor and restrict access where necessary,</li>
                <li>The Company does not monitor, access, or track the content of customers browsing activities, communications, or data stored on their personal devices while using the service.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">9. Customer Support and Ticketing</h2>
              <p className="leading-8">Clients shall report service issues through the official support and communication channels provided by the Company.</p>
              <p className="leading-8">The Company shall make reasonable efforts to:</p>
              <ul className="list-disc space-y-2 pl-6 leading-8">
                <li>Respond to reported issues promptly,</li>
                <li>Address critical service concerns,</li>
                <li>Provide updates regarding service issues resolution status.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">10. Account Suspension and Termination</h2>
              <p className="leading-8">The Company reserves the right to suspend, deactivate, or terminate services under the following circumstances:</p>
              <ul className="list-disc space-y-2 pl-6 leading-8">
                <li>Non-payment of dues,</li>
                <li>Breach of this Agreement,</li>
                <li>Fraudulent or unauthorized use,</li>
                <li>Abuse of Company infrastructure or personnel.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">11. Privacy and Confidentiality</h2>
              <p className="leading-8">The Company shall handle client information with confidentiality and shall only use such information for:</p>
              <ul className="list-disc space-y-2 pl-6 leading-8">
                <li>Service delivery,</li>
                <li>Billing and operational purposes,</li>
                <li>Customer support,</li>
                <li>Legal or regulatory compliance, where applicable.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">12. Amendments to Terms</h2>
              <p className="leading-8">Amazons Network reserves the right to review, amend, or update these Terms of Service at any time, according to the company standards. Clients shall be notified of significant changes where necessary.</p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">13. Governing Principles</h2>
              <p className="leading-8">This Agreement shall be interpreted in accordance with applicable laws, company operational policies, and industry best practices.</p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">14. Acceptance of Terms</h2>
              <p className="leading-8">By using the Company services, the client acknowledges that they have read, understood, and agreed to comply with these Terms of Service.</p>
            </section>

            <section className="space-y-4 rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-700 dark:bg-slate-800/50">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">Information You Provide</h2>
              <div className="space-y-2 text-sm leading-7 sm:text-base">
                <p>Your Name: ____________________</p>
                <p>Company/Business Name (where applicable): ____________________</p>
                <p>ID/Passport Number: ____________________</p>
                <p>Phone Number: ____________________</p>
                <p>Email Address: ____________________</p>
                <p>Physical Address: ____________________</p>
                <p>Package Subscribed: ____________________</p>
                <p>Your Signature: ____________________ Signed Date: ____________________</p>
              </div>

           
            </section>
          </div>
        </div>
      </div>
    </main>
  );
};

const getCurrentView = () => {
  if (typeof window === 'undefined') {
    return 'home';
  }

  const hash = window.location.hash.toLowerCase();

  if (hash === '#career') {
    return 'career';
  }

  if (hash === '#terms' || hash === '#policy' || hash === '#terms-policy') {
    return 'legal';
  }

  return 'home';
};

function App() {
  const [currentView, setCurrentView] = useState(getCurrentView);

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentView(getCurrentView());
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  // Add smooth scrolling effect
  React.useEffect(() => {
    // Add smooth scrolling behavior to the entire document
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Cleanup function
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <ThemeProvider>
      <div className="font-sans theme-transition">
        <PageHeader />
        {currentView === 'career' ? (
          <CareerPage />
        ) : currentView === 'legal' ? (
          <TermsAndPolicyPage />
        ) : (
          <main className="relative">
            {/* Add scroll margin to sections for better navigation */}
            <div id="hero" className="scroll-mt-20">
              <SectionOne /> 
            </div>
            <div id="features" className="scroll-mt-20">
              <SectionTwo />
            </div>
            <div id="packages" className="scroll-mt-20">
              <SectionThree />
            </div>
            <div id="faq" className="scroll-mt-20">
              <SectionFour />
            </div>
          </main>
        )}
        <Footer />
        <ChatBot />
      </div>
    </ThemeProvider>
  );
}

export default App;