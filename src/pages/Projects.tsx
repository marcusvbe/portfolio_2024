import React, { useState } from 'react';
import './Projects.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faGithub, faReact, faNodeJs, faPython, faFigma, faJs, faHtml5, faCss3Alt, faJava, faJira, faSlack } from '@fortawesome/free-brands-svg-icons';
import { Modal, Button } from 'react-bootstrap';

// Importar as imagens dos projetos
import api_Chamados from '../assets/api_Chamados.png';
import COVID_proj from '../assets/COVID_proj.png';
import desafio_proj from '../assets/desafio_proj.png';
import minhasSenhasApp from '../assets/screenshotMinhasSenhas2.png';

// import API_4 from '../assets/API_4.png';
// import API_3 from '../assets/API_3.png';
// import logo_port from '../assets/logo_port.jpg';
// import { FaPython } from 'react-icons/fa';
// Adicione mais imports de imagens conforme necessário

interface Project {
  title: string;
  modalTitle: string;
  image: string;
  shortDescription: string;
  detalhes: string;
  hardSkills: string[];
  softSkills: string[];
  contribuicoes: string[];
  tecnologias: string[]; 
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
      title: "Aplicativo Minhas Senhas",
      modalTitle: "Minhas Senhas",
      image: minhasSenhasApp,
      shortDescription: "Aplicativo de gerenciamento de senhas com biometria e criptografia de ponta a ponta – 2º semestre de 2024",
      detalhes: `Na disciplina de Programação para Dispositivos Móveis I, escolhemos o tema Gerenciamento de Senhas para o desenvolvimento de aplicativo
Android em dupla. Criptografia de ponta a ponta de todos os dados do usuário. Autenticação de 2 fatores: login e biometria.`,
      hardSkills: [
        "Typescript e Node.js em todo o projeto",
        "Framework Expo",
        "expo secure store: armazenamento seguro das credenciais do usuário e chave mestra no dispositivo",
        "Firebase: autenticação do usuário com e‑mail e senha",
        "Firestore para armazenamento NoSQL dos dados criptografados dos usuários",
        "criptografia AES‑256 com chave mestra"
      ],
      softSkills: ["Trabalho em Equipe", "Gerenciamento de Tempo", "Resolução de Problemas"],
      contribuicoes: ["Desenvolvi toda a estrutura do projeto, configurei o Firebase, Firestore e todos os seus serviços e sua integração ao código, toda a lógica de funcionamento do app, estrutura de navegação, autenticação e criptografia."],
      tecnologias: [
        "Typescript, React Native, Expo, Node.js, Firebase, Firestore."
      ],
      githubLink: "https://github.com/minhasSenhasApp2024/minhasSenhasApp",
    },
    {
      title: "Sistema de Coleta de Dados de Estações Meteorológicas – Ago ‑ Dez 2024",
      modalTitle: "Coleta de Dados Meteorológicos",
      // image: API_4,
      image: desafio_proj,
      shortDescription: "Desenvolvimento de sistema para coleta e monitoramento de dados meteorológicos em tempo real.",
      detalhes: `No projeto integrador em grupo (API) deste semestre (disciplinas de DevOps e IoT), desenvolvemos um sistema para coletar dados de
      sensores (direção e velocidade do vento, índice pluviométrico, umidade, temperatura e pressão), tratá‑los e exibi‑los em um portal com dashboards
      e relatórios. Geração de alertas: funcionalidade central do portal, ferramenta de monitoramento ambiental para lidar com desastres
      naturais. Recurso didático: a demonstração dos conceitos matemáticos usados nos cálculos dos parâmetros.`,
      hardSkills: ["Java", "Node.js", "HTML", "CSS", "GitHub"],
      softSkills: ["Trabalho em Equipe", "Gerenciamento de Tempo", "Resolução de Problemas"],
      contribuicoes: [
        ""
      ],
      tecnologias: [""],
      githubLink: "https://github.com/equipe-javali/API_4",
    },
    {
      title: "Sistema de Gestão de Ativos para Empresas – 3º semestre de 2024",
      modalTitle: "Gestão de Ativos",
      // image: API_3,
      image: desafio_proj,
      shortDescription: "Desenvolvimento de sistema para gestão eficiente de ativos empresariais, tanto tangíveis quanto intangíveis.",
      detalhes: `No API do 3º semestre, nossa missão foi desenvolver um sistema para gestão de ativos, tangíveis e intangíveis.`,
      hardSkills: ["Java", "Node.js", "HTML", "CSS", "GitHub"],
      softSkills: ["Trabalho em Equipe", "Gerenciamento de Tempo", "Resolução de Problemas"],
      contribuicoes: [""],
      tecnologias: [""],
      githubLink: "https://github.com/equipe-javali/API_3",
    },
    {
      title: "Sistema de Gestão de Chamados (API) – 2º semestre de 2023",
      modalTitle: "Gestão de Chamados",
      image: api_Chamados,
      shortDescription: "Desenvolvimento de API para gestão de chamados direcionada a instituições de ensino.",
      detalhes: `O projeto integrado do 2º semestre de 2023 consistiu na criação de uma aplicação de gestão de chamados direcionada a escolas e instituições
      de ensino. Minha participação esteve mais concentrada no backend, desenvolvendo a API, que incluiu a criação de rotas, operações de CRUD,
      e a lógica de funcionamento do sistema, como as mudanças de status do chamado refletindo ações do cliente, do técnico e do admin.
      Também fiz integrações com o frontend.`,
      hardSkills: ["Java", "Node.js", "Python", "HTML", "CSS", "JavaScript", "Jira", "Slack"],
      softSkills: ["Trabalho em Equipe", "Gerenciamento de Tempo", "Resolução de Problemas"],
      contribuicoes: [""],
      tecnologias: [""],
      githubLink: "https://github.com/marcusvbe/FocusQuestAPI",
    },
    {
      title: "Dados da Covid – API 1º Semestre",
      shortDescription: "Projeto Integrado do curso de Desenvolvimento de Software Multiplataforma da FATEC de São José dos Campos – SP – 1º semestre de 2023",
      modalTitle: "API Covid Longa",
      image: COVID_proj,
      detalhes: `API (Aprendizagem por Projeto Integrado) do 1º semestre do curso de Desenvolvimento de Software Multiplataforma da FATEC de São José dos Campos – SP, em parceria com a TV Vanguarda. O site permite analisar e comparar alguns dados de saúde do sistema Datasus (Tabnet) a fim de identificar possíveis impactos da Covid longa em 3 cidades do Vale do Paraíba: São José dos Campos, Jacareí e Taubaté.`,
      hardSkills: ["Figma: wireframe", "GitHub: controle de versão", "Python, Flask: backend", "MySQL: banco de dados", "HTML, CSS, Bootstrap: frontend"],
      softSkills: ["Trabalhar em equipe", "Gerenciar o tempo", "Falar em público nas apresentações das sprints do projeto"],
      contribuicoes: ["Usei o Figma para criação de páginas do wireframe do projeto. Redigi parte do README do projeto no GitHub. Contribuí com a implementação do site com Flask. Redigi textos do site."],
      tecnologias: ["Python", "Flask", "MySQL", "HTML", "CSS", "Bootstrap", "GitHub"],
      githubLink: "https://github.com/marcusvbe/api-primeiro-semestre",
    },
    {
      title: "Site UNES",
      modalTitle: "Site UNES",
      image: desafio_proj,
      shortDescription: "Site criado para pôr em prática estudos de desenvolvimento web frontend e backend – 1º semestre de 2023.",
      detalhes: `Site de uma universidade fictícia criado no 1º semestre do curso de Desenvolvimento de Software Multiplataforma, para a disciplina de Desenvolvimento Web I.`,
      hardSkills: ["Python, framework Flask: backend", "HTML, CSS: frontend", "Docker Compose: orquestração dos ambientes de backend e banco de dados"],
      softSkills: ["Gerenciamento de Tempo", "Resolução de Problemas", "Autonomia"],
      contribuicoes: ["Primeiro site que desenvolvi, conforme o wireframe fornecido pelo professor. Projeto individual."],
      tecnologias: ["HTML, CSS, Python, Flask, MySQL, Docker Compose"],
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
              <h4>{selectedProject.modalTitle}</h4>
              <p>{selectedProject.detalhes}</p>

              {/* Seção de Hard Skills e Soft Skills */}
              <div className="skills-section">
                <div className="hard-skills">
                  <h5 className="section-title">Hard Skills</h5>
                  <ul>
                    {selectedProject.hardSkills.map((skill, idx) => (
                      <li key={idx}>{skill}</li>
                    ))}
                  </ul>
                </div>
                <div className="soft-skills">
                  <h5 className="section-title">Soft Skills</h5>
                  <ul>
                    {selectedProject.softSkills.map((skill, idx) => (
                      <li key={idx}>{skill}</li>
                    ))}
                  </ul>
                </div>
              </div>
  
              {/* Seção de Contribuições Pessoais */}
              <h5 className="section-title">Contribuições pessoais:</h5>
              <p className="contribuicoes">
                {selectedProject.contribuicoes.map((contribuicao, idx) => (
                  <span key={idx}>{contribuicao}</span>
                ))}
              </p>

              {/* Seção de Tecnologias Utilizadas */}
              <h5 className="section-title">Tecnologias utilizadas:</h5>
              <div className="tecnologias">
                {selectedProject.tecnologias.map((tech, idx) => (
                  <p key={idx}>{tech}</p>
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