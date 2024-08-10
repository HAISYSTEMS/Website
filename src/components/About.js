import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function About() {
  return (
    <Container className="d-flex justify-content-center mt-4">
      <Row className="justify-content-center">
        {[
          'Primary',
          'Secondary',
          'Success',
        ].map((variant) => (
          <Col xs={12} sm={6} md={4} lg={3} key={variant} className="mb-4 d-flex">
            <Card
              bg={variant.toLowerCase()}
              text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
              className="custom-card" // Add custom class for styling
            >
              <Card.Header>
                <Card.Title>
                  <strong>
                    {variant === 'Primary' ? "Missão" : 
                     variant === "Secondary" ? "Visão" : "Valores"}
                  </strong>
                </Card.Title>
              </Card.Header>
              <Card.Body>
                {variant === 'Primary' ? 
                  (
                    <Card.Text className='text-justify'>
                      "A nossa missão na HAINIS é fornecer soluções tecnológicas inovadoras e personalizadas para
                       empresas em Moçambique e além, através do desenvolvimento de sistemas de gestão eficientes
                        e serviços de informática de alta qualidade. Comprometemo-nos a ajudar nossos clientes a 
                        alcançar seus objetivos de negócios com soluções que promovem eficiência, 
                        agilidade e crescimento."
                    </Card.Text>
                  ) : variant === "Secondary" ? 
                  (
                    <Card.Text className='text-justify'>
                      A HAINIS aspira a ser a líder em soluções tecnológicas em Moçambique, reconhecida pela excelência
                       no desenvolvimento de sistemas e serviços de informática. Visamos transformar o cenário tecnológico
                        do país, impulsionando a inovação e capacitando empresas a prosperar em um ambiente digital em 
                        constante evolução."
                    </Card.Text>
                  ) : 
                  (                    
                    <Card.Text className='text-justify'>
                      <ul className='list-style-none'>
                        <li className='list-item-icon'>🚀 Inovação</li>
                        <li className='list-item-icon'>🏆 Excelência</li>
                        <li className='list-item-icon'>🔍 Integridade</li>
                        <li className='list-item-icon'>🔗 Compromisso</li>
                        <li className='list-item-icon'>🌍 Responsabilidade Social</li>
                      </ul>
                    </Card.Text>
                  )
                }                
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default About;
