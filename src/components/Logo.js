import React from 'react';

const Logo = ({ className = 'h-12 md:h-14 lg:h-16' }) => {
  return (
    <a href="#home" className="flex items-center space-x-2">
      {/* Light Mode Logo */}
      <img 
        src="/assets/logo-light-theme.webp" 
       alt="Amazons Logo" 
        className={`block dark:hidden ${className}`} 
      />
      {/* Dark Mode Logo */}
      <img 
        src="/assets/logo-dark-theme.webp" 
        alt="Amazons Logo" 
        className={`hidden dark:block ${className}`} 
      />
    </a>
  );
};

export default Logo;