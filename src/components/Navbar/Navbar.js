import React, { useState, useEffect } from 'react';
import { IoMenu } from 'react-icons/io5'; // Example menu icon

import 'tailwindcss/tailwind.css';
import '../../styles/HelveticaNeue.css';
import '../../styles/colors.css'; 
import logo from '../../images/ib_logo.svg';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [selectedLink, setSelectedLink] = useState('Home'); // Initialize with 'Home'

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    // Function to update the selected link based on the scroll position
    const handleScroll = () => {
      const homeSection = document.getElementById('home-section');
      const workSection = document.getElementById('work-section');
      const contactSection = document.getElementById('contact-section');
      const scrollPosition = window.scrollY;

      if (
        scrollPosition >= homeSection.offsetTop &&
        scrollPosition < workSection.offsetTop
      ) {
        setSelectedLink('Home');
      } else if (
        scrollPosition >= workSection.offsetTop &&
        scrollPosition < contactSection.offsetTop
      ) {
        setSelectedLink('Work');
      } else if (scrollPosition >= contactSection.offsetTop) {
        setSelectedLink('Contact');
      }
    };

    // Add scroll event listener to update the selected link
    //window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white h-20 flex items-center justify-between p-4 pt-6">
      {/* Increased height to h-20 */}
      <div className=" ml-10">
        <img src={logo} alt="Image 1" className="w-42 h-12"/>
      </div>
      <div className="Links hidden md:flex space-x-10 mr-10"> {/* Increased space-x */}
        <a
          href="#home-section"
          className={`font-helvetica-neue text-3xl ${selectedLink === 'Home' ? 'selected_link_color' : ''}`}

        >
          Home
        </a>
        <a
          href="#work-section"
          className={`font-helvetica-neue text-3xl standby_link_color hover:text-black hover:no-underline ${
            selectedLink === 'Home' ? 'text-blue-500' : ''
          }`}
        >
          Work
        </a>
        <a
          href="#about-section"
          className={`font-helvetica-neue text-3xl standby_link_color hover:text-black hover:no-underline ${
            selectedLink === 'Home' ? 'text-blue-500' : ''
          }`}
        >
          About
        </a>
        <a
          href="#contact-section"
          className={`font-helvetica-neue text-3xl standby_link_color hover:text-black hover:no-underline ${
            selectedLink === 'Home' ? 'text-blue-500' : ''
          }`}
        >
          Contact
        </a>
      </div>
      <div className="md:hidden">
        <IoMenu onClick={toggleMenu} className="text-2xl cursor-pointer" />
        {showMenu && (
          <div className="links absolute top-20 right-0 bg-gray-300 w-screen mr-20 ">
            <a
              href="#home-section"
              className="block p-4 hover:bg-gray-400 font-helvetica-neue text-lg" // Increased padding
            >
              Home
            </a>
            <a
              href="#work-section"
              className="block p-4 hover:bg-gray-400 font-helvetica-neue text-lg" // Increased padding
            >
              Work
            </a>
            <a
              href="#contact-section"
              className="block p-4 hover:bg-gray-400 font-helvetica-neue text-lg" // Increased padding
            >
              Contact
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
