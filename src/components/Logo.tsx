
import React from 'react';
import logo from '../assets/anu-logo.png';

const Logo = () => {
  return (
    <div className="flex items-center justify-center p-2 md:p-3 animate-fadeIn">
      <img 
        src={logo} 
        alt="Acharya Nagarjuna University Logo" 
        className="h-12 md:h-16 w-auto transition-all"
      />
    </div>
  );
};

export default Logo;
