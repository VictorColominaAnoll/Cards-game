import { Col } from "react-bootstrap";

export function Dice({ img }) {
    return (
        <Col md={1}>
            <img style={{ width: "100%", maxHeight: "131px" }} src={img} alt="dice"></img>
        </Col>
    )
}