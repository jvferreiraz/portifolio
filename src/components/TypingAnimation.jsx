import { useState, useEffect } from 'react';
import './TypingAnimation.css';

const TypingAnimation = ({ texts, speed = 30, onComplete, minDuration = 3000 }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(speed);
  const [startTime, setStartTime] = useState(Date.now());

  useEffect(() => {
    setStartTime(Date.now());
    // Se só há um texto, não faz deleção, só digita
    const currentText = texts[currentTextIndex];
    const TYPING_SPEED = 20; // Rápido, mas visível

    if (displayText === currentText) {
      // Chama onComplete após minDuration
      const elapsed = Date.now() - startTime;
      if (elapsed >= minDuration && onComplete) {
        onComplete();
      }
      return;
    }

    const type = () => {
      setDisplayText(currentText.substring(0, displayText.length + 1));
    };

    const timer = setTimeout(type, TYPING_SPEED);
    return () => clearTimeout(timer);
  }, [displayText, currentTextIndex, texts, minDuration, onComplete, startTime]);

  return (
    <span className="typing-container">
      {displayText}
      <span className="cursor">|</span>
    </span>
  );
};

export default TypingAnimation;
