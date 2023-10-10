// ProjectContainer.js
import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes at the top of your file

import '../../styles/colors.css';


import ProjectCard from './ProjectCard';

//PROJECTS DATA (TEMP)
    //PROJECT 1
import arrow_blue from '../../images/shapes/arrow-blue.svg';
import rectangle_blue from '../../images/shapes/rectangle-blue.svg';
import asset1 from '../../images/assets/vc-homepage.png';
    //PROJECT 2
import circle_red from '../../images/shapes/circle-red.svg';
import arrow_red from '../../images/shapes/arrow-red.svg';
import asset2 from '../../images/assets/abw-homepage.png';

    //PROJECT 3
import triangle_green from '../../images/shapes/triangle-green.svg';
import arrow_green from '../../images/shapes/arrow-green.svg';
import asset3 from '../../images/assets/sd-homepage.png';

    //PROJECT 4
import shape_pink from '../../images/shapes/shape-pink.svg';
import arrow_pink from '../../images/shapes/arrow-pink.svg';
import asset4 from '../../images/assets/sweden-homepage.png';

    


const projectData = [
  {
    id: 1,
    title: 'Virtuocity',
    subtitle: 'REBRANDING',
    description: 'As one of the lead graphic designer for Virtuocity, the GCC’s premier e-sports center, I undertook a significant rebranding effort. My focus was to modernize Virtuocity’s visual identity, creating a dynamic and appealing presence across both print and digital media.',
    shape1: rectangle_blue,
    shape2: arrow_blue,
    asset: asset1,
    link: '/virtuocity'
  },
  {
    id: 2,
    title: 'Angry Birds World',
    subtitle: 'BRANDING',
    description: 'As a graphic designer at Angry Birds World, I created visuals aligning with Angry Birds’ global brand guidelines. These assets catered to marketing and operational needs, bridging the gap between digital and print media.',
    shape1: circle_red,
    shape2: arrow_red,
    asset: asset2,
    link: '/Angry_Birds_World'
  },
  {
    id: 3,
    title: 'Snow Dunes',
    subtitle: 'REBRANDING',
    description: 'I led the rebranding effort, focusing on crafting professional social media assets. This enhanced the brand’s online identity, engaging winter enthusiasts effectively, and revitalizing its digital presence.',
    shape1: triangle_green,
    shape2: arrow_green,
    asset: asset3,
    link: '/Snow_Dunes'
  },
  {
    id: 4,
    title: 'Embassy of Sweden',
    subtitle: 'EVENT BRANDING',
    description: 'My primary responsibility entailed creating brochures and event materials, ensuring a polished and cohesive visual identity for their events.',
    shape1: shape_pink,
    shape2: arrow_pink,
    asset: asset4,
    link: '/Embassy_of_Sweden'
  },
  // Add more project data objects as needed
];

const ProjectContainer = () => {
  return (
    <div>
      {projectData.map((project) => (
        <div key={project.id}>
          <ProjectCard
            title={project.title}
            subtitle={project.subtitle}
            description={project.description}
            shape1={project.shape1}
            shape2={project.shape2}
            asset={project.asset}
            link={project.link}
          />
          <hr className="w-[95%] h-[1.4px] mx-auto my-1 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-300 mb-[15px]" />
        </div>
      ))}
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
export default ProjectContainer;
