import React from "react";

import contact_rect from '../../images/shapes/filled/about-filled-pink.png';

import rectangle_blue from '../../images/shapes/rectangle-blue.svg';
import circle_red from '../../images/shapes/circle-red.svg';
import triangle_green from '../../images/shapes/triangle-green.svg';
//import shape_pink from '../../images/shapes/shape-pink.svg';

import '../../styles/colors.css'; // Import your CSS file


const ContactAbtForm = () => {
  return (
    <div className=" main-bg py-[2.5%] max-h-screen flex flex-col md:flex-col my-[30px]">
      {/* Left Column */}
      <div className="flex flex-row  justify-left  ml-[36px] md:ml-[52px]">
        {/* Icon */}
        <img src={contact_rect} alt="Contact Icon" className="w-[26px] h-[26px] mb-4 md:mt-[12px] mt-[8px]" />

        {/* Header */}
        <h1 className="md:text-6xl text-4xl font-bold mb-4 ml-4 md:mr-[20%] contact_main_text font-helvetica-neue">Let’s create something crazy together, or just grab a coffee!</h1>
      </div>

      {/* Right Column */}
      <div className="w-auto md:w-auto flex flex-row items-center justify-left ml-[45px] md:ml-[84px] pt-2">
        {/* Contact Links */}
        <div className="flex flex-col md:flex-col items-left md:items:center align-center justify-center h-full">
          {/* LinkedIn */}
          <div className="flex md:items-center md:my-2 my-[10px]">
            <img src={circle_red} alt="LinkedIn Icon" className="w-[21px] h-[21px] md:mx-[16px] md:mt-0 mt-[10px]" />
            <a className="font-mont-thin font-bold tracking-[0.76px] text-[23px] md:pl-0 pl-[15px]" >My email address: <span><a href="mailto:contact@iliyabinoski.com" className="font-mont underline">contact@iliyabinoski.com</a> | </span><a href="mailto:iliya.binoski@gmail.com" className="font-mont underline">iliya.binoski@gmail.com</a></a>
          </div>

          {/* Email */}
          <div className="flex md:items-center md:my-2 my-[10px]">
            <img src={rectangle_blue} alt="Email Icon" className="w-[20px] h-[20px] md:mx-[16px] md:mt-0 mt-[10px]" />
            <a className="font-mont-thin font-bold tracking-[0.76px] text-[23px] md:pl-0 pl-[15px]" >LinkedIn profile: <span><a href="https://www.linkedin.com/in/ilijabinoski/" className="font-mont underline" >@ilija.binoski</a></span></a>
          </div>

          {/* Instagram */}
          <div className="flex md:items-center md:my-2 my-[10px]">
            <img src={triangle_green} alt="Instagram Icon" className="w-[22px] h-[22px] md:mx-[16px] md:mt-0 mt-[5px]" />
            <a className="font-mont-thin font-bold tracking-[0.2px] text-[23px] md:pl-0 pl-[15px]" >Behance: <span><a href="https://www.behance.net/binoskiilija" className="font-mont underline">@ilija.binoski</a></span></a>
          </div>

          {/* Resume */}
          {/*<div className="flex md:items-center md:my-2 my-[10px]">
            <img src={shape_pink} alt="Resume Icon" className="w-[20px] h-[20px] md:mx-[16px] md:mt-0 mt-[8px]" />
            <a className="font-mont-thin tracking-[0.2px] text-[23px] md:pl-0 pl-[15px]">Get my resume: <span><a href="/Resume" target="_blank" rel="noopener noreferrer" className="font-mont underline">Ilija Binoski 2023</a></span></a>
          </div>*/}
        </div>
      </div>
    </div>
  );
};

export default ContactAbtForm;
