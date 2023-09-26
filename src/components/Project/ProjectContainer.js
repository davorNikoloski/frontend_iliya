// ProjectContainer.js
import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes at the top of your file

import ProjectCard from './ProjectCard';

//PROJECTS DATA (TEMP)
    //PROJECT 1
import arrow_blue from '../../images/shapes/arrow-blue.svg';
import rectangle_blue from '../../images/shapes/rectangle-blue.svg';
import asset1 from '../../images/assets/Asset1.png';
    //PROJECT 2
import circle_red from '../../images/shapes/circle-red.svg';
import arrow_red from '../../images/shapes/arrow-red.svg';
    //PROJECT 3
import triangle_green from '../../images/shapes/triangle-green.svg';
import arrow_green from '../../images/shapes/arrow-green.svg';



const projectData = [
  {
    id: 1,
    title: 'Virtuocity',
    subtitle: 'REBRANDING',
    description: 'Giving the brand a whole new perspective. Making it get live by its expectation - A destination, a competitive arena, a social order, and a game changing experience.',
    shape1: rectangle_blue,
    shape2: arrow_blue,
    asset: asset1,
  },
  {
    id: 2,
    title: 'Angry Birds World',
    subtitle: 'BRANDING',
    description: 'Developing new visuals for marketing and operational needs, and following the guidelines of the international brand Angry Birds.',
    shape1: circle_red,
    shape2: arrow_red,
    asset: asset1,
  },
  {
    id: 3,
    title: 'Snow Dunes',
    subtitle: 'REBRANDING',
    description: 'Giving the brand a whole new perspective. Making it get live by its expectation - A destination, a competitive arena, a social order, and a game changing experience.',
    shape1: triangle_green,
    shape2: arrow_green,
    asset: asset1,
  },
  {
    id: 4,
    title: 'Embassy of Sweden',
    subtitle: 'EVENT BRANDING',
    description: 'Developing new visuals for marketing and operational needs, and following the guidelines of the intetrnational brand Angry Birds.',
    shape1: triangle_green,
    shape2: arrow_green,
    asset: asset1,
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
          />
          <hr className="w-10/12 h-0.5 mx-auto my-1 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-500" />
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
};
export default ProjectContainer;
