import React from 'react';
import './About.css';
import ImageLoader from '../components/ImageLoader';
import fotoProfissional from '../assets/foto_marcus.png';
import { HashLink } from 'react-router-hash-link';
import { FaProjectDiagram } from 'react-icons/fa';

const About: React.FC = () => {
    return (
        <div className="about-container">
            <h2 className="about-title">Sobre mim</h2>
            <hr/>
            <div className="about-content">
                <div className="about-text">
                    <p>
                        Olá!{'\n'}
                        Sou apaixonado por tecnologia e programação, com uma grande curiosidade e um desejo incessante de aprender coisas novas. Atualmente, estou em transição de carreira, trazendo minha formação em Ciências Sociais pela USP – Universidade de São Paulo e 8 anos de experiência como tradutor inglês-português para ingressar na área de desenvolvimento de software. Essa mudança surgiu do meu interesse crescente por tecnologia e da vontade de enfrentar novos desafios.{'\n\n'} 
                        
                        Ainda não tenho experiência profissional em desenvolvimento de software, mas desenvolvi vários projetos acadêmicos com diversas linguagens de programação e frameworks, como Java, Spring, TypeScript, Node.js, Python, Flask, SQL, MongoDB, React e React Native.
                    </p>
                    <p>
                        Estou no 4º semestre do curso de Desenvolvimento de Software Multiplataforma na FATEC de São José dos Campos – SP. Minha experiência como tradutor aprimorou minha atenção aos detalhes, agilidade na pesquisa, criatividade para solucionar problemas dentro de restrições e excelentes habilidades de comunicação, todas essenciais na área de tecnologia.{'\n'}
                        
                    </p>
                    <p>
                        Atualmente, busco oportunidades de estágio ou posição júnior em desenvolvimento de software, onde possa contribuir com meus conhecimentos técnicos, habilidades interpessoais e vontade de aprender. Estou pronto para participar de projetos inovadores e desafiadores que me permitam crescer continuamente e me tornar um desenvolvedor cada vez melhor.{'\n'}
                    </p>
                    <p>
                        Inglês: proficiência profissional (nível C1){'\n'}
                        Certificado Cambridge English: Advanced (CAE)
                    </p>
                        <HashLink smooth to="/projetos#top" className="projects-link">
                            <FaProjectDiagram className="projects-icon" />
                            Veja alguns dos meus projetos
                    </HashLink>
                </div>
                <div className="about-image-container">
                    <ImageLoader 
                        src={fotoProfissional}
                        alt="Foto Profissional"
                        className="about-image"
                    />
                </div>
            </div>
        </div>
    );
};

export default About;