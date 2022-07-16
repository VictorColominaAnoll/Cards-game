import { Navbar, Nav, Container } from 'react-bootstrap'

export function Menu() {
    return (
        <Navbar style={{ marginBottom: "20px" }} bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">Card game</Navbar.Brand>
                <Nav className="me-auto">
                </Nav>
            </Container>
        </Navbar>
    )
}