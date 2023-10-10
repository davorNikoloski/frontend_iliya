import React from 'react';
import 'tailwindcss/tailwind.css';
import illustration from '../../images/main_photo.svg';



const Home = () => {
  return (
    <div className="mt-20 md:pt-20 lg:mt-0 flex flex-col md:flex-row w-full md:h-screen ">
      <div className="illustration-content md:w-2/5 p-4 flex justify-center items-center md:pt-10 md:relative md:left-[30px]">
        <img
          src={illustration}
          alt="Iliya Binoski"
          className="max-w-full h-auto md:w-full"
        />
      </div>
      <div className="text_content md:w-3/5 flex flex-col justify-center align-center p-10 md:p-4 md:mt-[50px] pt-[0px] md:px-8 ">
        <h1 className="text-[60px] w-fit md:text-[90px] font-bold font-helvetica-neue selected_link_color md:relative md:top-[15px]">
          Hello!
        </h1>
        <h3 className="text-[40px] md:text-[60px] font-bold leading-tight text-left md:text-left home_info_text font-helvetica-neue md:p-4 md:pt-0 pl-0 md:pl-0">
          I’m Iliya, a visual graphic designer specialized in branding, based in Europe.
        </h3>
      </div>
      
    </div>
    
  );
};

export default Home;
