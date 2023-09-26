import React from "react";
import '../../styles/colors.css'; // Import your CSS file

import pp1 from '../../images/past_projects/1.bare-closet.png';
import pp2 from '../../images/past_projects/2.traveling-mag.png';
import pp3 from '../../images/past_projects/3.donuterra.png';
import pp4 from '../../images/past_projects/4.piece-pizza.png';
import pp5 from '../../images/past_projects/5.gin-drink.png';
import pp6 from '../../images/past_projects/6.stremezh.png';

const PastProjects = () => {
    return (
    <div className="min-h-screen flex flex-col">
        <div className="min-h-screen flex flex-col md:flex-row">
        {/* Section 1 */}
        <div className="w-full md:w-2/3 relative">
          <div className="w-full h-full absolute inset-0">
            {/* Section 1 Image */}
            <img
              src={pp1}
              alt="Section 1"
              className="w-full h-full object-fit"
            />
            {/* Hover overlay */}
            <div className="w-full h-full absolute inset-0 bg-overlay hover:bg-opacity-40 transition duration-300 ease-in-out flex items-center justify-center text-white text-center opacity-0 hover:opacity-100">
              <div>
                <h2 className="text-2xl font-semibold opacity-100">Heading</h2>
                <p className="text-sm opacity-100">Subheading</p>
                <button className="mt-2 px-4 py-2 bg-white text-black hover:bg-gray-300 rounded opacity-100">
                  Button
                </button>
              </div>
            </div>
          </div>
        </div>
  
        {/* Section 2 */}
        <div className="w-full md:w-1/3 md:flex flex flex-col h-screen">
          <div className="w-full md:w-full relative h-1/2">
            {/* Section 2 Image 1 */}
            <img
              src={pp2}
              alt="Section 2 Image 1"
              className="w-full h-full object-fit"
            />
            {/* Hover overlay */}
            <div className="w-full h-full absolute inset-0 bg-overlay hover:bg-opacity-40 transition duration-300 ease-in-out flex items-center justify-center text-white text-center opacity-0 hover:opacity-100">
              <div>
                <h2 className="text-2xl font-semibold opacity-100">Heading</h2>
                <p className="text-sm opacity-100">Subheading</p>
                <button className="mt-2 px-4 py-2 bg-white text-black hover:bg-gray-300 rounded opacity-100">
                  Button
                </button>
              </div>
            </div>
          </div>
          <div className="w-full md:w-full relative h-1/2">
            {/* Section 2 Image 2 */}
            <img
              src={pp3}
              alt="Section 2 Image 2"
              className="w-full h-full object-fit"
            />
            {/* Hover overlay */}
            <div className="w-full h-full absolute inset-0 bg-overlay hover:bg-opacity-40 transition duration-300 ease-in-out flex items-center justify-center text-white text-center opacity-0 hover:opacity-100">
              <div>
                <h2 className="text-2xl font-semibold opacity-100">Heading</h2>
                <p className="text-sm opacity-100">Subheading</p>
                <button className="mt-2 px-4 py-2 bg-white text-black hover:bg-gray-300 rounded opacity-100">
                  Button
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

{/*SECOND PART*/}
      
      <div className="min-h-screen flex flex-col md:flex-row">
        {/* Section 1 */}
        <div className="w-full md:w-1/3 md:flex flex flex-col h-screen">
          <div className="w-full md:w-full relative h-1/2">
            {/* Section 2 Image 1 */}
            <img
              src={pp5}
              alt="Section 2 Image 1"
              className="w-full h-full object-fit"
            />
            {/* Hover overlay */}
            <div className="w-full h-full absolute inset-0 bg-overlay hover:bg-opacity-40 transition duration-300 ease-in-out flex items-center justify-center text-white text-center opacity-0 hover:opacity-100">
              <div>
                <h2 className="text-2xl font-semibold opacity-100">Heading</h2>
                <p className="text-sm opacity-100">Subheading</p>
                <button className="mt-2 px-4 py-2 bg-white text-black hover:bg-gray-300 rounded opacity-100">
                  Button
                </button>
              </div>
            </div>
          </div>
          <div className="w-full md:w-full relative h-1/2">
            {/* Section 2 Image 2 */}
            <img
              src={pp6}
              alt="Section 2 Image 2"
              className="w-full h-full object-fit"
            />
            {/* Hover overlay */}
            <div className="w-full h-full absolute inset-0 bg-overlay hover:bg-opacity-40 transition duration-300 ease-in-out flex items-center justify-center text-white text-center opacity-0 hover:opacity-100">
              <div>
                <h2 className="text-2xl font-semibold opacity-100">Heading</h2>
                <p className="text-sm opacity-100">Subheading</p>
                <button className="mt-2 px-4 py-2 bg-white text-black hover:bg-gray-300 rounded opacity-100">
                  Button
                </button>
              </div>
            </div>
          </div>
        </div>


        {/* Section 2 */}
        <div className="w-full md:w-2/3 relative">
          <div className="w-full h-full absolute inset-0">
            {/* Section 1 Image */}
            <img
              src={pp4}
              alt="Section 1"
              className="w-full h-full object-fit"
            />
            {/* Hover overlay */}
            <div className="w-full h-full absolute inset-0 bg-overlay hover:bg-opacity-40 transition duration-300 ease-in-out flex items-center justify-center text-white text-center opacity-0 hover:opacity-100">
              <div>
                <h2 className="text-2xl font-semibold opacity-100">Heading</h2>
                <p className="text-sm opacity-100">Subheading</p>
                <button className="mt-2 px-4 py-2 bg-white text-black hover:bg-gray-300 rounded opacity-100">
                  Button
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> 
    );
  };

export default PastProjects;
