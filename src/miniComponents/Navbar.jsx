import React from 'react';
import Authenticate from '../components/Authenticate';
import DesktopLogo from '../assets/desktop_logo.svg'
import Logout from './Logout';

const Navbar = () => {

  const isLoggedIn = localStorage.getItem('isLoggedIn');

  return (
  <>  
    <header className="bg-transparent p-4 flex justify-center md:justify-between items-center">
      <img src={DesktopLogo} alt="Logo" className="w-30" />

      <div className='hidden md:flex'>
      {isLoggedIn ? <Logout/> : <Authenticate /> }
      </div>


    </header>
  </>
  );
};

export default Navbar;
