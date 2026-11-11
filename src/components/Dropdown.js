// src/components/Dropdown.js
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Newspaper, Briefcase, Server } from 'lucide-react';

const Dropdown = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const dropdownItems = [
    { text: "Blog", href: "#blog", icon: Newspaper },
    { text: "Shop", href: "#Shop", icon: Briefcase },
    { text: "Services", href: "#services", icon: Server },
  ];

  const dropdownVariants = {
    hidden: { opacity: 0, y: -10, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.2, ease: "easeOut" } },
    exit: { opacity: 0, y: -10, scale: 0.95, transition: { duration: 0.15, ease: "easeIn" } },
  };

  return (
    <div 
      className="relative" 
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        className="flex items-center text-slate-600 dark:text-slate-300 hover:text-primary-500 dark:hover:text-cyan-400 font-medium theme-transition"
      >
        <span>Explore More</span>
        <ChevronDown 
          className={`w-4 h-4 ml-1 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={dropdownVariants}
            className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 rounded-lg shadow-xl overflow-hidden"
          >
            <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
              <ul className="py-2">
                {dropdownItems.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.href}
                      className="flex items-center px-4 py-2 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 theme-transition"
                    >
                      <item.icon className="w-4 h-4 mr-3 text-slate-500 dark:text-slate-400" />
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

export default Dropdown;