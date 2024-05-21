import React from 'react';

import '../../styles/colors.css'; // Import your CSS file


import rectangle_blue from '../../images/shapes/rectangle-blue.svg';
import img1 from '../../images/assets/vc-homepage.png';
import img2 from '../../images/projects/Virtuocity/vc-logo-bg.png';
import img3 from '../../images/projects/Virtuocity/guide-map.png';
import img4 from '../../images/projects/Virtuocity/guide-map-2.png';
import img5 from '../../images/projects/Virtuocity/vc-phones.png';
import img6 from '../../images/projects/Virtuocity/vc-banners.png';
import img7 from '../../images/projects/Virtuocity/light-boxes.png';
import pattern from '../../images/projects/Virtuocity/pattern.png';
import img8 from '../../images/projects/Virtuocity/instagram.png';

const MyProject = () => {
  return (

    <div className="main-bg mt-20 flex flex-col lg:flex-col items-center justify-center lg:justify-start lg:space-x-6 pl-0">
      
      {/* Description Div */}
      <div className='flex flex-col pl-20'>
        <div className="text-center lg:text-left w-full">
            <div className='flex'>
            <img
                src={rectangle_blue}
                alt="Iliya Binoski"
                className="max-w-full h-auto md:w-5 "
                />
            <h1 className="text-6xl font-semibold mt-2 font-helvetica-neue pl-5">Virtuocity</h1>
            </div>
            
            <h3 className="text-gray-500 text-xl ml-12 font-helvetica-neue">REBRANDING</h3>
            <p className="mt-4 w-4/5 ml-12 font-helvetica-neue">
            Giving the brand a whole new perspective. Making it get live by its expectation - A destination, a competitive arena, a social order, and a game changing experience. Lorem ipsum donem ponem konem slonem kronem. a competitive arena, a social order, and a game changing experience. Lorem ipsum donem ponem konem slonem kronem.
            </p>
        </div>

      {/* Two Divs in a Row */}
      <div className="lg:flex lg:space-x-6 mt-4 flex w-full pl-12 ">
        {/* Left Div */}
        <div className="lg:w-1/2 ">
          <h3 className="text-lg font-semibold font-helvetica-neue">My Role</h3>
          <ul className="mt-2 font-helvetica-neue">
            <li>Day-to-day designer on various projects</li>
            <li>Developed and maintained visuals for digital and print appliances.</li>
            <li>Creative directions to the photography team</li>
            <li>Collaboration between client and in-house teams</li>
          </ul>
        </div>
        {/* Right Div */}
        <div className="lg:w-1/2 mt-4 lg:mt-0">
            <h3 className="text-lg font-semibold">Date</h3>
          <p>August 2022 - September 2023</p>
        </div>
      </div>
    </div>
      
    <div className="mt-10 flex flex-wrap justify-center align-center flex-col">
        <div className="w-full ">
            <img src={img1} alt="Image 1" className="w-full h-auto" />
        </div>
        <div className="w-full ">
            <img src={img2} alt="Image 2" className="w-full h-auto " />
        </div>
        <div className="w-full p-2 px-20 pt-10">
            <h2 className=" font-helvetica-neue text-xl mb-5">
            THE PROJECT
            </h2>
            <p className=" font-helvetica-neue text-lg">
            Virtuocity is the middle east’s first dedicated digital gaming capital that merges the virtual world with the real world in a thrilling, competitive environment.<br/> <br/>Equipped with full motion racing simulators, escape rooms and a multipurpose eSports arena, the park offers an immersive digital experience for teens and adults. Virtuocity’s range of interactive attractions pit player against player and team against team, bringing cutting-edge technology and innovation to the fore front.
            </p>
        </div>
        <div className="w-full">
            <div className='flex flex-row w-full'>
                <img src={img3} alt="Image 3" className="w-1/2 h-auto" />
                <img src={img4} alt="Image 3" className="w-1/2 h-auto" />
            </div>
        </div>

        <div className="w-full">
            <img src={img5} alt="Image 3" className="w-full h-auto" />
            <img src={pattern} alt="Image 3" className="w-screen h-auto" />

        </div>
        <div className="w-full bg-gray-800 flex justify-center align-center h-full pt-10 pb-10">
            
            <img src={img6} alt="Image 3" className="w-11/12 h-auto" />
        </div>
        {/* Add more divs for additional images */}
        </div>
        <div className="w-100">
            <img src={img7} alt="Image 3" className="w-screen h-auto" />
            <img src={pattern} alt="Image 3" className="w-screen h-auto" />
        </div>
        <div className="w-100 flex justify-center align-center mt-5">
            <img src={img8} alt="Image 3" className="w-10/12 h-auto" />
        </div>
    </div>
  );
};

export default MyProject;
