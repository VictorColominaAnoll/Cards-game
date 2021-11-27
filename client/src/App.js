import { Hand } from 'player/Hand';
import { useState } from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [dices, setDices] = useState([1, 2])

  const randomNumber = () => {
    const MAX_NUM_NOT_INCLUDED = 6;
    return Math.floor(Math.random() * MAX_NUM_NOT_INCLUDED);
  }

  const generate = () => {
    const result = []

    for (let i = 0; i < 5; i++) {
      result.push(randomNumber())
    }

    setDices(result)

  }

  return (
    <Container fluid style={{ textAlign: "center" }} >
      <Row className="sub-space">
        <h1>Apuesta actual</h1>
        <Col>
          <span style={{ fontSize: "25px" }}>3 cincos</span>
        </Col>
      </Row>

      <Row className="sub-space">
        {/* <button onClick={generate}>Generate dices</button> */}
        <h1>Mis dados</h1>
        <Hand dices={dices}></Hand>
      </Row>

      <Row className="sub-space">
        <h1>Subir apuesta</h1>
        <span style={{ fontSize: "25px" }}>3 cincos</span>
      </Row>

      <Row className="sub-space">
        <Col>
          <h1>Rechazar oferta</h1>
          <Button size={"lg"} variant="danger">¡MENTIRA!</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default App;