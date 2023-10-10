import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Project1 from './components/Project/StaticProjects/Project1';
import Project2 from './components/Project/StaticProjects/Project2';
import Project3 from './components/Project/StaticProjects/Project3';
import Project4 from './components/Project/StaticProjects/Project4';

import About from './components/About/About';
import MainPage from './components/Main/MainPage'; // Import the MainPage component
import Resume from './components/Resume/Resume'
import Footer from './components/Footer/Footer'



function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/Virtuocity" element={<Project1 />} />
        <Route path="/Angry_Birds_World" element={<Project2 />} />
        <Route path="/Snow_Dunes" element={<Project3 />} />
        <Route path="/Embassy_of_Sweden" element={<Project4 />} />
        
        <Route id='aboutSection' path="/About" element={<About />} />

        <Route path="/Resume" element={<Resume />} />

      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
