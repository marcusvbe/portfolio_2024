import React from 'react';
import './Contact.css';
import linkedinIcon from '../assets/icon-linkedin.svg';
import githubIcon from '../assets/icons8-github.svg';
import emailIcon from '../assets/envelope.svg';

const Contact: React.FC = () => {
    return (
        <div className="contact-container">
            <h2 className="contact-title">Contato</h2>
            <hr className="contact-divider"/>
            <div className="contact-links">
                <div className="contact-item">
                    <img src={linkedinIcon} alt="LinkedIn" className="contact-icon"/>
                    <a href="https://www.linkedin.com/in/marcus-betti-715b6614a/" target="_blank" rel="noopener noreferrer">linkedin.com/in/marcus-betti-715b6614a/</a>
                </div>
                <div className="contact-item">
                    <img src={githubIcon} alt="GitHub" className="contact-icon"/>
                    <a href="https://github.com/marcusvbe" target="_blank" rel="noopener noreferrer">github.com/marcusvbe</a>
                </div>
                <div className="contact-item">
                    <img src={emailIcon} alt="Email" className="contact-icon"/>
                    <a href="mailto:marcusbetti@gmail.com">marcusbetti@gmail.com</a>
                </div>
            </div>
        </div>
    );
};

export default Contact;