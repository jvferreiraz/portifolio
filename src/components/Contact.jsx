import React from 'react';
import AnimatedSection from './AnimatedSection';

function Contact() {
  return (
    <AnimatedSection id="contato">
      <div className="contact-content">
        <h2 className="section-title">Qual o Próximo Passo?</h2>
        <p>Estou sempre aberto a novas oportunidades e propostas de colaboração. Sinta-se à vontade para me enviar uma mensagem. Vamos conversar!</p>
        <div className="buttons-container">
          <a 
            href="mailto:joaovitorfg07@gmail.com?subject=Olá!%20Vamos%20conversar&body=Olá%20João%20Vitor,%0D%0A%0D%0AGostaria%20de%20conversar%20sobre%20uma%20oportunidade..." 
            className="main-button"
          >
            Entrar em Contato
          </a>
        </div>
      </div>
    </AnimatedSection>
  );
}

export default Contact;