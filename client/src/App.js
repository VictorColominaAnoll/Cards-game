import { Hand } from 'player/Hand';
import { useState } from 'react';
import { Col, Container, Row, Button, Form, FormControl, InputGroup } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const randomNumber = () => {
    const MAX_NUM_NOT_INCLUDED = 6;
    return Math.floor(Math.random() * MAX_NUM_NOT_INCLUDED);
  }

  const [dices, setDices] = useState([
    randomNumber(),
    randomNumber(),
    randomNumber(),
    randomNumber(),
    randomNumber(),
  ])

  const [quantity, setQuantity] = useState(1)

  const generate = () => {
    const result = []

    for (let i = 0; i < 5; i++) {
      result.push(randomNumber())
    }

    setDices(result)

  }

  const handleOnChangeQuantity = (value) => {
    const onlyNumericValues = value.replace(/\D/g, '');

    if (onlyNumericValues == 0)
      setQuantity(1)
    else
      setQuantity(onlyNumericValues)
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

        <Col />
        <Col md={2}>
          <InputGroup>
            <InputGroup.Text id="inputGroup-sizing-sm">Cantidad</InputGroup.Text>
            <FormControl value={quantity} onChange={(event) => handleOnChangeQuantity(event.target.value)} aria-label="Cantidad" aria-describedby="inputGroup-sizing-sm" />
          </InputGroup>
          {/* <input style={{ width: "100%" }} type="number" min={1} placeholder="Introduce la cantidad" /> */}

        </Col>
        <Col md={2}>
          <Form.Select>
            <option value="1">Tucan/es</option>
            <option value="2">Dos/es</option>
            <option value="3">Tres/es</option>
            <option value="4">Cuatro/s</option>
            <option value="5">Cinco/s</option>
            <option value="6">Seis/es</option>
          </Form.Select>
        </Col>
        <Col />

        <div style={{ marginTop: "20px" }}>
          <Button style={{ width: "129px" }} size={"lg"} variant="success">APOSTAR</Button>
        </div>
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