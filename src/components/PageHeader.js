// src/components/PageHeader.js
import React, { useState, useEffect } from 'react';
import TopBar from './TopBar';
import MainHeader from './MainHeader';

const PageHeader = () => {
  const [showTopBar, setShowTopBar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlHeader = () => {
    if (window.scrollY > 50 && window.scrollY > lastScrollY) {
      setShowTopBar(false);
    } else {
      setShowTopBar(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', controlHeader);
    return () => {
      window.removeEventListener('scroll', controlHeader);
    };
  }, [lastScrollY]);

  return (
    // This container remains fixed. Its children will now be absolutely positioned.
    <div className="fixed top-0 left-0 w-full z-50">
      {/* Pass the show state to both components */}
      <TopBar show={showTopBar} />
      <MainHeader showTopBar={showTopBar} />
    </div>
  );
};

export default PageHeader;