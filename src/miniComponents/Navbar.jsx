import React from 'react';
import Authenticate from '../components/Authenticate';
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useState } from 'react';
import Logout from './Logout';

const Navbar = () => {

  const isLoggedIn = localStorage.getItem('isLoggedIn');
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  }

  return (
  <>  
    <header className="bg-transparent p-2 flex justify-between items-center">
      {/* Logo */}
      <h1 className=''>BookGenie</h1>

      {/* Desktop Menu */}
      <div className='hidden md:flex'>
        {isLoggedIn ? <Logout/> : <Authenticate /> }
      </div>

      {/* Mobile Button */}
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
      </div>

      {/* Mobile Menu */}
      <div
      className={
        nav ? "fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-white ease-in-out duration-500" : "ease-in-out w-[60%] duration-500 fixed top-0 botton-0 left-[-100%]"
      }
      >
        <h1 className='p-4 text-2xl'>BookGenie</h1>
        <div className='flex flex-col gap-2 p-3'>
          <div>Home</div>
          {isLoggedIn ? <Logout/> : <Authenticate /> }
        </div>
      </div>
    </header>
  </>
  );
};

export default Navbar;
