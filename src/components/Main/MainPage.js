import React from 'react';
import ProjectContainer from '../Project/ProjectContainer';
import PastProjects from '../Project/PastProjects';
import ContactForm from '../Contact/Contact';
import Home from '..//Home/Home';

function MainPage() {
  return (
    <div className='main-bg'>
      <div id="homeSection">
      <Home/>
      </div>
      
      <hr className="w-[95%] h-[1.4px] mx-auto my-1 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-300 mb-[12px]" />
      <div id="workSection">
        <ProjectContainer />
      </div>

      <div id="pastPSection">
        <PastProjects />
      </div>
      <hr className="w-[95%] h-[1.4px] mx-auto my-1 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-300 mb-[12px]" />

      <div id="contactSection">
        <ContactForm />
      </div>
    </div>
  );
}

export default MainPage;
