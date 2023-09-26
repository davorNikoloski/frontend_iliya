import React from "react";

import contact_rect from '../../images/shapes/filled/About-filled-blue.png'

import logos from '../../images/about_logos/9-logos.png'




const About = () => {
  return (
    <div className="h-screen w-full flex">
      {/* Section 1 */}
      <div className="w-9/12 bg-gray-200 p-8">
        {/* Up Div */}
        <div className="flex flex-col items-center justify-center pl-12">
            <div className="flex align-center w-full">
            <img
                src={contact_rect} // Replace with your icon image URL
                alt="Icon"
                className="w-4 h-4 mt-3"
            />
          <h1 className="text-4xl font-bold font-helvetica-neue pl-6">I’m Iliya, a Branding designer based in Europe.</h1></div>
          
          <p className="mt-4 text-gray-600 pl-10">
            Giving the brand a whole new perspective. A destination, a competitive arena, a social order, and a game changing experience. Lorem ipsum konem slonem kronem. a competitive arena.<br/><br/> A social order, and a game changing experience. Lorem ipsum donem ponem konem slonem kronem. Apsum bupsum trupsum mupsum.
          </p>
        </div>

        {/* Down Div */}
        {/* Down Div */}
<div className="flex justify-center items-center mt-8 pl-6">
  {/* Logos */}
    <img
        src={logos}
        alt="Iliya Binoski"
        className="max-w-full h-auto md:w-10/12"
    />
</div>

      </div>

      {/* Section 2 */}
      <div className="w-3/12 bg-gray-200 p-8 flex flex-col align-left justify-between">
        {/* Div 1 */}
        <div className="mb-6">
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
            {/* Add more team members as needed */}
          </ul>
        </div>

        {/* Div 2 */}
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
          <ul className="list-none mt-2">
          <li>
        <a href="#" className="text-black hover:text-blue-500">
          Best Branding Award SEMOS
        </a>
      </li>
      <li>
        <a href="#" className="text-black hover:text-blue-500">
          Upwork Top 10% Designers
        </a>
      </li>
      <li>
        <a href="#" className="text-black hover:text-blue-500">
          Special Honors Award
        </a>
      </li>
            {/* Add more team members as needed */}
          </ul>
        </div>

      </div>
    </div>
  );
};

export default About;
