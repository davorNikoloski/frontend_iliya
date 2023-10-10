import React from 'react';
import '../../../styles/colors.css';
import triagnle_green from '../../../images/shapes/triangle-green.svg';

import img1 from '../../../images/assets/sd-homepage.png';
import img2 from '../../../images/projects/3.SnowDunes/SnowDunes-logos.png';
import img3 from '../../../images/projects/3.SnowDunes/SnowDunes-ilustration.webp';
import img4 from '../../../images/projects/3.SnowDunes/SnowDunes-guide-map-brochure.webp';
import img5 from '../../../images/projects/3.SnowDunes/SnowDunes-vehicle-branding.webp';
import img6 from '../../../images/projects/3.SnowDunes/SnowDunes-Social-media.webp';
import img7 from '../../../images/projects/3.SnowDunes/SnowDunes-social-media-2.webp';

import ContactForm from '../../Contact/Contact';


const Project3 = () => {
  return (
    <div className="main-bg mt-20 flex flex-col lg:flex-col items-center justify-center lg:justify-start">
      {/* Description Div */}
      <div className='flex flex-col md:pl-[100px]'>
        <div className="text-center lg:text-left w-full">
          <div className="flex">
            <div className="flex align-center justify-center h-100">
              <img
                src={triagnle_green}
                alt="Iliya Binoski"
                className="max-w-full w-[40px] h-10 md:w-6 mt-[10px] pt-3 md:pl-0 pl-4"
              />
            </div>

            <h1 className="text-[40px] md:text-[70px] font-semibold mt-2 font-helvetica-neue pl-5 tracking-[2px]">
              Snow Dunes
            </h1>
          </div>

          <h3 className="relative top-[-5px] home_info_text font-thin text-[18px] md:text-[22px] md:ml-[44px] text-left ml-[56px] font-mont-thin tracking-[3px] ">
            REBRANDING
          </h3>
          <p className="w-100 pr-[10px] md:pl-[12px] md:pr-[20px] ml-[56px] md:ml-8 text-start font-helvetica-neue-light text-[18px] md:text-[25px] leading-[24px] md:leading-[30px]">
          My role was pivotal in the rebranding process. I led the digital transformation, concentrating on social media assets. This involved redesigning the visual identity, creating captivating content, and contributing to strategic discussions. The outcome was a contemporary brand image, engaging winter enthusiasts, and elevating “Snow Dunes” as a top indoor snow center.
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
              August 2022 - October 2023
            </p>
          </div>
        </div>
      </div>
      <div></div>
      <div className="mt-10 w-100 flex flex-wrap justify-center align-center flex-col">
        <div className="w-full flex align-center justify-center vc-bg pt-[1%]">
          <img src={img1} alt="Image 1" className="w-[80%] md:w-[80%] h-auto" />
        </div>
        <div className="w-full flex align-center justify-center pt-[2%] pb-[2%]">
          <img src={img2} alt="Image 2" className="w-[85%] h-auto" />
        </div>
        <div className="w-full pt-5 md:pt-10 pb-5 md:pb-10 pl-[56px] md:pl-[114px] pr-4">
          <h2 className="font-thin text-[18px] md:text-[22px] font-mont-light tracking-[3px] mb-2 md:mb-3 sd-p">
            THE PROJECT
          </h2>
          <p className="w-100 pr-[10px] md:pr-[20px] font-helvetica-neue-light text-[18px] md:text-[25px] leading-[24px] md:leading-[30px]">
            Snow Dunes is a premier indoor snow center, offering an exhilarating winter experience in a controlled and climate-controlled environment.
            Visitors can immerse themselves in a snow-covered wonderland, complete with thrilling snow sports and activities.
            <br /><br />
            Snow Dunes provides an immersive and exciting escape into the world of winter sports and snowy adventures, all within the confines of an indoor facility, 
            offering a unique and memorable experience for visitors of all ages.
          </p>
        </div>
        <div className="w-full">
        <div className="w-full flex align-center justify-center">
            <img src={img3} alt="Image 3" className="w-full md:w-full h-auto" />
            
          </div>
        </div>
        <div className="w-full">
        <img src={img4} alt="Image 3" className="w-full md:w-full h-auto" />
          
        </div>

        <div className="w-full flex align-center justify-center relative md:top-[-40px] top-[-14px]">
          <img src={img5} alt="Image 3" className="w-[95%] h-auto" />

        </div>
        <div className="w-full flex justify-center align-center h-full pt-5 md:pt-0 pb-5 md:pb-3">
          <img src={img6} alt="Image 3" className="w-full md:w-11/12 h-auto" />
        </div>
        {/* Add more divs for additional images */}
      </div>
      <div className="w-full flex align-center justify-center relative">
        <img src={img7} alt="Image 3" className="w-full md:w-[90%] h-auto" />

      </div>
      <hr className="w-[90%] h-[1px] mx-auto my-1 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-400" />
      <div id='contactSection' className='w-full pt-[20px]'>
        <ContactForm className />
      </div>
    </div>
  );
};

export default Project3;
