import React from 'react';
import footerBg from '../assets/banner-bg.png'; // Import your background image
import companyLogo from '../assets/logo.png'; // Import your company logo
import { Container, Card, Col, Row } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="footer" style={{ backgroundImage: `url(${footerBg})` }}>
        <Container>
            <p>
                <p></p>
            </p>
        <Row xs={1} md={3} className="g-4">
            {Array.from({ length: 3 }).map((_, idx) => (
            <Col key={idx}>

                {idx===0 ? (
                    <Card className="no-background text-white">
                        <Card.Body>
                        <div className="map-container">
                            <iframe
                                title="Google Map"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d279.1581339297409!2d32.553613797203155!3d-25.929483242634422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ee69bfcef7ec12b%3A0xf251b3c89c9ff2e0!2sHAI%20NATIONAL%20AND%20INTERNATIONAL%20SERVICES%2C%20LDA!5e1!3m2!1sen!2smz!4v1723290564615!5m2!1sen!2smz"
                                width="100%"
                                height="250"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                            ></iframe>
                        </div>
                    </Card.Body>
                </Card>
                ) : (
                    idx === 1 ? 
                    (
                    <Card className="no-background text-white">
                        <Card.Body>
                        <div className="info-container">
                            <img src={companyLogo} alt="Company Logo" className="logo" />
                            <div className="contact-info">
                                <p><strong>Contact Us:</strong></p>
                                <p>Email: hainislda@gmail.com</p>
                                <p>Phone: (258) 871442019</p>
                                <p>R. da Acácias, Maputo</p>
                            </div>
                            </div>
                        </Card.Body>
                    </Card>
                    )
                    : (
                    <Card className=" no-background text-white">
                        <Card.Body>
                            <Card.Text className='text-justify'>
                                <ul className='list-style-none'>
                                    <li><a href="/about">🔗 Sobre-nós</a></li>
                                    <li><a href="/services">🔗 Serviços</a></li>
                                    <li><a href="/contact">🔗 Produtos</a></li>
                                    <li><a href="/privacy">🔗 Contactos</a></li>
                                </ul>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    ))
                }
            </Col>
            ))}
        </Row>
    </Container>
    
    <p></p>
    </footer>
  );
}

export default Footer;
