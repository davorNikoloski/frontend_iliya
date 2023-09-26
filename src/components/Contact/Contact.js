import React from "react";

import contact_rect from '../../images/shapes/filled/filled-homepage-contact.png';

import rectangle_blue from '../../images/shapes/rectangle-blue.svg';
import circle_red from '../../images/shapes/circle-red.svg';
import triangle_green from '../../images/shapes/triangle-green.svg';
import shape_pink from '../../images/shapes/shape-pink.svg';



const ContactForm = () => {
  return (
    <div className="max-h-screen flex flex-col md:flex-col h-[30vh]">
      {/* Left Column */}
      <div className="w-full md:w-full flex flex-row items-center justify-left  pl-20">
        {/* Icon */}
        <img src={contact_rect} alt="Contact Icon" className="w-5 h-5 mb-4" />

        {/* Header */}
        <h1 className="text-4xl font-bold mb-4 ml-4 font-helvetica-neue">Contact</h1>
      </div>

      {/* Right Column */}
      <div className="w-full md:w-full flex flex-row items-center justify-left pl-20 pt-5">
        {/* Contact Links */}
        <div className="flex flex-row items-center align-center justify-center ">
          {/* LinkedIn */}
          <div className="flex items-center ">
            <img src={rectangle_blue} alt="LinkedIn Icon" className="w-4 h-4 " />
            <a className="font-helvetica-neue pl-3 pr-3 font-bold" href="https://www.linkedin.com/">LinkedIn</a>
          </div>

          {/* Email */}
          <div className="flex items-center space-x-2">
            <img src={circle_red} alt="Email Icon" className="w-4 h-4" />
            <a className="font-helvetica-neue pl-3 pr-3 font-bold" href="mailto:example@example.com">Email</a>
          </div>

          {/* Instagram */}
          <div className="flex items-center space-x-2">
            <img src={triangle_green} alt="Instagram Icon" className="w-5 h-5" />
            <a className="font-helvetica-neue pl-3 pr-3 font-bold" href="https://www.instagram.com/">Instagram</a>
          </div>

          {/* Resume */}
          <div className="flex items-center space-x-2">
            <img src={shape_pink} alt="Resume Icon" className="w-4 h-4" />
            <a className="font-helvetica-neue pl-3 pr-3 font-bold" href="/your-resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
