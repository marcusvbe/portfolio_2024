import React from 'react';
import './Footer.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        {/* <p className="footer-name">Marcus Betti</p> */}
        <div className="social-links">
          <a
            href="mailto:marcusbetti@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Enviar email para Marcus Betti"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://github.com/marcusvbe"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visitar GitHub de Marcus Betti"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/marcus-betti-715b6614a/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visitar LinkedIn de Marcus Betti"
          >
            <FaLinkedin />
          </a>
          {/* Adicione mais ícones conforme necessário */}
        </div>
        <p>&copy; {new Date().getFullYear()} Marcus Betti. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;