import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

function ProductsTitle() {
  return (
    <Container>
      <Card className="text-center">
        <Card.Header className="bg-white text-dark">
          <Card.Title><strong>Produtos</strong></Card.Title>
        </Card.Header>
      </Card>
    </Container>
  );
}

export default ProductsTitle;
