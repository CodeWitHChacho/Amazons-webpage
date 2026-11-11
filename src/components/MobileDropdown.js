// src/components/MobileDropdown.js
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Newspaper, Briefcase, Server } from 'lucide-react';

const MobileDropdown = ({ closeMobileMenu }) => {
  const [isOpen, setIsOpen] = useState(false);

  const dropdownItems = [
    { text: "Blog", href: "#blog", icon: Newspaper },
    { text: "Career", href: "#career", icon: Briefcase },
    { text: "Services", href: "#services", icon: Server },
  ];

  const dropdownVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: 'auto', transition: { duration: 0.3, ease: "easeOut" } },
    exit: { opacity: 0, height: 0, transition: { duration: 0.2, ease: "easeIn" } },
  };

  const handleLinkClick = () => {
    // This function will close the entire mobile menu when a link is clicked
    if (closeMobileMenu) {
      closeMobileMenu();
    }
  };

  return (
    <div className="w-full text-center">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center w-full py-2 md:py-3 text-slate-600 dark:text-slate-300 hover:text-primary-500 dark:hover:text-cyan-400 font-medium md:text-lg theme-transition"
      >
        <span>Explore More</span>
        <ChevronDown 
          className={`w-4 h-4 md:w-5 md:h-5 ml-1 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={dropdownVariants}
            className="overflow-hidden"
          >
            {/* Sub-menu items with a slightly different background to show nesting */}
            <div className="py-2 bg-slate-100 dark:bg-slate-800/50 rounded-lg mt-2">
              <ul className="flex flex-col items-center space-y-2">
                {dropdownItems.map((item, index) => (
                  <li key={index} className="w-full">
                    <a
                      href={item.href}
                      onClick={handleLinkClick} // Use the new handler here
                      className="flex items-center justify-center w-full py-2 md:py-3 text-sm md:text-base text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 theme-transition"
                    >
                      <item.icon className="w-4 h-4 md:w-5 md:h-5 mr-3 text-slate-500 dark:text-slate-400" />
                      {item.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileDropdown;