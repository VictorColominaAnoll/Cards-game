import { Container, Row, Col, FormControl, Button } from "react-bootstrap";
import { useState } from 'react';
import { create } from "player/Repository";

export function Home() {

    const [username, setUsername] = useState("");

    const createPlayer = () => {
        create(username)
    }

    return (
        <Container fluid>
            <Row>
                <Col />
                <Col md={4}>
                    <h1>Introduce tu nombre de jugador</h1>
                    <FormControl
                        placeholder="Ejemplo: Willyrex"
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                        ria-label="Cantidad"
                        aria-describedby="inputGroup-sizing-sm"
                    />
                    <Button onClick={createPlayer} style={{ marginTop: "20px", width: "100%" }} size={"lg"} variant="dark">ENTRAR</Button>
                </Col>
                <Col />
            </Row>
        </Container>
    )
}