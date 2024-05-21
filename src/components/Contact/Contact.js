import React from "react";

import contact_rect from '../../images/shapes/filled/filled-homepage-contact.png';

import rectangle_blue from '../../images/shapes/rectangle-blue.svg';
import circle_red from '../../images/shapes/circle-red.svg';
import triangle_green from '../../images/shapes/triangle-green.svg';
//import shape_pink from '../../images/shapes/shape-pink.svg';

import '../../styles/colors.css'; // Import your CSS file


const ContactForm = () => {
  return (
    <div className=" main-bg py-[2.5%] max-h-screen flex flex-col md:flex-col h-[25vh]">
      {/* Left Column */}
      <div className="flex flex-row items-center justify-left ml-[36px] md:ml-[52px]">
        {/* Icon */}
        <img src={contact_rect} alt="Contact Icon" className="w-[26px] h-[26px] mb-4" />

        {/* Header */}
        <h1 className="md:text-6xl text-4xl font-bold mb-4 ml-4 contact_main_text font-helvetica-neue">Contact</h1>
      </div>

      {/* Right Column */}
      <div className="w-auto md:w-auto flex flex-row items-center justify-left ml-[45px] md:ml-[45px] pt-2">
        {/* Contact Links */}
        <div className="flex flex-col md:flex-row items-left md:items:center align-center justify-center h-full">
          {/* LinkedIn */}
          <div className="flex items-center ">
            <img src={rectangle_blue} alt="LinkedIn Icon" className="w-[20px] h-[20px] md:mx-[16px]" />
            <a className="font-helvetica-neue font-bold tracking-[0.76px] text-[23px] md:pl-0 pl-[15px]" href="https://www.linkedin.com/in/ilijabinoski/">LinkedIn</a>
          </div>

          {/* Email */}
          <div className="flex items-center">
            <img src={circle_red} alt="Email Icon" className="w-[20px] h-[20px] md:mx-[16px]" />
            <a className="font-helvetica-neue font-bold tracking-[0.76px] text-[23px] md:pl-0 pl-[15px]" href="mailto:contact@iliyabinoski.com">Email</a>
          </div>

          {/* Instagram */}
          <div className="flex items-center">
            <img src={triangle_green} alt="Instagram Icon" className="w-[22px] h-[22px] md:mx-[16px]" />
            <a className="font-helvetica-neue font-bold tracking-[0.76px] text-[23px] md:pl-0 pl-[15px] " href="https://www.behance.net/binoskiilija">Behance</a>
          </div>

          {/* Resume */}
          {/*<div className="flex items-center">
            <img src={shape_pink} alt="Resume Icon" className="w-[20px] h-[20px] md:mx-[16px]" />
            <a className="font-helvetica-neue font-bold tracking-[0.76px] text-[23px] md:pl-0 pl-[15px]" href="/Resume" target="_blank" rel="noopener noreferrer">Resume</a>
          </div>*/}
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
