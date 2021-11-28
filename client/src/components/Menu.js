import { Navbar, Nav, Container } from 'react-bootstrap'

export function Menu() {
    return (
        <Navbar style={{ marginBottom: "20px" }} bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">Perudo</Navbar.Brand>
                <Nav className="me-auto">
                    {/* <Nav.Link href="/">Inicio</Nav.Link> */}
                </Nav>
            </Container>
        </Navbar>
    )
}