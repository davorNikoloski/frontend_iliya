import React from 'react';
import ndaIcon from '../../images/nda.png';

function MainPage() {
  return (
    <div className='bg-stone-200 mt-10'>
      <div id="nda_section" className="flex flex-row w-full p-4 md:ml-14 ml-3 space-x-5">
        <div className='icom-s'>
          <img
            src={ndaIcon}
            alt="Alert!"
            className="w-[50px] max-w-[30px]"
          />
        </div>
        <div className='text-a space-y-2'>
          <h2 className='text-[18px] md:text-[25px] leading-[24px] md:leading-[30px] font-helvetica-neue font-bold items-start'>
            Team-Crafted Design: A Collaborative Creation
          </h2>
          <p className='text-[18px] md:text-[25px] leading-[24px] md:leading-[30px] font-helvetica-neue w-[80%] font-extralight text-gray-800'>
            This design project was the result of collaboration with a talented creative design team, where
            we collectively brought our expertise and ideas together to create the final product.
          </p>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
