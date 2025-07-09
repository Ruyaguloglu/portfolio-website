import React from 'react';
import { ThemeProvider } from "./context/ThemeContext"; //
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import StarsBackground from './components/StarsBackground';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
function App() {
  return (
    <ThemeProvider>
      <div className="relative">
        <StarsBackground />
        <Navbar />
        <main className="pt-24 space-y-24"> 
          <Landing />
          <About />
          <Education />
          <Experience />
          <Projects />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}


export default App;
