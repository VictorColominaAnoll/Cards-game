import { Col } from "react-bootstrap";

export function Dice({ img }) {
    return (
        <Col md={1}>
            <img style={{ width: "100%" }} src={img} alt="dice"></img>
        </Col>
    )
}