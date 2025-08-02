// Código para: src/components/Header.jsx
import React from 'react';

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <a href="#home">PORTFOLIO</a>
        </div>
        <nav className="nav-links">
          <ul>
            <li><a href="#inicio">Início</a></li>
            <li><a href="#sobre">Sobre</a></li>
            <li><a href="#projetos">Projetos</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;