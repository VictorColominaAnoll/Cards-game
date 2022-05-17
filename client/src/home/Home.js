import { Container, Row, Col, FormControl, Button } from "react-bootstrap";
import { useState } from 'react';
import { create } from "player/Repository";
import { useNavigate, } from "react-router-dom";

export function Home() {
    let redirect = useNavigate();

    const [username, setUsername] = useState("");

    const createPlayer = async () => {
        await create(username);

        localStorage.setItem("player", username); 

        redirect("/lobby")
    }

    return (
        <Container fluid>
            <Row>
                <Col />
                <Col md={4}>
                    <h1>Introduce tu nombre de jugador</h1>
                    <FormControl
                        placeholder="Ejemplo: Monxeta"
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