import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

function ServicesTitle() {
  return (
    <Container>
      <Card className="text-center">
        <Card.Header className="bg-dark text-white">
          <Card.Title><strong>Serviços</strong></Card.Title>
        </Card.Header>
      </Card>
    </Container>
  );
}

export default ServicesTitle;
