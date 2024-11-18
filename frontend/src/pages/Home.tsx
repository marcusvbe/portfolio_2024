import React, { useEffect, useState } from 'react';
import { Alert } from 'react-bootstrap';
import './Home.css';

const Home: React.FC = () => {
    const [message, setMessage] = useState<string>('');

    useEffect(() => {
        fetch('/api/', {
            headers: {
                'Accept': 'text/plain'
            }
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.text();
            })
            .then(data => setMessage(data))
            .catch(error => {
                console.error('Erro ao buscar dados:', error);
                setMessage('Erro ao carregar dados do servidor');
            });
    }, []);

    return (
        <div className="home-container">
            <h1 id="titulo-index">Seja bem-vindo!</h1>
            <h2 id="subtitulo-index">Portfólio de Marcus Betti</h2>
            {message && <Alert variant="success">{message}</Alert>}
            <div className="texto-index">Aluno do curso de Desenvolvimento de Software Multiplataforma</div>
            <div className="texto-index">FATEC "Professor Jessen Vidal" – São José dos Campos – SP</div>
            <div className="texto-index">4º Semestre</div>
        </div>
    );
};

export default Home;