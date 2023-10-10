import React from "react";

import contact_rect from '../../images/shapes/filled/About-filled-blue.png'

import logos from '../../images/about_logos/9-logos.png'

import '../../styles/colors.css'; // Import your CSS file

import ContactAbtForm from '../../components/Contact/ContactAbt';


const About = () => {
  return (
  <div className=" main-bg">

    
    <div className=" main-bg mt-20  h-full md:h-auto w-full flex md:flex-row flex-col">
      {/* Section 1 */}
      <div className="md:w-9/12 w-full main-bg p-8 ">
        {/* Up Div */}
        <div className="flex flex-col items-center justify-center md:pl-12 pl-0">
            <div className="flex align-center w-full">
            <img
                src={contact_rect} // Replace with your icon image URL
                alt="Icon"
                className="w-4 h-4 mt-3"
            />
          <h1 className="text-5xl font-bold font-helvetica-neue pl-6">I’m Iliya, a visual graphic designer specialized in branding, based in Europe.</h1></div>
          
          <p className="mt-4 text-gray-600 pl-10 font-helvetica-neue-light text-[14px] md:text-[20px] leading-[20px] md:leading-[30px]">
            A creative thinker and senior graphic designer specializing in crafting compelling branding identities. With extensive experience, I’ve collaborated on diverse projects, such as branding for prominent e-sports centers, entertainment parks, and nternational brands like Angry Birds.<br/><br/>
            My passion lies in creating captivating marketing and promotional materials that resonate with audiences. I bring a unique blend of creativity and expertise to every project, ensuring a visually stunning and cohesive brand image.
          </p>
        </div>
        {/* Down Div */}
        <div className="flex justify-center items-center mt-8 md:pl-6 w-full">
          {/* Logos */}
            <img
                src={logos}
                alt="Iliya Binoski"
                className="max-w-full h-auto md:w-10/12 w-screen"
            />
        </div>

      </div>

      {/* Section 2 */}
      <div className="md:w-3/12 w-full main-bg md:pl-0 p-8 pt-[32px] flex flex-col align-left justify-between pl-[72px]">
        {/* Div 1 */}
        {/*<div className="mb-6">
          <h2 className="text-2xl font-bold">What I like</h2>
          <ul className="list-none  mt-2">
          <li>
        <a href="#" className="text-black hover:text-blue-500">
          Something manting
        </a>
      </li>
      <li>
        <a href="#" className="text-black hover:text-blue-500">
          Something manting
        </a>
      </li>
      <li>
        <a href="#" className="text-black hover:text-blue-500">
          Something manting
        </a>
      </li>
            {/* Add more team members as needed */}{/*
          </ul>
        </div>

        {/* Div 2 */}{/*
        <div className="mb-6">
          <h2 className="text-2xl font-bold">What I`m learning</h2>
          <ul className="list-none mt-2">
          <li>
        <a href="#" className="text-black hover:text-blue-500">
          Something manting
        </a>
      </li>
      <li>
          Something manting
      </li>
      <li>
          Something manting
      </li>
          </ul>
        </div>

        {/* Div 2 */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold">Recognition</h2>
          <ul className="list-underline underline mt-2 font-mont-light text-[16px] md:text-[20px] leading-[25px] md:leading-[34px]">
          <li>
        <a href="https://akademii.semosedu.com/blogs/stremezh_i_akademija_za_grafichki_dizajn.html" target="_blank" rel="noopener noreferrer" className="text-black hover:text-blue-500">
          Best Branding Award SEMOS
        </a>
      </li>
      <li>
        <a href="https://www.upwork.com/freelancers/~01739530fb9140e97c" target="_blank" rel="noopener noreferrer" className="text-black hover:text-blue-500">
          Upwork Top 10% Designers
        </a>
      </li>
      <li>
        <a href="https://www.facebook.com/photo/?fbid=4834078696644696&set=pcb.4834090613310171" target="_blank" rel="noopener noreferrer" className="text-black hover:text-blue-500">
          Special Honors Award
        </a>
      </li>
      <li>
        <a href="https://www.certiport.com/Portal/Pages/PrintTranscriptInfo.aspx?action=Cert&id=445&cvid=LrXWnVq6PYwS1eJ7TuevZw%3D%3D" target="_blank" rel="noopener noreferrer" className="text-black hover:text-blue-500">
          Adobe Certified Specialist
        </a>
      </li>
            {/* Add more team members as needed */}
          </ul>
        </div>
      </div>
      
    </div>
    <hr className="w-[95%] h-[1.4px] mx-auto my-1 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-300" />

    <div id="contactSection" className='w-full'>

      <ContactAbtForm className />
      </div>
  </div> 
  );
  
};

export default About;
