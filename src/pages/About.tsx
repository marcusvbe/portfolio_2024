import React from 'react';
import './About.css';
import ImageLoader from '../components/ImageLoader';
import fotoProfissional from '../assets/foto_profissional.jpg';

const About: React.FC = () => {
    return (
        <div className="about-container">
            <h2 className="about-title">Sobre Mim</h2>
            <hr/>
            <div className="about-content">
                <div className="about-text">
                    <p>
                        Fiz graduação em Ciências Sociais pela Universidade de São Paulo e trabalho como tradutor de inglês para português há 8 anos. 
                        Meu interesse pela programação surgiu com o trabalho de tradução. Traduzir envolve lidar com muitos programas de computador, 
                        como as CAT tools (ferramentas de auxílio à tradução), conversões de arquivos, etc.
                    </p>
                    <p>
                        Estou cursando o 4º semestre do curso de Desenvolvimento de Software Multiplataforma na FATEC "Professor Jessen Vidal" – São José dos Campos – SP. 
                        Tenho mais interesse pela área de back-end, especialmente desenvolvimento em Java com Spring Boot e TypeScript com Node.js.
                    </p>
                    <p>
                        Atualmente, busco oportunidades para aplicar meus conhecimentos em desenvolvimento de software, 
                        especialmente em posições que me permitam trabalhar com tecnologias back-end modernas.
                    </p>
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