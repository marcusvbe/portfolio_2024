import React from 'react';
import './Projects.css';

const Projects: React.FC = () => {
  return (
    <div className="projects-container">
      <h2 className="projects-title">Projetos</h2>
      <div className="projects-grid">
        {/* Projeto 1 */}
        <div className="project-card">
          <img src="/static/img/COVID_proj.png" alt="Projeto API Covid" className="project-image"/>
          <h3>Dado da Covid – Projeto Integrado 01/2023</h3>
          <p>Descrição do projeto...</p>
          <a href="https://github.com/marcusvbe/api-primeiro-semestre" target="_blank" rel="noopener noreferrer">Ver no GitHub</a>
        </div>
        {/* Adicione mais projetos conforme necessário */}
      </div>
    </div>
  );
};

export default Projects;