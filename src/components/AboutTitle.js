import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
function AboutTitle() {
  return (
    <Container>
      <Card className="text-center">
        <Card.Header className="bg-primary text-white">
          <Card.Title><strong>Quem Somos?</strong></Card.Title>
        </Card.Header>
        <Card.Body>
          <Card.Text>
            <p className='text-justify'>
                {' '}
                    Fundada em 2022, a HAINIS é uma empresa inovadora localizada em Moçambique, especializada no desenvolvimento de sistemas e serviços de informática. Nossa equipe é composta por profissionais altamente qualificados e apaixonados pela tecnologia, dedicados a oferecer soluções que atendem às necessidades específicas de nossos clientes.
                    Na HAINIS, nosso objetivo é transformar desafios tecnológicos em oportunidades de crescimento. Desenvolvemos soluções de gestão personalizadas e oferecemos serviços de informática que ajudam empresas a otimizar seus processos e alcançar maior eficiência. Com um compromisso inabalável com a qualidade e inovação, estamos aqui para impulsionar o sucesso dos nossos clientes e contribuir para o avanço tecnológico de Moçambique.
                    Estamos empolgados com o futuro e ansiosos para construir parcerias duradouras, ajudando nossos clientes a prosperar no mundo digital.
                {' '}
            </p>
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default AboutTitle;


