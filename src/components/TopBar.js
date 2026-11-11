// src/components/TopBar.js
import React from 'react';
// CORRECTED: Replaced Pinterest with Linkedin, which exists in Lucide.
import { MapPin, Clock, Mail, Twitter, Facebook, Linkedin, Instagram } from 'lucide-react';

const TopBar = ({ show }) => {
  const infoItems = [
    { icon: MapPin, text: "Sunrise, Maseno - Kenya" },
    { icon: Clock, text: "Mon - Fri: 08:00am - 10:00pm" },
    { icon: Mail, text: "support.amazons@gmail.com", href: "mailto:support.amazons@gmail.com" },
  ];

  
  const socialIcons = [
    { name: "Twitter", icon: Twitter, href: "#" },
    { name: "Facebook", icon: Facebook, href: "#" },
    { name: "Linkedin", icon: Linkedin, href: "#" },
    { name: "Instagram", icon: Instagram, href: "#" },
  ];

  return (
    <div
      className={`
         hidden md:block
        absolute top-0 left-0 w-full 
        bg-slate-100 dark:bg-slate-950
        transform transition-transform duration-300 ease-in-out
        ${show ? 'translate-y-0' : '-translate-y-full'}
      `}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="hidden md:flex justify-between items-center h-10">
          {/* Left side: Contact Info */}
          <div className="flex items-center space-x-6 text-sm">
            {infoItems.map((item, index) => (
              <a
                key={index}
                href={item.href || '#'}
                className="flex items-center text-slate-600 dark:text-slate-400 hover:text-primary-500 dark:hover:text-cyan-400 theme-transition"
              >
                <item.icon className="w-4 h-4 mr-2 text-primary-500 dark:text-cyan-400" />
                <span>{item.text}</span>
              </a>
            ))}
          </div>

          {/* Right side: Social Icons */}
          <div className="flex items-center space-x-2">
            {socialIcons.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 theme-transition"
                aria-label={`Follow us on ${social.name}`}
              >
                <social.icon className="w-4 h-4 text-slate-600 dark:text-slate-300" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;