import React from 'react';
import Authenticate from '../components/Authenticate';
import DesktopLogo from '../assets/desktop_logo.svg'

const Navbar = () => {
  return (
    <header className="bg-transparent p-4 flex justify-between items-center">
      <img src={DesktopLogo} alt="Logo" className="" />
      <Authenticate />
    </header>
  );
};

export default Navbar;
