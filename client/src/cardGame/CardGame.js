import { useEffect, useState } from "react"
import * as Repository from "./Repository"
import { Row, Col } from "antd"
import { Container } from "react-bootstrap";

export function CardGame() {

    const colStyle = {
        width: "18%",
        textAlign: "center",
        padding: "25px",
        border: "1px solid",
        fontSize: "40px",
        margin: "0 5px"
    }

    const [cards, setCards] = useState([])

    useEffect(async () => {
        setCards(await Repository.getCards())
    }, []);

    const [isActive, setIsActive] = useState(false);
    const [deleted, setDeleted] = useState(false);
    const [selected, setSelected] = useState([])

    const isFirstCardSelected = () => selected.length === 0;
    const isTheSecondCardTheCardPreviouslySelected = (id) => selected[0] !== id

    const checkSelected = (id) => {
        if (isFirstCardSelected())
            setSelected([id])
        else {
            if (isTheSecondCardTheCardPreviouslySelected(id))
                setDeleted(true)

            setSelected([])
        }
    }

    return (
        <>
            <Container>
                <h1>Card game</h1>
                <Row type="flex" gutter={[8, 8]}>
                    {
                        cards.map(card => {
                            return (
                                <Col style={colStyle} className={deleted ? "hide" : ""}>
                                    <span data-testid={"card-" + card.id} className={isActive ? "cards selected" : "cards"} onClick={() => {
                                        setIsActive(!isActive);
                                        checkSelected(card.id);
                                    }}>{card.content}</span>
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>
        </>
    )
}