import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './Contact.css';

const Contact: React.FC = () => {
    return (
        <div className="contact-container">
            <h2 className="contact-title">Contato</h2>
            <hr />
            
            <div className="contact-links">
                <a 
                    href="https://www.linkedin.com/in/marcus-betti-715b6614a/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="contact-link"
                >
                    <FaLinkedin className="contact-icon" />
                    <span className="contact-text">LinkedIn</span>
                </a>

                <a 
                    href="https://github.com/marcusvbe" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="contact-link"
                >
                    <FaGithub className="contact-icon" />
                    <span className="contact-text">GitHub</span>
                </a>

                <a 
                    href="mailto:marcusbetti@gmail.com"
                    className="contact-link"
                >
                    <FaEnvelope className="contact-icon" />
                    <span className="contact-text">marcusbetti@gmail.com</span>
                </a>
            </div>

            <div className="contact-additional">
                <p className="contact-description">
                    Estou sempre interessado em novas oportunidades e conexões profissionais. Será um prazer receber sua mensagem!
                </p>
            </div>
        </div>
    );
};

export default Contact;
