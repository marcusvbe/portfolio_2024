import React, { useState } from 'react';
import './Projects.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faReact, faNodeJs, faPython, faFigma, faJs, faHtml5, faCss3Alt, faJava, faJira, faSlack } from '@fortawesome/free-brands-svg-icons';
import { Modal, Button } from 'react-bootstrap';

// Importar as imagens dos projetos
import api_Chamados from '../assets/api_Chamados.png';
import COVID_proj from '../assets/COVID_proj.png';
import desafio_proj from '../assets/desafio_proj.png';
// import minhasSenhasApp from '../assets/minhasSenhasApp.png';
// import API_4 from '../assets/API_4.png';
// import API_3 from '../assets/API_3.png';
import logo_port from '../assets/logo_port.jpg';
import { FaPython } from 'react-icons/fa';
// Adicione mais imports de imagens conforme necessário

interface Project {
  title: string;
  image: string;
  shortDescription: string;
  detalhes: string;
  hardSkills: string[];
  softSkills: string[];
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
      title: "Aplicativo Android de Gerenciamento de Senhas – Ago ‑ Dez 2024",
      // image: minhasSenhasApp,
      image: desafio_proj,
      shortDescription: "Desenvolvimento de aplicativo Android para gerenciamento seguro de senhas com autenticação avançada.",
      detalhes: `Na disciplina de Programação para Dispositivos Móveis I, escolhemos o tema Gerenciamento de Senhas para o desenvolvimento de aplicativo
      Android em dupla. Criptografia de ponta a ponta de todos os dados do usuário. Autenticação de 2 fatores: login e biometria.`,
      hardSkills: ["Java", "Android SDK", "SQLite", "Criptografia", "Autenticação Biométrica"],
      softSkills: ["Trabalho em Equipe", "Gerenciamento de Tempo", "Resolução de Problemas"],
      tecnologias: [faReact, faNodeJs, faFigma, faJs, faHtml5, faCss3Alt],
      githubLink: "https://github.com/minhasSenhasApp2024/minhasSenhasApp",
    },
    {
      title: "Sistema de Coleta de Dados de Estações Meteorológicas – Ago ‑ Dez 2024",
      // image: API_4,
      image: desafio_proj,
      shortDescription: "Desenvolvimento de sistema para coleta e monitoramento de dados meteorológicos em tempo real.",
      detalhes: `No projeto integrador em grupo (API) deste semestre (disciplinas de DevOps e IoT), desenvolvemos um sistema para coletar dados de
      sensores (direção e velocidade do vento, índice pluviométrico, umidade, temperatura e pressão), tratá‑los e exibi‑los em um portal com dashboards
      e relatórios. Geração de alertas: funcionalidade central do portal, ferramenta de monitoramento ambiental para lidar com desastres
      naturais. Recurso didático: a demonstração dos conceitos matemáticos usados nos cálculos dos parâmetros.`,
      hardSkills: ["Java", "Node.js", "HTML", "CSS", "GitHub"],
      softSkills: ["Trabalho em Equipe", "Gerenciamento de Tempo", "Resolução de Problemas"],
      tecnologias: [faReact, faNodeJs, faPython, faHtml5, faCss3Alt, faJava, faJira],
      githubLink: "https://github.com/equipe-javali/API_4",
    },
    {
      title: "Sistema de Gestão de Ativos para Empresas – Fev ‑ Jul 2024",
      // image: API_3,
      image: desafio_proj,
      shortDescription: "Desenvolvimento de sistema para gestão eficiente de ativos empresariais, tanto tangíveis quanto intangíveis.",
      detalhes: `No API do 3º semestre, nossa missão foi desenvolver um sistema para gestão de ativos, tangíveis e intangíveis.`,
      hardSkills: ["Java", "Node.js", "HTML", "CSS", "GitHub"],
      softSkills: ["Trabalho em Equipe", "Gerenciamento de Tempo", "Resolução de Problemas"],
      tecnologias: [faReact, faJava, faNodeJs, faHtml5, faCss3Alt, faGithub],
      githubLink: "https://github.com/equipe-javali/API_3",
    },
    {
      title: "Sistema de Gestão de Chamados (API) 02/2023",
      image: api_Chamados,
      shortDescription: "Desenvolvimento de API para gestão de chamados direcionada a instituições de ensino.",
      detalhes: `O projeto integrado do 2º semestre de 2023 consistiu na criação de uma aplicação de gestão de chamados direcionada a escolas e instituições
      de ensino. Minha participação esteve mais concentrada no back-end, desenvolvendo a API, que incluiu a criação de rotas, operações de CRUD,
      e a lógica de funcionamento do sistema, como as mudanças de status do chamado refletindo ações do cliente, do técnico e do admin.
      Também fiz integrações com o front-end.`,
      hardSkills: ["Java", "Node.js", "Python", "HTML", "CSS", "JavaScript", "Jira", "Slack"],
      softSkills: ["Trabalho em Equipe", "Gerenciamento de Tempo", "Resolução de Problemas"],
      tecnologias: [faReact, faNodeJs, faPython, faHtml5, faCss3Alt, faJs, faJira, faSlack],
      githubLink: "https://github.com/marcusvbe/FocusQuestAPI",
    },
    {
      title: "API 1º Semestre – Covid Longa – 01/2023",
      image: COVID_proj,
      shortDescription: "Projeto Integrado do 1º semestre do curso de Desenvolvimento de Software Multiplataforma da FATEC de São José dos Campos – SP.",
      detalhes: `API (Aprendizagem por Projeto Integrado) do 1º semestre do curso de Desenvolvimento de Software Multiplataforma da FATEC de São José dos Campos – SP, em parceria com a TV Vanguarda. O site permite analisar e comparar alguns dados de saúde do sistema Datasus (Tabnet) a fim de identificar possíveis impactos da Covid longa em 3 cidades do Vale do Paraíba: São José dos Campos, Jacareí e Taubaté.`,
      hardSkills: ["Java", "Node.js", "Python", "HTML", "CSS", "JavaScript", "Jira", "Slack"],
      softSkills: ["Trabalho em Equipe", "Gerenciamento de Tempo", "Resolução de Problemas"],
      // tecnologias: [faReact, faNodeJs, faGithub, faFigma, faTrello, faJs, faHtml5, faCss3Alt, faJava, faJira, faSlack],
      tecnologias: [faGithub, faFigma, faJs, faHtml5, faCss3Alt, faPython],
      githubLink: "https://github.com/marcusvbe/api-primeiro-semestre",
    },
    {
      title: "Desafio UNES – Desenvolvimento Web",
      image: desafio_proj,
      shortDescription: "Desenvolvido na disciplina de Desenvolvimento Web, ministrada pelo professor Jean Costa.",
      detalhes: `Desenvolvido na disciplina de Desenvolvimento Web, ministrada pelo professor Jean Costa no 1º semestre do curso de Desenvolvimento de Software Multiplataforma, este site simples foi recebendo recursos ao longo do semestre: Flask, MySQL, Docker Compose e responsividade.`,
      hardSkills: ["Java", "Node.js", "Python", "HTML", "CSS", "JavaScript", "Jira", "Slack"],
      softSkills: ["Trabalho em Equipe", "Gerenciamento de Tempo", "Resolução de Problemas"],
      tecnologias: [faReact, faNodeJs, faPython, faHtml5, faCss3Alt],
      githubLink: "https://github.com/marcusvbe/Site-Dev-Web-1.-semestre",
    },
  ];

  return (
    <div className="projects-container">
      <h2 className="projects-title">Projetos</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card" onClick={() => handleShowModal(project)}>
            <div className="project-image-container">
              <img src={project.image} alt={project.title} className="project-image" />
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.shortDescription}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal para Detalhes do Projeto */}
      <Modal 
        show={showModal} 
        onHide={handleCloseModal} 
        className="custom-modal"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Detalhes do Projeto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedProject && (
            <>
              <h4>{selectedProject.title}</h4>
              <p>{selectedProject.detalhes}</p>

              {/* Seção de Hard Skills e Soft Skills */}
              <div className="skills-section">
                <div className="hard-skills">
                  <h5>Hard Skills</h5>
                  <ul>
                    {selectedProject.hardSkills.map((skill, idx) => (
                      <li key={idx}>{skill}</li>
                    ))}
                  </ul>
                </div>
                <div className="soft-skills">
                  <h5>Soft Skills</h5>
                  <ul>
                    {selectedProject.softSkills.map((skill, idx) => (
                      <li key={idx}>{skill}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Seção de Contribuições Pessoais */}
              <p><strong>Contribuições pessoais:</strong></p>
              <p>
                Desenvolvimento do front-end em React usando TypeScript, HTML e CSS.
              </p>

              {/* Seção de Tecnologias Utilizadas */}
              <p><strong>Tecnologias utilizadas:</strong></p>
              <div className="tecnologias">
                {selectedProject.tecnologias.map((icon, idx) => (
                  <FontAwesomeIcon key={idx} icon={icon} style={{ fontSize: '24px', marginRight: '10px' }} />
                ))}
              </div>
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