import React from 'react';
import PropTypes from 'prop-types';
import 'tailwindcss/tailwind.css';

import '../../styles/fonts.css';


const ProjectCard = ({ title, subtitle, description, shape1, shape2, asset, link }) => {
  return (
    <div className="w-full p-4 md:p-6 lg:p-8 flex flex-col">
      
      <div className="md:flex md:flex-row">
        <div className="w-full md:w-1/2 md:mr-6 pl-5">
          <div className="flex md:items-center items-start md:mb-0 md-4">
            <img src={shape1} alt="Shape 1" className="max-w-full h-auto md:w-[23px] w-[20px] md:mt-0 mt-[14px] " />
            <h1 className="text-5xl ml-[15px] font-semibold font-helvetica-neue">{title}</h1>
          </div>
          <h3 className="text-gray-700 text-xl font-mont-lighter ml-[40px]">{subtitle}</h3>
        </div>
        <div className="w-full md:w-1/2 mt-4 md:mt-0 md:pr-5 md:pl-0 pl-[16%]">
          <p className="text-black font-helvetica-neue text-[23px] md:p-0 ">
            {description}
          </p>
          <div className="mt-4 flex items-center w-full">
            <a href={link} className="pr-3 text-black text-[25px] font-bold font-helvetica-neue">
              View Project
            </a>
            <a href={link}><img src={shape2} alt="Shape 2" className="max-w-full h-auto md:w-7 w-6" /></a>
          </div>
        </div>
      </div>
      <div className="flex flex-grow justify-center content-center mt-10 mb-10">
        <img
          src={asset}
          alt="Project Asset"
          className="w-full md:w-auto" // Set full width for mobile, auto width for desktop
        />
      </div>

    </div>

  );
};

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  shape1: PropTypes.string.isRequired,
  shape2: PropTypes.string.isRequired,
  asset: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default ProjectCard;
