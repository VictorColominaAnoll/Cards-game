import { create, findAll, joinGame } from "game/Repository";
import { useState, useEffect } from "react";
import { Container, Row, Col, Button, FormControl } from "react-bootstrap";

export function Lobby() {

    const [games, setGames] = useState([])

    const findGames = async () => {
        setGames(await findAll());
    }

    useEffect(() => findGames(), []);

    const [name, setName] = useState("");
    const createGame = async () => {
        await create(name);
        findGames();
    }

    return (
        <Container fluid>
            <Row>
                <Col />
                <Col md={4}>
                    <h1>Crea un juego nuevo</h1>
                    <FormControl
                        placeholder="Ejemplo: Juego 1"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        aria-describedby="inputGroup-sizing-sm"
                    />
                    <Button onClick={createGame} style={{ marginTop: "20px", width: "100%" }} size={"lg"} variant="success">CREAR</Button>
                </Col>
                <Col md={2}>
                    <div style={{ borderLeft: "6px solid #212529", height: "100%", width: "1px", margin: "auto" }}></div>
                </Col>
                <Col md={4}>
                    <h1>Unete a un juego</h1>
                    <JoinGames games={games} />
                </Col>
                <Col />
            </Row>
        </Container>
    )
}

function JoinGames({ games }) {

    console.log(games)

    const join = async (id) => {
        await joinGame(id);
    }

    return games.map(game => <li key={game.id} onClick={() => join(game.id)}>{game.id}</li>)
}