import React from 'react';
import Threads from './Threads.jsx';
import PillNav from './PillNav';
import About from './About';
import Skills from './Skills';
import Stats from "./Stats";
import Experience from './Experience';
import Projects from './Projects';
import InfiniteMenu from './InfiniteMenu';
import Contact from "./Contact";
import Footer from "./Footer";
// 🔑 NEW: Import PixelCard component (assuming it is in the same directory, src/)
import PixelCard from './PixelCard'; 

import './Threads.css';
import './PillNav.css';
import './App.css';

function App() {
  const items = [
    {
      image: 'https://uicookies.com/wp-content/uploads/2020/09/Streamit.jpg',
      link: 'https://dhif216.github.io/movies/tvshows.html',
      title: 'BlockFlix',
      description: 'A Movie Stream Site'
    },
    {
      image: 'https://cdn.dribbble.com/userupload/13678195/file/original-93399428a28cabc76bb086160c4a4873.jpg',
      link: 'https://dhif216.github.io/Portfolio-darkmode/',
      title: 'Portfolio Desing',
      description: 'My first Portfolio desing'
    },
    {
      image: 'https://cdn.dribbble.com/userupload/44845178/file/36b5b7c3ebeb87e556a8de1795959ff0.png?format=webp&resize=400x300&vertical=center',
      link: 'https://dhif216.github.io/website/',
      title: 'E-commerce Site Gamer',
      description: 'HTML CSS And Figma project'
    },
    {
      image: 'https://cdn.dribbble.com/userupload/43568555/file/original-2b23d34d8b3ae40ea2ba35c5e1e926bb.png?crop=463x0-3104x1980&format=webp&resize=400x300&vertical=center',
      link: 'https://dhif216.github.io/hippi/',
      title: 'Hippi Farm Website',
      description: 'A site for a farm using figma html css js'
    },
    {
      image: 'https://assets.awwwards.com/awards/element/2024/01/6596aa5d633e8567694280.png',
      link: 'https://dhif216.github.io/Local-Horse-Tour-Website-Redesign/',
      title: 'Horse Trip Website',
      description: 'A site for a Booking trips using figma html css js'
    }
  ];

  return (
    <div className="App">
      {/* Fullscreen Threads background */}
      <Threads
        className="threads-background"
        amplitude={1}
        distance={0}
        enableMouseInteraction={true}
      />

      {/* Pill Navigation */}
      <PillNav
        items={[
          { label: 'Home', href: '/' },
          { label: 'About', href: '/about' },
          { label: 'Services', href: '/services' },
          { label: 'Contact', href: '/contact' }
        ]}
        activeHref="/"
        baseColor="#000000"
        pillColor="#ffffff"
        hoveredPillTextColor="#ffffff"
        pillTextColor="#000000"
      />

      {/* Portfolio Header */}
      <header className="portfolio-header">
        <h1>
          <span className="dhif">Dhif</span>{' '}
          <span className="mouadh">Mouadh</span>
        </h1>
        <p className="subtitle">UX / UI Designer</p>
      </header>

      {/* Foggy container starts from About */}
      <div className="foggy-container">
        {/* Profile Image Container */}
        <div className="profile-image-container">
          {/* 🔑 WRAPPER ADDED: Wrap the image with PixelCard */}
          <PixelCard variant="blue" className="image-card"> 
            <img
              src="https://images.unsplash.com/photo-1695927621677-ec96e048dce2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=735" // replace with your image URL
              alt="Profile"
              className="profile-image"
            />
          </PixelCard>
        </div>

        <About />   
           
        <Skills />
        <Stats />
        <Projects />

        <div className="infinite-menu-container">
          <InfiniteMenu items={items} />
        </div>

        <Experience />
        <Contact />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;