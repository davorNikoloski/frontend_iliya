import React/*, { useState, useEffect } */from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//COMPONENT IMPORTS

import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import ProjectContainer from './components/Project/ProjectContainer'
import PastProjects from './components/Project/PastProjects';
import ContactForm from './components/Contact/Contact';

import About from './components/About/About';

function App() {



  return (
    <Router>
      <Navbar/>
      
      <Home/>
      <hr className="w-10/12 h-0.5 mx-auto my-1 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-500"/>
      <ProjectContainer />
      <PastProjects/>
      <hr className="w-10/12 h-0.5 mx-auto my-1 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-500"/>
      <ContactForm/>

        <Routes>
          <Route path="/About" element={<About />} />
          <Route path="/About" element={<About />} />
        </Routes>
    </Router>
  );
}

export default App;
