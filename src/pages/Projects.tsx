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
      githubLink: "https://github.com/minhasSenhasApp2024/minhasSenhasApp",
    },
    {
      title: "Sistema de Coleta de Dados de Estações Meteorológicas – Tecsus (empresa parceira) – API 4º semestre",
      shortDescription: "Sistema para coleta e monitoramento de dados meteorológicos em tempo real – 2º semestre de 2024",
      modalTitle: "Sistema de Coleta de Dados de Estações Meteorológicas",
      // image: API_4,
      image: desafio_proj,
      detalhes: `No projeto integrador em grupo (API) deste semestre (disciplinas de DevOps e IoT), desenvolvemos um sistema para coletar dados de
      sensores (direção e velocidade do vento, índice pluviométrico, umidade, temperatura e pressão), tratá‑los e exibi‑los em um portal com dashboards
      e relatórios. Geração de alertas: ferramenta de monitoramento ambiental para lidar com desastres naturais. Recurso didático: a demonstração dos conceitos matemáticos usados nos cálculos dos parâmetros. Habilidades interpessoais nos APIs: a cada API são fornecidos requisitos funcionais e não funcionais, cabendo ao grupo a priorização (MVP), definição das entregas a cada sprint, sua validação com o cliente e a gestão do projeto utilizando a metodologia ágil SCRUM.`,
      hardSkills: ["Typescript, Node.js: backend", "Swagger: documentação de APIs", "AWS, Vercel: hospedagem e deploy automático", "Github Actions: pipeline de integração contínua", "React e Typescript: front‑end", "PostgreSQL: banco de dados relacional", "Neon: banco de dados relacional on-line", "Redis: banco de dados em memória", "Metodologia Ágil SCRUM: gestão do projeto"],
      softSkills: ["Gestão de tempo, proatividade, trabalho em equipe"],
      contribuicoes: [
        "Autenticação e Autorização:  Desenvolvi funcionalidades de CRUD de usuários, sistema de login e proteção de rotas utilizando bcrypt para hashing de senhas e JWT para geração de tokens de acesso. Integração Contínua: Desenvolvi pipelines de Integração Contínua (CI) e implementei seus scripts com GitHub Actions para integrar testes e deploys automatizados. Documentação de APIs: Utilizei Swagger para documentar as rotas relativas a usuários e login, facilitando a comunicação e integração entre as equipes de front-end e back-end."
      ],
      githubLink: "https://github.com/equipe-javali/API_4",
    },
    {
      title: "Sistema de Gestão de Ativos para Empresas – Yutan (empresa parceira) – API 3º semestre",
      shortDescription: "Sistema para gestão eficiente de ativos empresariais, tangíveis e intangíveis – 1º semestre de 2024",
      modalTitle: "Sistema de Gestão de Ativos para Empresas",
      // image: API_3,
      image: desafio_proj,
      detalhes: `Criação de uma aplicação web para o monitoramento dos ativos (tangíveis e intangíveis) de uma empresa, com informações sobre o valor atual do ativo, onde ele está no momento, seu responsável, manutenções, entre outros`,
      hardSkills: ["Java, framework Spring: backend", "React e Typescript: frontend", "PostgreSQL: banco de dados relacional", "Supabase: banco de dados relacional on‑line", "Jira: gestão de tarefas", "Metodologia Ágil SCRUM: gestão do projeto"],
      softSkills: ["Aprimoramento de processo: seguir um padrão na criação de branches e commits no Github", "Trabalho em Equipe", "Gerenciamento de Tempo", "Resolução de Problemas"],
      contribuicoes: ["Criei o banco de dados físico, a partir da modelagem que recebi. API rest: criei os endpoints e operações de CRUD. Fiz a integração do backend com o banco de dados."],
      githubLink: "https://github.com/equipe-javali/API_3",
    },
    {
      title: "Sistema de Gestão de Chamados – API 2º semestre",
      shortDescription: "Sistema de gestão de chamados de TI direcionado a instituições de ensino – 2º semestre de 2023",
      modalTitle: "Sistema de Gestão de Chamados",
      image: api_Chamados,
      detalhes: `O projeto integrado do 2º semestre de 2023 consistiu na criação de uma aplicação de gestão de chamados de TI. Nossa equipe optou por desenvolvê-la direcionada a escolas e instituições de ensino para a gestão de chamados relativos a problemas de software. O sistema tem 3 níveis de acesso diferentes: cliente, técnico e administrador.`,
      hardSkills: ["Node.js e Typescript: backend", "Javascript e React: frontend", "SQLite: banco de dados relacional", "Prisma: ORM", "GitHub: controle de versão com uso de submódulos", "Metodologia Ágil SCRUM: gestão do projeto"],
      softSkills: ["Trabalho em Equipe", "Gerenciamento de Tempo", "Resolução de Problemas"],
      contribuicoes: ["Minha participação esteve mais concentrada no backend, desenvolvendo a API, que incluiu a criação de rotas, operações de CRUD, e a lógica de funcionamento do sistema, como as mudanças de status do chamado refletindo ações do cliente, do técnico e do admin. Também fiz integrações com o frontend."],
      githubLink: "https://github.com/marcusvbe/FocusQuestAPI",
    },
    {
      title: "Dados da Covid – API 1º Semestre",
      shortDescription: "Sistema para pesquisa de dados sobre a Covid longa – 1º semestre de 2023",
      modalTitle: "Sistema para pesquisa de dados sobre a Covid longa",
      image: COVID_proj,
      detalhes: `Projeto do API (Aprendizagem por Projeto Integrado) do 1º semestre do curso de Desenvolvimento de Software Multiplataforma da FATEC de São José dos Campos – SP, em parceria com a TV Vanguarda. O site permite analisar e comparar alguns dados de saúde do sistema Datasus (Tabnet) a fim de identificar possíveis impactos da Covid longa em 3 cidades do Vale do Paraíba: São José dos Campos, Jacareí e Taubaté.`,
      hardSkills: ["Figma: wireframe", "GitHub: controle de versão", "Python, Flask: backend", "MySQL: banco de dados", "HTML, CSS, Bootstrap: frontend", "Metodologia Ágil SCRUM: gestão do projeto"],
      softSkills: ["Trabalhar em equipe", "Gerenciar o tempo", "Falar em público nas apresentações das sprints do projeto"],
      contribuicoes: ["Usei o Figma para criação de páginas do wireframe do projeto.", "Contribuí com a implementação do site com Flask.", "Redigi seções do README do projeto no GitHub.", "Redigi textos do site."],
      githubLink: "https://github.com/marcusvbe/api-primeiro-semestre",
    },
    {
      title: "Site UNES",
      modalTitle: "Site UNES",
      image: desafio_proj,
      shortDescription: "Site criado para pôr em prática estudos de desenvolvimento web frontend e backend – 1º semestre de 2023",
      detalhes: `Site de uma universidade fictícia criado no 1º semestre do curso de Desenvolvimento de Software Multiplataforma, para a disciplina de Desenvolvimento Web I.`,
      hardSkills: ["Python, framework Flask: backend", "HTML, CSS: frontend", "Docker Compose: orquestração dos ambientes de backend e banco de dados", "MySQL: banco de dados"],
      softSkills: ["Gerenciamento de Tempo", "Resolução de Problemas", "Autonomia"],
      contribuicoes: ["Primeiro site que desenvolvi, conforme o wireframe fornecido pelo professor. Projeto individual."],
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
              <ul className="contribuicoes">
                {selectedProject.contribuicoes.map((contribuicao, idx) => (
                  <li key={idx}>{contribuicao}</li>
                ))}
              </ul>
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