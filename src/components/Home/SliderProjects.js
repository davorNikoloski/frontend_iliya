import React from 'react';
import 'tailwindcss/tailwind.css';
import PropTypes from 'prop-types';


const SliderProjects = ({arrowN, arrowP, linkN, linkP}) => {
  return (
    <div className='flex justify-center align-center mt-[25px]'>
        <div className='flex-1 flex md:mx-[12%] mx-[4%] w-full items-center'>
            <img src={arrowP} alt="Shape 1" className="max-w-full h-auto md:w-[23px] w-[20px] md:mt-0 rotate-180" />
            <a href={linkP} className="px-3 text-black md:text-[25px] text-[16px] w-full text-wrap flex-wrap font-bold font-helvetica-neue">
              Previous Project
            </a>

        </div>
        <div className='md:flex-1 flex justify-end md:mx-[12%] mx-[4%] align-center items-center'>
            <a href={linkN} className="px-3 text-black md:text-[25px] text-[16px] flex-wrap text-wrap md:w-auto font-bold font-helvetica-neue">
              Next Project
            </a>
            <img src={arrowN} alt="Shape 1" className="max-w-full h-auto md:w-[23px] w-[20px] md:mt-0 h-auto" />
            
        </div>
    </div>
  );
};

SliderProjects.propTypes = {
  arrowN: PropTypes.string.isRequired,
  arrowP: PropTypes.string.isRequired,
  linkN: PropTypes.string.isRequired,
  linkP: PropTypes.string.isRequired,

};

export default SliderProjects;
