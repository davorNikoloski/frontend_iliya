import React/*, { useState, useEffect } */from 'react';
import { BrowserRouter as Router, /*Route,*/ Routes } from 'react-router-dom';

//COMPONENT IMPORTS

import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import ProjectCard from './components/Project/ProjectCard'



function App() {



  return (
    <Router>
      <Navbar/>
      
      <Home/>
      <hr className="w-10/12 h-0.5 mx-auto my-1 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-500"/>

      <ProjectCard/>
      <hr className="w-10/12 h-0.5 mx-auto my-1 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-500"/>

      
        <Routes>
        </Routes>
    </Router>
  );
}

export default App;
