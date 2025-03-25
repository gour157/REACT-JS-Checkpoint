import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importer le fichier CSS de react-bootstrap
import { Container, Navbar, Card, Row, Col } from 'react-bootstrap'; // Importer les composants nécessaires depuis react-bootstrap

const App = () => {
  return (
    <>
      <div className="App">
        {/* Barre de navigation */}
        <Navbar bg="dark" variant="dark" expand="lg">
          <Navbar.Brand href="#">Mon Application React</Navbar.Brand>
        </Navbar>

        {/* Contenu principal */}
        <Container className="mt-4">
          <h1 className="text-center">Bienvenue dans mon projet React !</h1>
          <Row>
            {/* Cartes */}
            <Col md={4}>
              <Card>
                <Card.Body>
                  <Card.Title>Carte 1</Card.Title>
                  <Card.Text>Contenu de la première carte.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card>
                <Card.Body>
                  <Card.Title>Carte 2</Card.Title>
                  <Card.Text>Contenu de la deuxième carte.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card>
                <Card.Body>
                  <Card.Title>Carte 3</Card.Title>
                  <Card.Text>Contenu de la troisième carte.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default App;
