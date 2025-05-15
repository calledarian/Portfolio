// Portfolio.js
import React from 'react';
import './App.css'
import Portfolio from './components/Portfolio';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Scroll from './components/Scroll';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Resume from './components/Resume';


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