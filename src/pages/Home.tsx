import About from './About';
import Contact from './Contact';
import './Home.css';

const Home: React.FC = () => {

    return (
        <div>
            {/* Seção Início */}
            <section id="home" className="home-section">
                <div className="home-container">
                    <h1 id="titulo-index" data-aos="fade-down">Seja bem-vindo!</h1>
                    <h2 id="subtitulo-index" data-aos="fade-up">Portfólio de Marcus Betti</h2>
                    {/* {message && <Alert variant="success">{message}</Alert>} */}
                    <div className="texto-index" >Desenvolvedor de software em formação</div>
                    <div className="texto-index" >FATEC – São José dos Campos – SP</div>
                </div>
            </section>

            {/* Seção Sobre */}
            <section id="about" className="about-section" data-aos="zoom-in">
                <About />
            </section>

            {/* Seção Contato */}
            <section id="contact" className="contact-section" data-aos="zoom-in">
                <Contact />
            </section>

            {/* Seção Projetos */}
            {/* <section id="projetos" className="projects-section" data-aos="fade-up">
                {/* Opcional: Você pode incluir link para projetos diretamente aqui ou manter na página Projects */}
            {/* </section> */}
        </div>
    );
}

export default Home;