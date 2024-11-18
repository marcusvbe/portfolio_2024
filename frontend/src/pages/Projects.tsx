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
          <h3>Dados da Covid – Projeto Integrado 01/2023</h3>
          <p>
            Projeto Integrado do 1º semestre do curso de Desenvolvimento de Software Multiplataforma da FATEC de São José dos Campos – SP.
            O site permite analisar e comparar alguns dados de saúde do sistema Datasus (Tabnet) a fim de identificar possíveis impactos da Covid longa
            em 3 cidades do Vale do Paraíba: São José dos Campos, Jacareí e Taubaté.
          </p>
          <a href="https://github.com/marcusvbe/api-primeiro-semestre" target="_blank" rel="noopener noreferrer">Ver no GitHub</a>
        </div>

        {/* Projeto 2 */}
        <div className="project-card">
          <img src="/static/img/desafio_proj.png" alt="Desafio UNES" className="project-image"/>
          <h3>Desafio UNES – Desenvolvimento Web</h3>
          <p>
            Desenvolvido na disciplina de Desenvolvimento Web, ministrada pelo professor Jean Costa no 1º semestre do curso de Desenvolvimento de Software
            Multiplataforma, este site simples foi recebendo recursos ao longo do semestre: Flask, MySQL, Docker Compose e responsividade.
          </p>
          <a href="https://github.com/marcusvbe/Site-Dev-Web-1.-semestre" target="_blank" rel="noopener noreferrer">Ver no GitHub</a>
        </div>

        {/* Projeto 3 */}
        <div className="project-card">
          <img src="/static/img/portfolio_proj.png" alt="Portfólio Design Digital" className="project-image"/>
          <h3>Portfólio – Design Digital</h3>
          <p>
            Desenvolvido ao longo do semestre em entregas parciais, o portfólio implementa o conteúdo coberto pela disciplina de Design Digital, como
            os princípios do design digital, arquitetura de informação, psicologia das cores, CSS e seus frameworks, git e GitHub.
          </p>
          <a href="https://github.com/marcusvbe/repositorio_digital" target="_blank" rel="noopener noreferrer">Ver no GitHub</a>
        </div>

        {/* Projeto 4 */}
        <div className="project-card">
          <img src="/static/img/api_Chamados.png" alt="Sistema de Gestão de Chamados" className="project-image"/>
          <h3>Sistema de Gestão de Chamados (API) 02/2023</h3>
          <p>
            O projeto integrado do 2º semestre de 2023 consistiu na criação de uma aplicação de gestão de chamados direcionada a escolas e instituições
            de ensino. Minha participação esteve mais concentrada no back-end, desenvolvendo a API, que incluiu a criação de rotas, operações de CRUD,
            e a lógica de funcionamento do sistema, como as mudanças de status do chamado refletindo ações do cliente, do técnico e do admin.
            Também fiz integrações com o front-end.
          </p>
          <p>
            <strong>Tecnologias utilizadas:</strong> Figma, Node.js, JavaScript, SQLite, TypeScript, React, Prisma, GitHub.
          </p>
          <a href="https://github.com/marcusvbe/FocusQuestAPI" target="_blank" rel="noopener noreferrer">Ver no GitHub</a>
        </div>
      </div>
    </div>
  );
};

export default Projects;