import React from 'react';
import 'tailwindcss/tailwind.css';
import illustration from '../../images/main_photo.svg';

const Home = () => {
  return (
    <div className="mt-20 md:pt-20 lg:mt-0 flex flex-col md:flex-row w-full h-screen ">
      <div className="illustration-content md:w-2/5 p-4 flex justify-center items-center md:pt-10">
        <img
          src={illustration}
          alt="Iliya Binoski"
          className="max-w-full h-auto md:w-full"
        />
      </div>
      <div className="text_content md:w-3/5 flex flex-col justify-center p-4 md:px-8">
        <h1 className="text-7xl sm:text-8xl md:text-4xl lg:text-5xl xl:text-7xl font-bold font-helvetica-neue selected_link_color">
          Hello!
        </h1>
        <h3 className="text-4xl sm:text-3xl md:text-2xl lg:text-3xl xl:text-5xl mt-4 font-medium leading-tight text-left md:text-left home_info_text font-helvetica-neue md:p-4">
          I’m Iliya,<br />a visual branding designer based in Europe.
        </h3>
      </div>
    </div>
    
  );
};

export default Home;
