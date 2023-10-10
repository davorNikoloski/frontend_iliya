import React, { useState, useEffect } from 'react';
import { IoMenu, IoClose } from 'react-icons/io5';
import 'tailwindcss/tailwind.css';
import '../../styles/fonts.css';
import '../../styles/colors.css';
import logo from '../../images/ib_logo.svg';
import { Link } from 'react-scroll';
import { useLocation, Link as RouterLink } from 'react-router-dom';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [selectedLink, setSelectedLink] = useState('Home');
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [hideNavbar, setHideNavbar] = useState(false);

  const location = useLocation();

  const toggleMenu = () => {
    setShowMenu(!showMenu);

    // Toggle the body class to disable scrolling when the menu is open
    if (!showMenu) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  };

  const closeMenu = () => {
    setShowMenu(false);
    // Remove the body class to enable scrolling when the menu is closed
    document.body.classList.remove('overflow-hidden');
  };

  // Function to update selected link based on scroll position
  const updateSelectedLink = (scrollPosition) => {
    const homeSection = document.getElementById('homeSection');
    const workSection = document.getElementById('workSection');
    const pastPSection = document.getElementById('pastPSection');
    const contactSection = document.getElementById('contactSection');

    if (location.pathname === '/About' || location.pathname === '/') {
      if (location.pathname === '/About') {
        setSelectedLink('About');
      } else if (scrollPosition >= homeSection.offsetTop && scrollPosition < workSection.offsetTop) {
        setSelectedLink('Home');
      } else if (scrollPosition >= workSection.offsetTop && scrollPosition < pastPSection.offsetTop) {
        setSelectedLink('Work');
      } else if (scrollPosition >= pastPSection.offsetTop && scrollPosition < contactSection.offsetTop) {
        setSelectedLink('Past Projects');
      } else if (scrollPosition >= contactSection.offsetTop) {
        setSelectedLink('Contact');
      }
    } else {
      // Set "Contact" as the selected link when on other pages and not in any specific section
      setSelectedLink('Contact');
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const isScrollingDown = scrollPosition > prevScrollY;

      if (scrollPosition > 0) {
        setHideNavbar(isScrollingDown);
      } else {
        setHideNavbar(false);
      }

      setPrevScrollY(scrollPosition);

      // Call the function to update the selected link based on scroll position
      updateSelectedLink(scrollPosition);
    };

    // Initial call to update selected link based on the current scroll position
    updateSelectedLink(window.scrollY);

    if (location.pathname === '/' || location.pathname === '/About') {
      window.addEventListener('scroll', handleScroll);
    } else {
      // Remove the scroll event listener on other pages
      window.removeEventListener('scroll', handleScroll);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollY, location.pathname]);

    const handleWorkClick = () => {
      if (location.pathname !== '/') {
        window.location.href = '/'; // Navigate to the home page
      }

      setTimeout(() => {
        const workSection = document.getElementById('workSection');
        if (workSection) {
          workSection.scrollIntoView({ behavior: 'smooth' });
        }
        // Close the menu when a link is clicked
        closeMenu();
      }, 100);
    };

    const linkClasses = (linkName) => `font-helvetica-neue text-[30px] ${
      selectedLink === linkName
        ? 'selected_link_color cursor-pointer'
        : 'standby_link_color hover:text-black cursor-pointer'
    }`;

    useEffect(() => {
      // Scroll to the top of the page when navigating between pages
      window.scrollTo(0, 0);
    }, [location.pathname]);

    return (
      <nav className={`fixed main-bg top-0 left-0 w-screen md:h-20 h-20  flex items-center justify-between p-8 md:pt-[40px] z-50 transition-all duration-300 ${hideNavbar ? '-translate-y-20' : 'translate-y-0'}`}>
        <div className="main-bg md:ml-4 ml-0 flex">
          <RouterLink to="/"> {/* Use RouterLink to navigate to the MainPage ("/") */}
            <img src={logo} alt="Image 1" className="md:w-[300px] w-[150px] h-10" />
          </RouterLink>
        </div>
        <div className={`Links mr-[50px] hidden md:flex space-x-10 ${showMenu ? 'hidden' : ''}`}>
          <RouterLink to="/"> {/* Use RouterLink to navigate to the MainPage ("/") */}
            <a className={linkClasses('Home')} onClick={closeMenu}>
              Home
            </a>
          </RouterLink>
          <Link to="workSection" spy={true} smooth={true} duration={500} offset={-70} className={linkClasses('Work')} onClick={handleWorkClick}>
            Work
          </Link>
          <RouterLink to="/About">
            <a className={linkClasses('About')} onClick={closeMenu}>
              About
            </a>
          </RouterLink>
          <Link to="contactSection" spy={true} smooth={true} duration={500} offset={-70} className={linkClasses('Contact')} onClick={closeMenu}>
            Contact
          </Link>
        </div>
        <div className="md:hidden">
          {showMenu ? (
            <IoClose onClick={toggleMenu} className="md:text-2xl text-4xl cursor-pointer" />
          ) : (
            <IoMenu onClick={toggleMenu} className="md:text-2xl text-[30px] cursor-pointer bg-blue" />
          )}
        </div>
        {showMenu && (
          <div className="fixed top-0 left-0 w-screen h-screen main-bg bg-opacity-80 flex items-center justify-center">
            <div className="absolute top-0 left-0 w-screen h-screen">
              <div className="main-bg p-8 pt-5 rounded-lg">
                <div className='flex justify-between align-between'>
                  <div className="">
                    <RouterLink to="/"> {/* Use RouterLink to navigate to the MainPage ("/") */}
                      <img src={logo} alt="Image 1" className="md:w-[300px] w-[150px] h-10" />
                    </RouterLink>
                  </div>
                  <div className="flex justify-center align-center items-center">
                    <IoClose onClick={toggleMenu} className="md:text-2xl text-4xl cursor-pointer" />
                  </div>
                </div>
                <div className="mt-8">
                  <RouterLink to="/"> {/* Use RouterLink to navigate to the MainPage ("/") */}
                    <a className={`block text-[30px] font-helvetica-neue font-bold ${linkClasses('Home')} mt-4`} onClick={closeMenu}>
                      Home
                    </a>
                  </RouterLink>
                  <Link
                    to="workSection"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    className={`block text-[30px] font-helvetica-neue font-bold ${linkClasses('Work')} mt-4`}
                    onClick={() => {
                      handleWorkClick();
                      closeMenu();
                    }}
                  >
                    Work
                  </Link>
                  <RouterLink to="/About">
                    <a className={`block text-[30px] font-helvetica-neue font-bold ${linkClasses('About')} mt-4`} onClick={closeMenu}>
                      About
                    </a>
                  </RouterLink>
                  <Link
                    to="contactSection"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    className={`block text-[30px] font-helvetica-neue font-bold ${linkClasses('Contact')} mt-4`}
                    onClick={closeMenu}
                  >
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    );
  };

export default Navbar;
