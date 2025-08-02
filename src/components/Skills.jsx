import React from 'react';
import AnimatedSection from './AnimatedSection';

function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "JavaScript", level: 90 },
        { name: "HTML & CSS", level: 95 },
        { name: "React", level: 85 },
        { name: "SCSS", level: 88 }
      ]
    },
    {
      title: "Ferramentas",
      skills: [
        { name: "Git", level: 85 },
        { name: "VS Code", level: 90 },
        { name: "Figma", level: 75 },
        { name: "Chrome DevTools", level: 88 }
      ]
    }
  ];

  return (
    <AnimatedSection id="habilidades">
      <h2 className="section-title">Habilidades Técnicas</h2>
      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <div key={index} className="skills-category">
            <h3 className="category-title">{category.title}</h3>
            <div className="skills-list">
              {category.skills.map((skill, i) => (
                <div key={i} className="skill-item">
                  <div className="skill-header">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </AnimatedSection>
  );
}

export default Skills;
