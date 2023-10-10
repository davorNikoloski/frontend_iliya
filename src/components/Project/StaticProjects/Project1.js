import React from 'react';
import '../../../styles/colors.css';
import rectangle_blue from '../../../images/shapes/rectangle-blue.svg';
import img1 from '../../../images/assets/vc-homepage.png';
import img2 from '../../../images/projects/1.Virtuocity/vc-logo-bg.png';
import img3 from '../../../images/projects/1.Virtuocity/guide-map.png';
import img4 from '../../../images/projects/1.Virtuocity/guide-map-2.png';
import img5 from '../../../images/projects/1.Virtuocity/vc-phones.png';
import img6 from '../../../images/projects/1.Virtuocity/vc-banners.png';
import img7 from '../../../images/projects/1.Virtuocity/light-boxes.png';
import pattern from '../../../images/projects/1.Virtuocity/pattern.png';
import img8 from '../../../images/projects/1.Virtuocity/instagram.png';

import ContactForm from '../../Contact/Contact';


const MyProject = () => {
  return (
    <div className="main-bg mt-20 flex flex-col lg:flex-col items-center justify-center lg:justify-start">
      {/* Description Div */}
      <div className='flex flex-col md:pl-[100px]'>
        <div className="text-center lg:text-left w-full mb-[20px] md:mb-0">
          <div className="flex">
            <div className="flex align-center justify-center h-100">
              <img
                src={rectangle_blue}
                alt="Iliya Binoski"
                className="max-w-full w-10 h-auto md:w-6 w-[35px] pt-3 md:pl-0 pl-4"
              />
            </div>

            <h1 className="text-[40px] md:text-[70px] font-semibold mt-2 font-helvetica-neue pl-5 tracking-[2px]">
              Virtuocity
            </h1>
          </div>

          <h3 className="relative top-[-10px] home_info_text font-thin text-[18px] md:text-[22px] md:ml-[44px] text-left ml-[56px] font-mont-thin tracking-[3px] ">
            REBRANDING
          </h3>
          <p className="w-100  md:pl-[12px] md:pr-[20px] ml-[56px] md:ml-8 text-start font-helvetica-neue-light text-[18px] md:text-[25px] leading-[24px] md:leading-[30px] md:mr-0 mr-4">
            My role encompassed the creation of a vibrant color scheme,
            captivating visual assets, and the design of various promotional
            materials for events. I also played a significant role in crafting
            eye-catching social media graphics and optimizing the digital
            experience on the website.<br /><br />
            Through these endeavors, I helped position Virtuocity as a modern,
            forward-thinking hub for competitive gaming and social interaction.
            My work was instrumental in reshaping Virtuocity’s brand image in
            the world of e-sports.
          </p>
        </div>

        {/* Two Divs in a Row */}
        <div className="lg:flex lg:space-x-6 mt-[10px] md:mt-[24px] flex-col md:flex-row flex w-full pl-[56px] md:pl-12 sm:pl-4 md:mr-0 pr-4" >
          {/* Left Div */}
          <div className="lg:w-1/2">
            <h3 className="text-[20px] md:text-[25px] font-bold font-helvetica-neue">
              My Role
            </h3>
            <ul className="mt-2 font-mont-light text-[16px] md:text-[20px] leading-[25px] md:leading-[34px]">
              <li>Day-to-day designer on various projects</li>
              <li>Developed and maintained visuals for digital and print appliances.</li>
              <li>Creative directions to the photography team</li>
              <li>Collaboration between client and in-house teams</li>
            </ul>
          </div>
          {/* Right Div */}
          <div className="lg:w-1/2 mt-4 lg:mt-0 flex flex-col text-left  md:text-right md:pl-[10%]">
            <h3 className="text-[20px] md:text-[25px] font-bold font-helvetica-neue w-fit">
              Date
            </h3>
            <p className="mt-2 font-mont-light text-[16px] md:text-[20px] leading-[20px] md:leading-[34px] w-fit">
              August 2022 - September 2023
            </p>
          </div>
        </div>
      </div>
      <div></div>
      <div className="mt-10 w-100 flex flex-wrap justify-center align-center flex-col">
        <div className="w-full flex align-center justify-center vc-bg pt-[1%]">
          <img src={img1} alt="Image 1" className="w-[80%] md:w-[100%] h-auto" />
        </div>
        <div className="w-full">
          <img src={img2} alt="Image 2" className="w-full h-auto" />
        </div>
        <div className="w-full pt-5 md:pt-10 pb-5 md:pb-10 pl-[56px] md:pl-[114px] pr-4">
          <h2 className="font-thin text-[18px] md:text-[22px] font-mont-light tracking-[3px] mb-2 md:mb-3 vc-blue">
            THE PROJECT
          </h2>
          <p className="w-100  md:pr-[20px] font-helvetica-neue-light text-[18px] md:text-[25px] leading-[24px] md:leading-[30px]">
            Virtuocity is a prominent and innovative e-sports center located in
            the GCC region. This state-of-the-art facility serves as a hub for
            competitive gaming and related activities. Virtuocity is known for
            its modern and dynamic approach to e-sports, offering a wide range
            of services and experiences for gamers and enthusiasts alike.
            <br /><br />
            Overall, Virtuocity is a thriving e-sports destination that serves
            as a focal point for the gaming community in the GCC, providing an
            immersive and exciting environment for gamers and enthusiasts to
            pursue their passion for competitive gaming.
          </p>
        </div>
        <div className="w-full">
          <div className="flex flex-col md:flex-row w-full">
            <img src={img3} alt="Image 3" className="w-full md:w-1/2 h-auto" />
            <img src={img4} alt="Image 3" className="w-full md:w-1/2 h-auto" />
          </div>
        </div>

        <div className="w-full">
          <img src={img5} alt="Image 3" className="w-full h-auto" />
          <img
            src={pattern}
            alt="Image 3"
            className="w-full md:w-screen h-auto pt-[10px] pb-[10px]"
          />
        </div>
        <div className="w-full bg-gray-800 flex justify-center align-center h-full pt-5 md:pt-10 pb-5 md:pb-10">
          <img src={img6} alt="Image 3" className="w-full md:w-11/12 h-auto" />
        </div>
        {/* Add more divs for additional images */}
      </div>
      <div className="w-full">
        <img src={img7} alt="Image 3" className="w-full md:w-screen h-auto" />
        <img
          src={pattern}
          alt="Image 3"
          className="w-full md:w-screen h-auto pt-[10px]"
        />
      </div>
      <div className="w-full flex justify-center align-center mt-5">
        <img src={img8} alt="Image 3" className="w-9/12 md:w-9/12 h-auto" />
      </div>
      <div id='contactSection' className='w-full pt-[20px]'>
      <ContactForm className />
      </div>
    </div>
  );
};

export default MyProject;
