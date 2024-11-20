import React from 'react';
import './Projects.css';
import api_Chamados from '../assets/api_Chamados.png';
import COVID_proj from '../assets/COVID_proj.png';
import desafio_proj from '../assets/desafio_proj.png';

const Projects: React.FC = () => {
  return (
    <div className="projects-container">
      <h2 className="projects-title">Projetos</h2>
      <div className="projects-grid">
        {/* Projeto 1 */}
        <div className="project-card">
          <img src={COVID_proj} alt="Projeto API Covid" className="project-image" />
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
          <img src={desafio_proj} alt="Desafio UNES" className="project-image" />
          <h3>Desafio UNES – Desenvolvimento Web</h3>
          <p>
            Desenvolvido na disciplina de Desenvolvimento Web, ministrada pelo professor Jean Costa no 1º semestre do curso de Desenvolvimento de Software
            Multiplataforma, este site simples foi recebendo recursos ao longo do semestre: Flask, MySQL, Docker Compose e responsividade.
          </p>
          <a href="https://github.com/marcusvbe/Site-Dev-Web-1.-semestre" target="_blank" rel="noopener noreferrer">Ver no GitHub</a>
        </div>

        {/* Novo Projeto 1 */}
        <div className="project-card">
          {/* <img src="/static/img/minhasSenhasApp.png" alt="Aplicativo Android de Gerenciamento de Senhas" className="project-image" /> */}
          <h3>Aplicativo Android de Gerenciamento de Senhas – Ago ‑ Dez 2024</h3>
          <p>
            Na disciplina de Programação para Dispositivos Móveis I, escolhemos o tema Gerenciamento de Senhas para o desenvolvimento de aplicativo
            Android em dupla. Criptografia de ponta a ponta de todos os dados do usuário. Autenticação de 2 fatores: login e biometria.
          </p>
          <p>
            <strong>Tecnologias utilizadas:</strong> Front‑end em TypeScript, React Native e Expo. Back‑end: Node.js, Firebase (autenticação do usuário com e‑mail e senha,
            Firestore: armazenamento de dados NoSQL).
          </p>
          <p>
            <strong>Contribuições:</strong> Configurei o Firebase e todos os seus serviços e sua integração ao código, toda a lógica de funcionamento do app, estrutura
            de navegação, armazenamento local seguro das credenciais, criptografia AES‑256 com chave mestra, acesso por biometria.
          </p>
          <a href="https://github.com/minhasSenhasApp2024/minhasSenhasApp" target="_blank" rel="noopener noreferrer">Ver no GitHub</a>
        </div>

        {/* Novo Projeto 2 */}
        <div className="project-card">
          {/* <img src="/assets/API_4.png" alt="Sistema de Coleta de Dados de Estações Meteorológicas" className="project-image" /> */}
          <h3>Sistema de Coleta de Dados de Estações Meteorológicas – Ago ‑ Dez 2024</h3>
          <p>
            No projeto integrador em grupo (API) deste semestre (disciplinas de DevOps e IoT), desenvolvemos um sistema para coletar dados de
            sensores (direção e velocidade do vento, índice pluviométrico, umidade, temperatura e pressão), tratá‑los e exibi‑los em um portal com dashboards
            e relatórios. Geração de alertas: funcionalidade central do portal, ferramenta de monitoramento ambiental para lidar com desastres
            naturais. Recurso didático: a demonstração dos conceitos matemáticos usados nos cálculos dos parâmetros.
          </p>
          <p>
            <strong>Habilidades interpessoais nos APIs:</strong> A cada API são fornecidos requisitos funcionais e não funcionais, cabendo ao grupo a priorização (MVP),
            definição das entregas a cada sprint, sua validação com o cliente e a gestão do projeto utilizando metodologias ágeis. Gestão de tempo,
            proatividade, trabalho em equipe.
          </p>
          <p>
            <strong>Tecnologias:</strong> O sistema foi desenvolvido usando React e TypeScript no front‑end e TypeScript, Node.js, PostgreSQL e Neon no back‑end.
            Neste projeto, implementamos DevOps, com as funções de DevOps distribuídas entre a equipe.
          </p>
          <p>
            <strong>Contribuições:</strong> Autenticação e Autorização: Desenvolvi funcionalidades de CRUD de usuários, sistema de login e proteção de rotas utilizando
            bcrypt para hashing de senhas e JWT para geração de tokens de acesso. Integração Contínua: Configurei pipeline de Integração Contínua
            (CI), utilizando GitHub Actions para integrar testes e deploys automatizados. Documentação de APIs: Utilizei Swagger para documentar as
            rotas relativas a usuários e login, facilitando a comunicação e integração entre as equipes de front‑end e back‑end.
          </p>
          <a href="https://github.com/equipe-javali/API_4" target="_blank" rel="noopener noreferrer">Ver no GitHub</a>
        </div>

        {/* Novo Projeto 3 */}
        <div className="project-card">
          {/* <img src= alt="Sistema de Gestão de Ativos para Empresas" className="project-image" /> */}
          <h3>Sistema de Gestão de Ativos para Empresas – Fev ‑ Jul 2024</h3>
          <p>
            No API do 3º semestre, nossa missão foi desenvolver um sistema para gestão de ativos, tangíveis e intangíveis.
          </p>
          <p>
            <strong>Tecnologias:</strong> Sistema desenvolvido em React e TypeScript no front‑end e Java, Spring, PostgreSQL e Supabase no back‑end.
          </p>
          <p>
            <strong>Contribuições:</strong> Desenvolvi grande parte do back‑end, especialmente a criação de API Restful: CRUDs e endpoints em Java e Spring. Documentação de APIs: Swagger para documentação dos endpoints desenvolvidos.
          </p>
          <a href="https://github.com/equipe-javali/API_3" target="_blank" rel="noopener noreferrer">Ver no GitHub</a>
        </div>

        {/* Projeto 4 */}
        <div className="project-card">
          <img src={api_Chamados} alt="Sistema de Gestão de Chamados" className="project-image" />
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