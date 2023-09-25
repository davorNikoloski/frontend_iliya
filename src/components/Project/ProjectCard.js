import React from 'react';

import 'tailwindcss/tailwind.css';

//SVG IMPORTS
import arrow_blue from '../../images/shapes/arrow-blue.svg';
import rectangle_blue from '../../images/shapes/rectangle-blue.svg';
import test_bk from '../../images/Asset1.png';


const ProjectCard = () => {
  return (
    <div className="w-full h-screen bg-gray-100 p-4 md:p-6 lg:p-8 flex flex-col h-full">
      {/* Top Div (25% height) */}
      <div className="h-1/4 flex flex-col md:flex-row">
        {/* Left Div */}
        <div className="w-1/2 lg:w-1/2 md:w-1/2 md:mr-6 pl-5">
          <div className="flex items-center mb-4">
            {/* SVG icon */}
            <img
              src={rectangle_blue}
              alt="Iliya Binoski"
              className="max-w-full h-auto md:w-5 "
            />
            <h1 className="text-5xl ml-4 font-semibold font-helvetica-neue">Virtuocity</h1>
          </div>
          <h3 className="text-gray-600 text-xl ml-10">REBRANDING</h3>
        </div>
        {/* Right Div */}
        <div className="w-1/2 lg:w-1/2 md:w-1/2 mt-4 md:mt-0 pr-5">
          <p className="text-black font-helvetica-neue text-lg tracking-tight	">
          Giving the brand a whole new perspective. Making it get live by its expectation - A destination, a competitive arena, a social order, and a game changing experience.
          </p>
          <div className="mt-4 flex items-center">
            <a href="/view-project" className="pr-3 text-black text-xl font-bold font-helvetica-neue">
              View Project
            </a>
            <img
              src={arrow_blue}
              alt="Iliya Binoski"
              className="max-w-full h-auto md:w-7 "
            />
          </div>
        </div>
      </div>
      {/* Bottom Div (Remaining height) */}
      <div className=" flex flex-grow h-3/4 justify-center content-center mt-10 mb-10">
        <img
          src={test_bk}
          alt="Iliya Binoski"
          className="max-w-full h-100 md:w-/12 "
        />
      </div>
      
    </div>
  );
};

export default ProjectCard;
