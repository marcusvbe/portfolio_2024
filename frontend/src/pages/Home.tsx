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
        <div className="home-container text-center">
            <h1 className="home-title">Seja bem-vindo!</h1>
            <p className="home-subtitle">Portfólio de Marcus Betti</p>
            {message && <Alert variant="success">{message}</Alert>}
        </div>
    );
};

export default Home;