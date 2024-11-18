import React from 'react';
import './About.css';

const About: React.FC = () => {
    return (
        <div className="about-container">
            <h2 className="about-title">Sobre Mim</h2>
            <hr className="about-divider"/>
            <div className="about-content">
                <div className="about-text">
                    <p>
                        Fiz graduação em Ciências Sociais pela Universidade de São Paulo e trabalho como tradutor de inglês para português há 8 anos. Meu interesse pela programação surgiu com o trabalho de tradução. Traduzir envolve lidar com muitos programas de computador, como as CAT tools (ferramentas de auxílio à tradução), conversões de arquivos, etc. 
                    </p>
                    <p>
                        Estou cursando o primeiro semestre do curso de Desenvolvimento de Software Multiplataforma na FATEC "Professor Jessen Vidal" – São José dos Campos – SP. Ainda estou conhecendo as áreas da programação e tenho mais interesse pela área de back-end.
                    </p>
                </div>
                <img src="/static/img/foto_profissional.jpg" alt="Foto Profissional" className="about-image"/>
            </div>
        </div>
    );
};

export default About;