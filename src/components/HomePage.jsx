// Substitua TODO o conteúdo de: src/components/HomePage.jsx

import React from 'react';
import { TypeAnimation } from 'react-type-animation';

function HomePage() {
  return (
    <section id="inicio" className="hero-section">
      <div className="hero-left">
        <p className="intro-text">Desenvolvedor Frontend</p>
        <div className="welcome-heading-wrapper">
          <h1 className="welcome-heading">Bem-vindo ao meu portfólio</h1>
          <div className="main-heading-wrapper">
            <TypeAnimation
              sequence={[
                'Apaixonado por código', 2000,
                'Criando experiências digitais', 2000,
                'Detalhista no design e no código', 2000,
              ]}
              wrapper="span"
              speed={50}
              className="main-heading-animated"
              repeat={Infinity}
              style={{ color: 'var(--slate-text)' }}
            />
          </div>
        </div>
        <p className="description-text">
          Fiz esse site pra parecer leve. Mas por trás tem ifs, elses, bugs, correções e umas brigas com o JavaScript.
          Bonito, funcional e estável. Tipo um relacionamento ideal (mas pelo menos esse site entrega).
        </p>
        <div className="skills-container">
          <span>JavaScript</span>
          <span>HTML</span>
          <span>CSS</span>
          <span>SCSS</span>
        </div>
        <div className="buttons-container">
          <a href="#projetos" className="main-button">Meus Projetos</a>
          <a href="#contato" className="secondary-button">Entrar em Contato</a>
        </div>
      </div>

      <div className="hero-right">
        <div className="floating-icons">
          <div className="icon-item icon-1">
            <svg viewBox="0 0 100 100" className="code-icon">
              <path d="M25 30 L10 50 L25 70" stroke="currentColor" strokeWidth="4" fill="none" />
              <path d="M75 30 L90 50 L75 70" stroke="currentColor" strokeWidth="4" fill="none" />
            </svg>
          </div>

          <div className="icon-item icon-2">
            <svg viewBox="0 0 100 100" className="html-icon">
              <polygon points="20,10 25,85 50,95 75,85 80,10" stroke="currentColor" strokeWidth="3" fill="none" />
              <path d="M30 25 L70 25 M35 40 L65 40 M40 55 L60 55" stroke="currentColor" strokeWidth="2" />
            </svg>
          </div>

          <div className="icon-item icon-3">
            <svg viewBox="0 0 100 100" className="react-icon">
              <circle cx="50" cy="50" r="8" fill="currentColor" />
              <path d="M50 25 Q75 50 50 75 Q25 50 50 25" stroke="currentColor" strokeWidth="3" fill="none" />
              <path d="M25 35 Q50 25 75 35 Q50 75 25 35" stroke="currentColor" strokeWidth="3" fill="none" />
              <path d="M25 65 Q50 75 75 65 Q50 25 25 65" stroke="currentColor" strokeWidth="3" fill="none" />
            </svg>
          </div>

          <div className="icon-item icon-4">
            <svg viewBox="0 0 100 100" className="css-icon">
              <rect x="20" y="15" width="60" height="70" rx="5" stroke="currentColor" strokeWidth="3" fill="none" />
              <rect x="30" y="25" width="40" height="8" fill="currentColor" />
              <rect x="30" y="40" width="25" height="4" fill="currentColor" />
              <rect x="30" y="50" width="35" height="4" fill="currentColor" />
              <rect x="30" y="60" width="20" height="4" fill="currentColor" />
            </svg>
          </div>

          <div className="icon-item icon-5">
            <svg viewBox="0 0 100 100" className="js-icon">
              <rect x="15" y="15" width="70" height="70" rx="10" stroke="currentColor" strokeWidth="3" fill="none" />
              <text x="50" y="60" textAnchor="middle" fontSize="35" fill="currentColor" fontFamily="monospace">JS</text>
            </svg>
          </div>

          <div className="icon-item icon-6">
            <svg viewBox="0 0 100 100" className="terminal-icon">
              <rect x="10" y="20" width="80" height="60" rx="5" stroke="currentColor" strokeWidth="3" fill="none" />
              <circle cx="20" cy="30" r="2" fill="currentColor" />
              <circle cx="30" cy="30" r="2" fill="currentColor" />
              <circle cx="40" cy="30" r="2" fill="currentColor" />
              <path d="M20 45 L30 55 L20 65" stroke="currentColor" strokeWidth="2" fill="none" />
              <line x1="35" y1="65" x2="60" y2="65" stroke="currentColor" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomePage;