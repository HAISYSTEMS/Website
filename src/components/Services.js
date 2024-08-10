import React from 'react';
import { Container, Card, Col, Row } from 'react-bootstrap';
import service1 from '../assets/service1.png';
import service2 from '../assets/service2.png';
import service3 from '../assets/service3.png';

function Services() {
  return (
    <Container>
      <Row xs={1} md={3} className="g-4">
        {Array.from({ length: 10 }).map((_, idx) => (
          <Col key={idx}>
            <Card className="service-card">
              <Card.Img variant="top" src={idx === 0 ? service1 : idx === 1 ? service2 : service3} />
              <Card.Body>
                <Card.Title>
                  <strong>{idx === 0 ? 'Consultoria em Tecnologia da Informação' : idx === 1 ? 'Desenvolvimento de Software' : idx === 2 ? 'Engenharia de Dados' 
                    : idx ===3 ? 'Soluções em Nuvem' : idx===4 ? 'Desenvolvimento de Websites e E-commerce' : idx ===5 ? 'Suporte Técnico e Manutenção' : idx === 6 ? 'Desenvolvimento de Aplicações e Sistemas Personalizados'
                    : idx === 7 ? 'HELPDESK, ASSISTÊNCIA E MANUTENÇÃO DE SISTEMAS E TI' : idx === 8 ? 'COMPRA DE DOMÍNIO ALOJAMENTO E EMAIL PERSONALIZADO' : 'REDES' }</strong>
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Services;
