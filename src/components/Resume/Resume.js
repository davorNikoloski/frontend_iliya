import React from "react";

import contact_rect from '../../images/shapes/filled/About-filled-blue.png'
import contact_triangle from '../../images/shapes/filled/about-filled-pink.png'
import '../../styles/colors.css';


const Resume = () => {
  return (
    <div className="mt-20 main-bg h-full w-full flex md:flex-row flex-col">
      {/* Section 1 */}
        <div className="md:w-1/2 bg-gray-200 pl-8 mt-20 ">
            {/* Up Div */}
            <div className="flex flex-col items-left justify-center pl-5">
                <div className="flex align-center w-full">
                    <h1 className="text-6xl font-bold font-helvetica-neue pl-6">Iliya Binoski</h1>
                </div>
            
            <h2 className="mt-4 text-gray-600 text-2xl pl-6">
                Visual Branding Designer
            </h2>
            </div>

            {/*FIRST */}
            <div className="flex justify-center items-center flex-col mt-10 pl-5">
                <div className="w-full pl-6">
                    <span className="flex text-center align-center ">
                    <h2 className="text-black text-2xl font-bold font-helvetica-neue">Leisure Qatar</h2>
                    <h2 className="text-black text-2xl font-helvetica-neue"> - Senior Graphic Designer</h2>
                    </span>
                    <span className="flex text-center align-center ">
                        <h4 className="text-gray-500 text-l font-helvetica-neue">August 2022 - October 2023 | Doha, State of Qatar</h4>
                    </span>
                    <span className="flex text-center align-center mt-5">
                        <p className="text-left">
                        Developing new marketing, printing and promotional visuals using the assets of the international entertaining brand Angry Birds. <br/><br/>
                        Working on the rebranding, creating the main visuals of the biggest e-sports center in the GCC - Virtuocity.<br/><br/>
                        Creating marketing and promotional visuals for the snow entertaining park in Qatar - Snow Dunes.<br/><br/>
                        Creating corporate visuals for marketing and internal purposes of LEISURE.<br/><br/>
                        Creating marketing and promotional visuals for Angry Birds World, Virtuocity, Snow Dunes during the FIFA 22 World Cup.<br/><br/>
                        Creating visuals and branding materials for events of LEISURE’s clients for international brands.<br/>
                        </p>
                    </span>
                </div> 
            </div>
            {/*SECOND */}
            <div className="flex justify-center items-center flex-col mt-10 pl-5">
                <div className="w-full pl-6">
                    <span className="flex text-center align-center ">
                    <h2 className="text-black text-2xl font-bold font-helvetica-neue">Pointer C.A</h2>
                    <h2 className="text-black text-2xl font-helvetica-neue"> - Mid-Level Graphic Designer</h2>
                    </span>
                    <span className="flex text-center align-center ">
                        <h4 className="text-gray-500 text-l font-helvetica-neue">September 2020 - December 2021 | Skopje, North Macedonia</h4>
                    </span>
                    <span className="flex text-center align-center mt-5">
                        <p className="text-left">
                        Created visuals for various regional and international brands in various fields, mostly: life-style brands, educational, tourism <br/><br/>
                        Created over 20 book cover designs for the biggest Book store in the region - Literatura.mk<br/><br/>
                        Developed for the branding identity of the 2021 book affair in Skopje, with more then 20,000 visitors in three days.<br/><br/>
                        </p>
                    </span>
                </div> 
            </div>
            {/*THIRD */}
            <div className="flex justify-center items-center flex-col mt-10 pl-5">
                <div className="w-full pl-6">
                    <span className="flex text-center align-center ">
                    <h2 className="text-black text-2xl font-bold font-helvetica-neue">Upwork Inc.</h2>
                    <h2 className="text-black text-2xl font-helvetica-neue"> - Top Rated Graphic Designer</h2>
                    </span>
                    <span className="flex text-center align-center ">
                        <h4 className="text-gray-500 text-l font-helvetica-neue">September 2020 - December 2021 | Skopje, North Macedonia</h4>
                    </span>
                    <span className="flex text-center align-center mt-5">
                        <p className="text-left">
                        Worked as Freelance Graphic Designer resulting in over 40 successful project with different clients in various fields. <br/><br/>
                        Featured in the Top 10% Graphic Designers on Upwork out of more than 200,000 freelancers.<br/><br/>
                      </p>
                    </span>
                </div> 
            </div>
        </div>

        {/* Section 2 */}
        <div className="md:w-1/2 bg-gray-200 p-8 flex flex-col align-left items-left pt-0 mt-20 pl-40">
            {/* CONTACT */}
            <div className="flex flex-col mb-20 ">
                <span className="flex">
                <div className="w-5 h-5">
                        <img
                        src={contact_rect}
                        alt="Iliya Binoski"
                        className="max-w-full h-full w-full"
                        />
                </div>
                <h3 className="text-gray-700 text-2xl font-helvetica-neue pl-5">iliyabinoski.com</h3>
                </span>
                <span className="flex">
                    <div className="w-5 h-5">
                        <img
                        src={contact_triangle}
                        alt="Iliya Binoski"
                        className="max-w-full h-full w-full"
                        />
                    </div>
                    <h3 className="text-gray-700 text-2xl font-helvetica-neue pl-5">iliya.binoski@gmail.com</h3>
                </span>
            </div>

            {/* Div 1 */}
            <div className="mb-10">
                <h2 className="text-2xl font-bold">Academy of Arts and Design SEMOS Education</h2>
                <ul className="list-none  mt-2">
                    <li>
                        Specialized Graphic Designer
                    </li>
                    <li>
                        Visual Branding Designer
                    </li>
                    <li>
                        Adobe Certified Specialist
                    </li>
                        {/* Add more team members as needed */}
                </ul>
            </div>

                {/* Div 2 */}
            <div className="mb-10">
                    <h2 className="text-2xl font-bold">Tools</h2>
                    <ul className="list-none mt-2">
                        <li>
                            Tools
                        </li>
                        <li>
                            Adobe Illustrator
                        </li>
                        <li>
                            Adobe InDesign
                        </li>
                        <li>
                            Adobe XD
                        </li>
                        <li>
                            Adobe After Effects
                        </li>
                        <li>
                            Adobe Keynote
                        </li>
                        <li>
                            Microsoft MS Office
                        </li>
                    </ul>
                </div>

                    {/* Div 2 */}
                <div className="mb-10">
                    <h2 className="text-2xl font-bold">Skills</h2>
                <ul className="list-none mt-2">
                    <li>
                        Cross functional collaboration
                    </li>
                    <li>
                        Creative Strategy
                    </li>
                    <li>
                        Typography
                    </li>
                    <li>
                        Design Thinking
                    </li>
                    <li>
                        Psychology in Design
                    </li>
                    <li>
                        Interface Design
                    </li>
                        {/* Add more team members as needed */}
                </ul>
            </div>
        </div>
    </div>
    
  );
  
};

export default Resume;
