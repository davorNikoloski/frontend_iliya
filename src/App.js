import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Navbar from './components/Navbar/Navbar';
import Project1 from './components/Project/StaticProjects/Project1';
import Project2 from './components/Project/StaticProjects/Project2';
import Project3 from './components/Project/StaticProjects/Project3';
// import Project4 from './components/Project/StaticProjects/Project4';

import About from './components/About/About';
import MainPage from './components/Main/MainPage'; // Import the MainPage component
import Resume from './components/Resume/Resume';
import Footer from './components/Footer/Footer';
import Nda from './components/Project/nda';

function App() {
  return (
    <Router>
      <Helmet>
        <title>Iliya Binoski</title>
        <meta name="description" content="Visual Graphic Designer Portfolio" />
        <meta property="og:title" content="Iliya Binoski" />
        <meta property="og:description" content="Visual Graphic Designer Portfolio" />
        <meta property="og:image" content="/images/ib_logo.png" />
        <meta property="og:url" content="https://iliyabinoski.com/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Iliya Binoski" />
        <meta name="twitter:description" content="Visual Graphic Designer Portfolio" />
        <meta name="twitter:image" content="/images/ib_logo.png" />
      </Helmet>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/Virtuocity" element={<Project1 />} />
        <Route path="/Angry_Birds_World" element={<Project2 />} />
        <Route path="/Snow_Dunes" element={<Project3 />} />
        {/* <Route path="/Embassy_of_Sweden" element={<Project4 />} /> */}
        <Route id='aboutSection' path="/About" element={<About />} />
        <Route path="/Resume" element={<Resume />} />
        <Route path="/Nda" element={<Nda />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
