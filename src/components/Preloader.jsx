import React, { useState, useEffect, useRef } from 'react';
import TypingAnimation from './TypingAnimation';
import './Preloader.css';

// Ícone da Lupa em SVG
const SearchIcon = () => (
  <svg className="search-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

function Preloader({ onComplete, minDuration = 3000 }) {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const startTime = useRef(Date.now());
  const animationFrameRef = useRef();

  const texts = [
    'Desenvolvedor Front End'
  ];

  useEffect(() => {
    // Update progress bar
    const updateProgress = () => {
      const elapsed = Date.now() - startTime.current;
      const progressPercent = Math.min(100, (elapsed / minDuration) * 100);
      setProgress(progressPercent);

      if (progressPercent < 100) {
        animationFrameRef.current = requestAnimationFrame(updateProgress);
      } else if (onComplete) {
        // Start fade out animation
        setIsVisible(false);
        setTimeout(() => {
          onComplete();
        }, 500); // Match this with CSS transition duration
      }
    };

    animationFrameRef.current = requestAnimationFrame(updateProgress);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [minDuration, onComplete]);

  return (
    <div className={`preloader ${!isVisible ? 'fade-out' : ''}`}>
      <div className="preloader-content">
        <div className="search-bar">
          <span className="typing-text">
            <TypingAnimation 
              texts={texts} 
              speed={100}
              minDuration={minDuration}
              onComplete={() => {}}
            />
          </span>
          <SearchIcon />
        </div>
        <div className="progress-container">
          <div className="progress-bar" style={{ width: `${progress}%` }}></div>
        </div>
      </div>
    </div>
  );
}

export default Preloader;