import React from 'react';
import AnimatedSection from './AnimatedSection';

function About() {
  const skills = ['JavaScript', 'HTML & CSS', 'SCSS', 'React', 'Git'];
  return (
    <AnimatedSection id="sobre">
      <h2 className="section-title">Sobre Mim</h2>
      <div className="about-content">
        <div className="about-text">
          <p>Pode me chamar de João Vitor.
</p>Desenvolvedor frontend com especialidade em deixar as coisas bonitas, leves e sem aquele botão quebrado no canto.<p></p>
          <p>Se rodou bem, carregou rápido e te deu vontade de clicar mais…<br />
fui eu.<br />
<p></p>Se deu erro, aí não era comigo. Provavelmente era backend 😅</p>
        </div>
        <div className="about-skills">
          <ul>
            {skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </div>
      </div>
      <div className="buttons-container">
        <a 
          href="mailto:joaovitorfg07@gmail.com?subject=Olá!&body=Olá,%20sabemos%20que%20você%20é%20incrível%20em%20frontend!%20Gostaríamos%20de%20conversar%20sobre%20uma%20oportunidade..." 
          className="main-button"
        >
          Dizer Olá
        </a>
        <a 
          href="mailto:joaovitorfg07@gmail.com" 
          className="secondary-button"
        >
          Enviar Email
        </a>
      </div>
    </AnimatedSection>
  );
}

export default About;