import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { GiLaptop } from 'react-icons/gi';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Footer from './components/Footer';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ScrollToTop from './components/ScrollToTop';
import { HashLink } from 'react-router-hash-link';

function App() {
  React.useEffect(() => {
    AOS.init({
      duration: 1000, // Duração da animação em milissegundos
      once: true, // Se a animação deve ocorrer apenas uma vez enquanto rola para baixo
    });
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <Navbar variant="dark" expand="lg" className="custom-navbar" fixed="top">
        <Container className="navbar-container">
          <Navbar.Brand as={Link} to="/" className="d-flex align-items-center navbar-left">
            <GiLaptop size={35} />
            <span className="ms-2">Portfólio</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="navbar-right">
              <Nav.Link as={Link} to="/#about">sobre mim</Nav.Link>
              <Nav.Link as={Link} to="/#contact">contato</Nav.Link>
              <Nav.Link as={HashLink} smooth to="/projetos#top">projetos</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container fluid className="mt-4 mb-0">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projetos" element={<Projects />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;