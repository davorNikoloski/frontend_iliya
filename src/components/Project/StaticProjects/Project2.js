import React from 'react';
import '../../../styles/colors.css';
import circle_red from '../../../images/shapes/circle-red.svg';
import img1 from '../../../images/projects/2.Angry_Birds/AngryBirdsandLogo.webp';
import img2 from '../../../images/projects/2.Angry_Birds/AngryBirdsWorld-Park-Illustration.webp';
import img3 from '../../../images/projects/2.Angry_Birds/AngryBirds-Social-Media.webp';
import img4 from '../../../images/projects/2.Angry_Birds/AngryBirds-Special-offer.webp';
import img5 from '../../../images/projects/2.Angry_Birds/AngryBirds-Fan-Review.webp';
import img5_1 from '../../../images/projects/2.Angry_Birds/Angry-Birds-Promotional.webp';
import img6 from '../../../images/projects/2.Angry_Birds/AngryBirds-Instagram-Story.webp';


import ContactForm from '../../Contact/Contact';

const Project2 = () => {
  return (
    <div className="main-bg mt-20 flex flex-col lg:flex-col items-center justify-center lg:justify-start">
      {/* Description Div */}
      <div className='flex flex-col md:pl-[100px]'>
        <div className="text-center lg:text-left w-full">
          <div className="flex">
            <div className="flex align-center justify-center h-100">
              <img
                src={circle_red}
                alt="Iliya Binoski"
                className="max-w-full w-[40px] h-10 md:w-6 mt-[5px] pt-3 md:pl-0 pl-4"
              />
            </div>

            <h1 className="text-[40px] md:text-[70px] font-semibold mt-2 font-helvetica-neue pl-5 tracking-[2px] leading-[45px] md:leading-[70px] text-start">
              Angry Birds<br/> World
            </h1>
          </div>

          <h3 className="relative top-[-5px] home_info_text font-thin text-[18px] md:text-[22px] md:ml-[44px] text-left ml-[56px] font-mont-thin tracking-[3px] ">
            BRANDING
          </h3>
          <p className="w-100 pr-[10px] md:pl-[12px] md:pr-[20px] ml-[56px] md:ml-8 text-start font-helvetica-neue-light text-[18px] md:text-[25px] leading-[24px] md:leading-[30px]">
            In my role as a graphic designer at Angry Birds World, I worked closely with Rovio Entertainment’s iconic brand. My tasks included crafting visuals, adhering to brand guidelines, and creating materials for events and digital media. I contributed to maintaining the brand’s global appeal, ensuring it stayed fresh and engaging in the ever-evolving world of entertainment.
          </p>
        </div>

        {/* Two Divs in a Row */}
        <div className="lg:flex lg:space-x-6 mt-[10px] md:mt-[24px] flex-col md:flex-row flex w-full pl-[56px] md:pl-12 sm:pl-4 md:mr-0 pr-4" >
          {/* Left Div */}
          <div className="lg:w-1/2">
            <h3 className="text-[20px] md:text-[25px] font-bold font-helvetica-neue">
              My Role
            </h3>
            <ul className="mt-2 font-mont-light text-[16px] md:text-[20px] leading-[25px md:leading-[34px]">
              <li>Day-to-day designer</li>
              {/*<li>Developed 200 pages of project brochure</li>*/}
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
              August 2022 - October 2023
            </p>
          </div>
        </div>
      </div>
      <div className="mt-10 w-100 flex flex-wrap justify-center align-center flex-col">
        <div className="w-full flex align-center justify-center  pt-[1%]">
          <img src={img1} alt="Image 1" className="w-[100%] md:w-[100%] h-auto" />
        </div>
        <div className="w-full pt-5 md:pt-10 pb-5 md:pb-10 pl-[56px] md:pl-[114px] pr-4">
          <h2 className="font-thin text-[18px] md:text-[22px] font-mont-light tracking-[3px] mb-2 md:mb-3 ab-red">
            THE PROJECT
          </h2>
          <p className="w-100 pr-[10px] md:pr-[20px] font-helvetica-neue-light text-[18px] md:text-[25px] leading-[24px] md:leading-[30px]">
            Angry Birds World is an immersive entertainment destination that brings the beloved Angry Birds franchise to life.
            Nestled within its vibrant and interactive confines, visitors can step into the colorful world of these iconic birds.
            <br /><br />
            With its dedication to preserving the essence and charm of the Angry Birds brand, Angry Birds World embodies the spirit of fun, creativity, and excitement that has made this franchise a global phenomenon.
            It’s a place where the virtual world of mobile gaming is brought to life, allowing visitors to step into the world of these iconic characters and experience their adventures firsthand.
          </p>
        </div>
        <div className="w-full">
          <div className="flex flex-col md:flex-row w-full">
            <img src={img2} alt="Image 3" className="w-full md:w-full h-auto" />
          </div>
        </div>

        <div className="w-full flex align-center justify-center mt-[30px]">
          <img src={img3} alt="Image 3" className="w-[80%] h-auto" />

        </div>
        <div className="w-full flex justify-center align-center h-full mt-[20px] md:pt-10 pb-5 md:pb-[40px]">
          <img src={img4} alt="Image 3" className="w-full md:w-[70%] h-auto" />
        </div>
        {/* Add more divs for additional images */}
      </div>
      <div className="w-full flex justify-center flex-col align-center items-center">
        <img src={img5} alt="Image 3" className="w-[90%] md:w-[90%] h-auto" />
        <img src={img5_1} alt="Image 3" className="w-[90%] md:w-[70%] h-auto mt-[40px]" />
      </div>
      <div className="w-full flex justify-center align-center mt-5">
        <img src={img6} alt="Image 3" className="w-9/12 md:w-9/12 h-auto" />
      </div>
      
      <div id='contactSection'className='w-full pt-[20px]'>
      <ContactForm className />
      </div>
      

    </div>
  );
};

export default Project2;
