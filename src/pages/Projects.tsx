import React, { useState } from 'react';
import './Projects.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { Modal, Button } from 'react-bootstrap';

// Importar as imagens dos projetos
import api_Chamados from '../assets/api_Chamados.png';
import COVID_proj from '../assets/COVID_proj.png';
import desafio_proj from '../assets/desafio_proj.png';
// Adicione mais imports de imagens conforme necessário

interface Project {
  title: string;
  image: string;
  shortDescription: string;
  detalhes: string;
  tecnologias: any[]; // Substitua 'any' pelo tipo adequado se possível
  githubLink: string;
}

const Projects: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleShowModal = (project: Project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
    setShowModal(false);
  };

  const projects: Project[] = [
    {
      title: "Dados da Covid – Projeto Integrado 01/2023",
      image: COVID_proj,
      shortDescription: "Projeto Integrado do 1º semestre do curso de Desenvolvimento de Software Multiplataforma da FATEC de São José dos Campos – SP.",
      detalhes: `Projeto Integrado do 1º semestre do curso de Desenvolvimento de Software Multiplataforma da FATEC de São José dos Campos – SP.
      O site permite analisar e comparar alguns dados de saúde do sistema Datasus (Tabnet) a fim de identificar possíveis impactos da Covid longa
      em 3 cidades do Vale do Paraíba: São José dos Campos, Jacareí e Taubaté.`,
      tecnologias: [], // Adicione os ícones das tecnologias utilizadas
      githubLink: "https://github.com/marcusvbe/api-primeiro-semestre",
    },
    {
      title: "Desafio UNES – Desenvolvimento Web",
      image: desafio_proj,
      shortDescription: "Desenvolvido na disciplina de Desenvolvimento Web, ministrada pelo professor Jean Costa.",
      detalhes: `Desenvolvido na disciplina de Desenvolvimento Web, ministrada pelo professor Jean Costa no 1º semestre do curso de Desenvolvimento de Software
      Multiplataforma, este site simples foi recebendo recursos ao longo do semestre: Flask, MySQL, Docker Compose e responsividade.`,
      tecnologias: [], // Adicione os ícones das tecnologias utilizadas
      githubLink: "https://github.com/marcusvbe/Site-Dev-Web-1.-semestre",
    },
    // Adicione mais projetos conforme necessário
  ];

  return (
    <div className="projects-container">
      <h2 className="projects-title">Projetos</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card" onClick={() => handleShowModal(project)}>
            <img src={project.image} alt={project.title} className="project-image" />
            <h3>{project.title}</h3>
            <p>{project.shortDescription}</p>
          </div>
        ))}
      </div>

      {/* Modal para Detalhes do Projeto */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Detalhes do Projeto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedProject && (
            <>
              <h4>{selectedProject.title}</h4>
              <p><strong>Sobre o projeto:</strong></p>
              <p>{selectedProject.detalhes}</p>
              <p><strong>Tecnologias utilizadas:</strong></p>
              <div className="tecnologias">
                {selectedProject.tecnologias.map((icon, idx) => (
                  <FontAwesomeIcon key={idx} icon={icon} style={{ fontSize: '24px', marginRight: '10px' }} />
                ))}
              </div>
              <p><strong>Contribuições pessoais:</strong></p>
              <p>Desenvolvimento do front-end em React usando TypeScript, HTML e CSS</p>
              {/* Adicione mais informações conforme necessário */}
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          {selectedProject && (
            <Button variant="primary" href={selectedProject.githubLink} target="_blank">
              Ver Projeto no GitHub
            </Button>
          )}
          <Button variant="secondary" onClick={handleCloseModal}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Projects;