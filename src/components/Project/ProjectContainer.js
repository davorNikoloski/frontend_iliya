// ProjectContainer.js
import React from 'react';
import ProjectCard from './ProjectCard';

//PROJECTS DATA (TEMP)
    //PROJECT 1
import arrow_blue from '../../images/shapes/arrow-blue.svg';
import rectangle_blue from '../../images/shapes/rectangle-blue.svg';
import test_bk from '../../images/test_bk.png';


const projectData = [
  {
    id: 1,
    title: 'Virtuocity',
    description: 'Description for Project 1...',
    imageUrl: 'project1_image_url.jpg',
  },
  {
    id: 2,
    title: 'Project 2',
    description: 'Description for Project 2...',
    imageUrl: 'project2_image_url.jpg',
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
            description={project.description}
            imageUrl={project.imageUrl}
          />
          <hr className="w-10/12 h-0.5 mx-auto my-1 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-500" />
        </div>
      ))}
    </div>
  );
};

export default ProjectContainer;
