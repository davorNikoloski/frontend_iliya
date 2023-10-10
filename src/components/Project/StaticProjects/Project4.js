import React from 'react';
import '../../../styles/colors.css';

import shape_blue from '../../../images/shapes/shape-pink.svg';

import img1 from '../../../images/assets/sweden-homepage.png';
import img2 from '../../../images/projects/4.Embassy-of-Sweden/Embassy-of-sweden-logo.webp';
import img3 from '../../../images/projects/4.Embassy-of-Sweden/EmbassyOfSweden-branding.webp';
import img4 from '../../../images/projects/4.Embassy-of-Sweden/EmbassyOfSweden-Booklet.webp';
import img5 from '../../../images/projects/4.Embassy-of-Sweden/EmbassyOfSweden-invitation.webp';

import ContactForm from '../../Contact/Contact';


const Project4 = () => {
  return (
    <div className="main-bg mt-20 flex flex-col lg:flex-col items-center justify-center lg:justify-start">
      {/* Description Div */}
      <div className='flex flex-col md:pl-[100px]'>
        <div className="text-center lg:text-left w-full">
          <div className="flex">
            <div className="flex align-center justify-center h-100">
              <img
                src={shape_blue}
                alt="Iliya Binoski"
                className="max-w-full w-[40px] h-10 md:w-6 mt-[10px] pt-3 md:pl-0 pl-4"
              />
            </div>

            <h1 className="text-[40px] md:text-[70px] font-semibold mt-2 font-helvetica-neue pl-5 tracking-[2px] leading-[45px] md:leading-[70px] text-start">
              Embassy of<br/> Sweden
            </h1>
          </div>

          <h3 className="relative top-[-3px] home_info_text font-thin text-[18px] md:text-[22px] md:ml-[44px] text-left ml-[56px] font-mont-thin tracking-[3px] ">
            EVENT BRANDING
          </h3>
          <p className="w-100 pr-[10px] md:pl-[12px] md:pr-[20px] ml-[56px] md:ml-8 text-start font-helvetica-neue-light text-[18px] md:text-[25px] leading-[24px] md:leading-[30px]">
          As a graphic designer, my role encompassed crafting event branding for the Embassy of Sweden in Doha, emphasizing energy and industrial processes. I meticulously developed brochures and event materials, maintaining a professional and cohesive visual identity that reflected the embassy’s high-profile events and esteemed reputation.
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
              <li>Day-to-day designer</li>
              <li>Developed 200 pages of project brochure</li>
              <li>Created visuals for various appliances</li>
              <li>Collaboration between client and in-house teams</li>
            </ul>
          </div>
          {/* Right Div */}
          <div className="lg:w-1/2 mt-4 lg:mt-0 flex flex-col text-left  md:text-right md:pl-[10%]">
            <h3 className="text-[20px] md:text-[25px] font-bold font-helvetica-neue w-fit">
              Date
            </h3>
            <p className="mt-2 font-mont-light text-[16px] md:text-[20px] leading-[20px] md:leading-[34px] w-fit">
              April 2023 - June 2023
            </p>
          </div>
        </div>
      </div>
      <div></div>
      <div className="mt-10 w-100 flex flex-wrap justify-center align-center flex-col">
        <div className="w-full flex align-center justify-center vc-bg pt-[4%] pb-[5%]">
          <img src={img1} alt="Image 1" className="w-[80%] md:w-[80%] h-auto" />
        </div>
        <div className="w-full">
          <img src={img2} alt="Image 2" className="w-full h-auto" />
        </div>
        <div className="w-full pt-5 md:pt-10 pb-5 md:pb-10 pl-[56px] md:pl-[114px] pr-4">
          <h2 className="font-thin text-[18px] md:text-[22px] font-mont-light tracking-[3px] mb-2 md:mb-3 es-p">
            THE PROJECT
          </h2>
          <p className="w-100 pr-[10px] md:pr-[20px] font-helvetica-neue-light text-[18px] md:text-[25px] leading-[24px] md:leading-[30px]">
          The Embassy of Sweden in Doha is a diplomatic mission representing Sweden’s interests in Qatar. In collaboration with the embassy, a notable project on “Energy & Industrial Processes” was undertaken.
            <br /><br />
            This initiative likely involved promoting Swedish expertise in energy and industrial sectors, fostering international partnerships, and showcasing Sweden’s innovative solutions in these fields.
          </p>
        </div>

        <div className="w-full">
          <img src={img3} alt="Image 2" className="w-full h-auto" />
        </div>
        <div className="w-full">
          <img src={img4} alt="Image 2" className="w-full h-auto" />
        </div>

        <div className="w-full flex justify-center">
          <img src={img5} alt="Image 3" className="w-[60%] h-auto" />

        </div>
      </div>
      <hr className="w-[90%] h-[1px] mx-auto my-1 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-400" />
      <div id='contactSection' className='w-full pt-[20px]'>
        <ContactForm className />
      </div>
    </div>
  );
};

export default Project4;
