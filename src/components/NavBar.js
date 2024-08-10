import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/logo.png';
import facebook from '../assets/hainis_facebook.png';
import whatsapp from '../assets/hainis_whatsapp.png';
import twitter from '../assets/hainis_twitter.png';
import instagram from '../assets/hainis_instagram.png';
import email from '../assets/hainis_email.png';

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    };

    return (
        <Navbar expand="lg" className={`navbar ${scrolled ? 'scrolled' : ''} fixed`}>
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} alt="Logotipo" className='logo'/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className='navbar-toggler-icon'></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav" className='vvd'>
                    <Nav className="mx-auto">
                        <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}><b>INICIO</b></Nav.Link>
                        <Nav.Link href="#about" className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('about')}><b>HAINIS</b></Nav.Link>
                        <Nav.Link href="#products" className={activeLink === 'products' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('products')}><b>SERVIÇOS</b></Nav.Link>
                        <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}><b>PRODUTOS</b></Nav.Link>
                        <Nav.Link href="#footer" className={activeLink === 'footer' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('footer')}><b>CONTACTOS</b></Nav.Link>
                    </Nav>
                    <span className='navbar-text'>
                        <div className='social-icon'>
                            <a href='#'><img src={facebook} alt='Facebook' /></a>
                            <a href='#'><img src={whatsapp} alt='' /></a>
                            <a href='#'><img src={twitter} alt='' /></a>
                            <a href='#'><img src={instagram} alt='' /></a>
                            <a href='#'><img src={email} alt='' /></a>
                        </div>
                    </span>
                </Navbar.Collapse>

            </Container>
        </Navbar>
    );
};
