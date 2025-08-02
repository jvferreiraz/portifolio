// Substitua TODO o conteúdo de: src/App.jsx

import React, { useState } from 'react';
import Header from './components/Header';
import HomePage from './components/HomePage';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import SocialLinks from './components/SocialLinks';
import Preloader from './components/Preloader';

function App() {
  const [loading, setLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  // Smooth scroll behavior is now handled by CSS

  const handlePreloaderComplete = () => {
    setLoading(false);
    // Small delay to allow the preloader fade-out to complete
    setTimeout(() => setShowContent(true), 500);
  };

  return (
    <>
      {loading && <Preloader onComplete={handlePreloaderComplete} minDuration={8000} />}
      
      <div className={`app-container ${showContent ? 'fade-in' : 'hidden'}`}>
        <Header />
        <SocialLinks />
        <main>
          <HomePage />
          <About />
          <Projects />
          <Contact />
        </main>
      </div>
    </>
  );
}

export default App;