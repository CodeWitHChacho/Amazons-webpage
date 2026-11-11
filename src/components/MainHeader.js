// src/components/MainHeader.js
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; // Import motion and AnimatePresence
import { Wifi, Menu, X } from 'lucide-react';
import ThemeSwitcher from './ThemeSwitcher';
import Dropdown from './Dropdown';
import MobileDropdown from './MobileDropdown';
import Logo from './Logo';

const MainHeader = ({ showTopBar }) => {
  const [isOpen, setIsOpen] = useState(false); // This state now controls the drawer
  const navLinks = ["Features", "Packages", "Blog", "Career"];

  const GradientText = ({ children }) => (
    <span className="bg-gradient-to-r from-primary-500 to-primary-600 dark:from-cyan-400 dark:to-sky-500 bg-clip-text text-transparent">
        {children}
    </span>
  );

  const closeMobileMenu = () => setIsOpen(false);

  // --- Animation Variants ---
  const backdropVariants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  const drawerVariants = {
    visible: { x: 0, transition: { type: 'spring', stiffness: 200, damping: 25 } },
    hidden: { x: '-100%', transition: { type: 'spring', stiffness: 200, damping: 25 } },
  };

  return (
    <>
      {/* --- DESKTOP HEADER (No Changes) --- */}
      <header 
        className={`
          absolute top-0 left-0 w-full 
          transform transition-transform duration-300 ease-in-out
          bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 theme-transition
          ${showTopBar ? 'md:translate-y-[2.5rem]' : 'translate-y-0'}
        `}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Logo className="h-16 md:h-18 lg:h-20" />
            <nav className="hidden lg:flex items-center space-x-8">
              {navLinks.map(link => (
                <a key={link} href={`#${link.toLowerCase()}`} className="text-slate-600 dark:text-slate-300 hover:text-primary-500 dark:hover:text-cyan-400 font-medium theme-transition">
                  {link}
                </a>
              ))}
              <Dropdown />
              <a href="#terms" className="text-slate-600 dark:text-slate-300 hover:text-primary-500 dark:hover:text-cyan-400 font-medium theme-transition">Terms of Service</a>
            </nav>
            <div className="flex items-center space-x-4">
              <div className="hidden lg:block"><ThemeSwitcher /></div>
              <button className="lg:hidden" onClick={() => setIsOpen(true)}>
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* --- NEW MOBILE DRAWER --- */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              variants={backdropVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              onClick={closeMobileMenu}
              className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            />
            
            {/* Drawer */}
            <motion.div
              variants={drawerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="fixed top-0 left-0 h-full w-72 sm:w-80 md:w-96 bg-white dark:bg-slate-900 shadow-xl z-50 flex flex-col lg:hidden"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between p-4 md:p-6 border-b border-slate-200 dark:border-slate-800">
                <Logo className="h-9 md:h-10" />
                <button onClick={closeMobileMenu} className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                  <X className="w-5 h-5 md:w-6 md:h-6 text-slate-600 dark:text-slate-300" />
                </button>
              </div>

              {/* Drawer Navigation */}
              <nav className="flex-grow p-4 md:p-6 flex flex-col space-y-2 md:space-y-3">
                {navLinks.map(link => (
                  <a key={link} href={`#${link.toLowerCase()}`} onClick={closeMobileMenu} className="block px-3 py-2 md:py-3 rounded-md text-base md:text-lg font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800">
                    {link}
                  </a>
                ))}
               
                {/* Mobile Dropdown has a different root style */}
                <div className="border-t border-b border-slate-200 dark:border-slate-800 my-2 md:my-3">
                   <MobileDropdown closeMobileMenu={closeMobileMenu} />
                </div>

                <a href="#terms" onClick={closeMobileMenu} className="block px-3 py-2 md:py-3 rounded-md text-base md:text-lg font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800">
                  Terms of Service
                </a>
              </nav>

              {/* Drawer Footer (Theme Switcher) */}
              <div className="p-4 mt-auto border-t border-slate-200 dark:border-slate-800">
                <ThemeSwitcher />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default MainHeader;