import React from 'react';
import Authenticate from '../components/Authenticate';
import DesktopLogo from '../assets/desktop_logo.svg'

const Navbar = () => {

  const isLoggedIn = false

  return (
    <header className="bg-transparent p-4 flex justify-between items-center">
      <img src={DesktopLogo} alt="Logo" className="" />

      {isLoggedIn ? <h1 className="font-bold text-2xl">Welcome</h1> : <Authenticate /> }

    </header>
  );
};

export default Navbar;
