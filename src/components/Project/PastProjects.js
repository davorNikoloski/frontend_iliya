import React from "react";
import '../../styles/colors.css'; // Import your CSS file

import pp1 from '../../images/past_projects/1.bare-closet.png';
import pp2 from '../../images/past_projects/2.traveling-mag.png';
import pp3 from '../../images/past_projects/3.donuterra.png';
import pp4 from '../../images/past_projects/4.piece-pizza.png';
import pp5 from '../../images/past_projects/5.gin-drink.png';
import pp6 from '../../images/past_projects/6.stremezh.png';

import shape1 from '../../images/shapes/rectangle-blue.svg';
import shape2 from '../../images/shapes/circle-red.svg';
import shape3 from '../../images/shapes/triangle-green.svg';
import shape4 from '../../images/shapes/shape-pink.svg';


const PastProjects = () => {
    return (
    <div className="md:min-h-screen flex flex-col mb-[30px]">
      <div className="flex w-full h-auto md:pt-0 pt-[10px] pb-[30px] md:pl-11 pl-[7%]">
        <div className="flex justify-center align-center items-center">
          <img src={shape1}  alt="Section 1" className="hidden md:block w-[25px] h-[25px] m-[8px]" />
          <img src={shape2}  alt="Section 1" className="hidden md:block w-[30px] h-[30px] m-[8px]" />
          <img src={shape3}  alt="Section 1" className="hidden md:block w-[30px] h-[30px] m-[8px]" />
          <img src={shape4}  alt="Section 1" className="hidden md:block w-[30px] h-[30px] m-[8px]" />
        </div>
        <h1 className="font-helvetica-neue font-bold text-5xl md:ml-[20px]">Past Projects</h1>
      </div>
        <div className="md:min-h-auto md:h-auto h-auto flex flex-row md:flex-row">
        {/* Section 1 */}
        <div className="w-2/3 md:w-2/3 relative h-fit">
          <div className="w-full h-full relative inset-0">
            {/* Section 1 Image */}
            <img
              src={pp1}
              alt="Section 1"
              className="w-full h-full object-contain"
            />
            {/* Hover overlay */}
            <div className="w-full h-full absolute inset-0 bg-overlay hover:bg-opacity-40 transition duration-300 ease-in-out flex items-center justify-center text-white text-center opacity-0 hover:opacity-100">
              <div>
                <h2 className="md:text-[75px] text-[20px] overlay-head font-semibold font-helvetica-neue  opacity-100">Bare Closet</h2>
                <p className="md:text-[25px] text-[15px] font-mont-lighterer opacity-100 relative top-[-5px]">Branding</p>
                <button className="md:px-[15px] px-[12px] md:py-[5px] py-[3px] text-[8px] bg-white font-mont text-black hover:bg-gray-300 rounded-[32px] opacity-100 relative top-[-10px] md:top-[8px] md:text-[15px]">
                <a href="https://www.behance.net/gallery/162269803/Bare-Closet-Visual-Branding-Identity">View Project</a>
                </button>
              </div>
            </div>
          </div>
        </div>
  
        {/* Section 2 */}
        <div className="w-1/3 md:w-1/3 md:flex flex flex-col md:h-fit h-auto">
          <div className="w-full md:w-full relative md:h-fit h-fit">
            {/* Section 2 Image 1 */}
            <img
              src={pp2}
              alt="Section 2 Image 1"
              className="w-full h-full object-contain"
            />
            {/* Hover overlay */}
            <div className="w-full h-full absolute inset-0 bg-overlay hover:bg-opacity-40 transition duration-300 ease-in-out flex items-center justify-center text-white text-center opacity-0 hover:opacity-100">
              <div>
                <h2 className="md:text-[55px] text-[12px] overlay-head font-semibold font-helvetica-neue  opacity-100">Travel.mk</h2>
                <p className="md:text-[25px] text-[10px] font-mont-lighterer opacity-100 relative top-[-2.5px]">Traveling Booklet</p>
                <button className="md:px-[15px] px-[12px] md:py-[5px] py-[3px] text-[8px] bg-white font-mont text-black hover:bg-gray-300 rounded-[32px] opacity-100 relative top-[-10px] md:top-[8px] md:text-[15px]">
                <a href="https://www.behance.net/gallery/120438979/Travel-Magazine-Macedonia">View Project</a>
                </button>
              </div>
            </div>
          </div>
          <div className="w-full md:w-full relative md:h-1/2 h-1/2 h-fit">
            {/* Section 2 Image 2 */}
            <img
              src={pp3}
              alt="Section 2 Image 2"
              className="w-full h-full object-contain"
            />
            {/* Hover overlay */}
            <div className="w-full h-full absolute inset-0 bg-overlay hover:bg-opacity-40 transition duration-300 ease-in-out flex items-center justify-center text-white text-center opacity-0 hover:opacity-100">
              <div>
                <h2 className="md:text-[55px] text-[12px] overlay-head font-semibold font-helvetica-neue  opacity-100">Donuterra</h2>
                <p className="md:text-[25px] text-[10px] font-mont-lighterer opacity-100 relative top-[-2.5px]">Visual Identity</p>
                <button className="md:px-[15px] px-[12px] md:py-[5px] py-[3px] text-[8px] bg-white font-mont text-black hover:bg-gray-300 rounded-[32px] opacity-100 relative top-[-10px] md:top-[8px] md:text-[15px]">
                <a href="https://www.behance.net/gallery/103012735/Donuterra-Brand-Identity-Package-design">View Project</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*SECOND PART*/}
      
      <div className="md:min-h-auto min-h-screen-auto h-auto flex flex-row md:flex-row">
        {/* Section 1 */}
        <div className="w-1/3 md:w-1/3 md:flex flex flex-col md:h-fit h-auto">
          <div className="w-full md:w-full relative md:h-1/2 h-fit">
            {/* Section 2 Image 1 */}
            <img
              src={pp5}
              alt="Section 2 Image 1"
              className="w-full h-full object-contain"
            />
            {/* Hover overlay */}
            <div className="w-full h-full absolute inset-0 bg-overlay hover:bg-opacity-40 transition duration-300 ease-in-out flex items-center justify-center text-white text-center opacity-0 hover:opacity-100">
              <div>
                <h2 className="md:text-[55px] text-[12px] overlay-head font-semibold font-helvetica-neue  opacity-100">God’s Elixir</h2>
                <p className="md:text-[25px] text-[10px] font-mont-lighterer opacity-100 relative top-[-2.5px]">Packaging</p>
                <button className="md:px-[15px] px-[12px] md:py-[5px] py-[3px] text-[8px] bg-white font-mont text-black hover:bg-gray-300 rounded-[32px] opacity-100 relative top-[-10px] md:top-[8px] md:text-[15px]">
                <a href="https://www.behance.net/gallery/125543605/Gods-Elixir-Gin-Packaging">View Project</a>
                </button>
              </div>
            </div>
          </div>
          <div className="w-full md:w-full relative md:h-1/2 h-1/2">
            {/* Section 2 Image 2 */}
            <img
              src={pp6}
              alt="Section 2 Image 2"
              className="w-full h-full object-contain"
            />
            {/* Hover overlay */}
            <div className="w-full h-full absolute inset-0 bg-overlay hover:bg-opacity-40 transition duration-300 ease-in-out flex items-center justify-center text-white text-center opacity-0 hover:opacity-100">
              <div>
                <h2 className="md:text-[55px] text-[12px] overlay-head font-semibold font-helvetica-neue  opacity-100">Stremezh</h2>
                <p className="md:text-[25px] text-[10px] font-mont-lighterer opacity-100 relative top-[-2.5px]"> Branding</p>
                <button className="md:px-[15px] px-[12px] md:py-[5px] py-[3px] text-[8px] bg-white font-mont text-black hover:bg-gray-300 rounded-[32px] opacity-100 relative top-[-10px] md:top-[8px] md:text-[15px]">
                <a href="https://www.behance.net/gallery/125030309/Awarded-Branding-design">View Project</a>
                </button>
              </div>
            </div>
          </div>
        </div>


        {/* Section 2 */}
        <div className="w-2/3 md:w-2/3 relative h-fit">
        <div className="w-full h-full relative inset-0">
            {/* Section 1 Image */}
            <img
              src={pp4}
              alt="Section 1"
              className="w-full h-full object-contain"
            />
            {/* Hover overlay */}
            <div className="w-full h-full absolute inset-0 bg-overlay hover:bg-opacity-40 transition duration-300 ease-in-out flex items-center justify-center text-white text-center opacity-0 hover:opacity-100">
              <div>
                <h2 className="md:text-[75px] text-[20px] overlay-head font-semibold font-helvetica-neue  opacity-100 ne">Piece</h2>
                <p className="md:text-[25px] text-[15px] font-mont-lighterer opacity-100 relative top-[-5px]">Urban Food | Visual Identity</p>
                <button className="md:px-[15px] px-[12px] md:py-[5px] py-[3px] text-[8px] bg-white font-mont text-black hover:bg-gray-300 rounded-[32px] opacity-100 relative top-[-10px] md:top-[8px] md:text-[15px]">
                  <a href="https://www.behance.net/gallery/109528627/Piece-Pizza-Take-Go">View Project</a>
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
