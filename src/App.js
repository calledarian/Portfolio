// Portfolio.js
import React from 'react';
import './App.css'
import Portfolio from './Portfolio';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';
import Scroll from './Scroll';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Resume from './Resume';


function App() {

  return (
    <div className="portfolio-container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <>
              <Portfolio />
              <About />
              <Skills />
              <Projects />
              <Contact />
              <Footer />
              <Scroll />
            </>
          } />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;