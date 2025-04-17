import { assets } from '@/assets/assets';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const Navbar = ({ isDarkMode, setIsDarkMode }) => {

  const [isScroll, setIsScroll] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: "Home", href: "#top" },
    { name: "About me", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "My Work", href: "#work" },
    { name: "Contact me", href: "#contact" },
  ];

  return (
    <>
      <div className="bg-overlay"></div>
      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 
        ${isScroll ? 'bg-white bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:shadow-white/20' : ''}`}
      >
        <Link href="#top">
          {/* <Image src={isDarkMode ? logoDark : logo} className="cursor-pointer mr-14" width={200} height={200}  alt="logo" /> */}
          <h1 className='font-Montserrat font-bold text-2xl'>AZIZ.DEV </h1>
        </Link>

        <ul className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 dark:bg-transparent">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link className="font-Poppins relative group" href={link.href}>
                {link.name}
                <div className="absolute w-full h-0.5 dark:bg-white/80 bg-black scale-x-0 group-hover:scale-x-100 transition-transform"></div>
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <button onClick={() => setIsDarkMode(prev => !prev)}>
            <Image src={isDarkMode ? assets.sun_icon : assets.moon_icon} alt="" className="w-6" />
          </button>
          <Link
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Poppins dark:border-white/50"
          >
            Contact <Image src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon} alt="" className="w-3" />
          </Link>
          <button className="block md:hidden ml-3" onClick={() => setIsMenuOpen(true)}>
            <Image src={isDarkMode ? assets.menu_white : assets.menu_black} alt="" className="w-6" />
          </button>
        </div>

        <div
          className={`fixed top-0 right-0 h-screen w-64 bg-gray-50 border-l border-gray-300 p-6 transition-transform 
          dark:bg-darkHover dark:text-white dark:border-gray-700 ${isMenuOpen ? 'translate-x-0' : 'translate-x-64'}`}
        >
          <button className="absolute right-6 top-6" onClick={() => setIsMenuOpen(false)}>
            <Image src={isDarkMode ? assets.close_white : assets.close_black} alt="" className="w-5 cursor-pointer" />
          </button>
          <ul className="flex flex-col gap-4 mt-10">
            <li><Link className="font-Poppins" href="#top" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
            <li><Link className="font-Poppins" href="#about" onClick={() => setIsMenuOpen(false)}>About me</Link></li>
            <li><Link className="font-Poppins" href="#services" onClick={() => setIsMenuOpen(false)}>Services</Link></li>
            <li><Link className="font-Poppins" href="#work" onClick={() => setIsMenuOpen(false)}>My Work</Link></li>
            <li><Link className="font-Poppins" href="#contact" onClick={() => setIsMenuOpen(false)}>Contact me</Link></li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
