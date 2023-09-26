import React from 'react';

import 'tailwindcss/tailwind.css';

//SVG IMPORTS


const ProjectCard = ({title, subtitle, description, shape1, shape2, asset}) => {
  return (
    <div className="w-full h-screen bg-gray-100 p-4 md:p-6 lg:p-8 flex flex-col h-full">
      {/* Top Div (25% height) */}
      <div className="h-1/4 flex flex-col md:flex-row">
        {/* Left Div */}
        <div className="w-1/2 lg:w-1/2 md:w-1/2 md:mr-6 pl-5">
          <div className="flex items-center mb-4">
            {/* SVG icon */}
            <img
              src={shape1}
              alt="Iliya Binoski"
              className="max-w-full h-auto md:w-5 "
            />
            <h1 className="text-5xl ml-4 font-semibold font-helvetica-neue">{title}</h1>
          </div>
          <h3 className="text-gray-600 text-xl ml-10">{subtitle}</h3>
        </div>
        {/* Right Div */}
        <div className="w-1/2 lg:w-1/2 md:w-1/2 mt-4 md:mt-0 pr-5">
          <p className="text-black font-helvetica-neue text-lg tracking-tight	">
          {description}
          </p>
          <div className="mt-4 flex items-center">
            <a href="/view-project" className="pr-3 text-black text-xl font-bold font-helvetica-neue">
              View Project
            </a>
            <img
              src={shape2}
              alt="Iliya Binoski"
              className="max-w-full h-auto md:w-7 "
            />
          </div>
        </div>
      </div>
      {/* Bottom Div (Remaining height) */}
      <div className=" flex flex-grow h-3/4 justify-center content-center mt-10 mb-10">
        <img
          src={asset}
          alt="Iliya Binoski"
          className="max-w-full h-100 md:w-/12 "
        />
      </div>
      
    </div>
  );
  
};

export default ProjectCard;
