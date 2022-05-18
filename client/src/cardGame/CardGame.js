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

    const [cards, setCards] = useState([]);

    useEffect(async () => {
        setCards(await Repository.getCards())
    }, []);

    const [isActive, setIsActive] = useState(false);
    const [selected, setSelected] = useState([])

    const isValidMovement = (id) => isTheSecondCardTheCardPreviouslySelected(id) && areTheContentCardsEquals(id) && areCardsNextToEachOther(id);
    const isFirstCardSelected = () => selected.length === 0;
    const isTheSecondCardTheCardPreviouslySelected = (id) => selected[0] !== id
    const isTheCardSelected = (card, id) => card.id === id || card.id === selected[0];
    const getSelectedCards = (id) => cards.filter(card => isTheCardSelected(card, id));
    const areTheContentCardsEquals = (id) => {
        const selectedCards = getSelectedCards(id);
        return selectedCards[0].content === selectedCards[1].content;
    }

    const areCardsNextToEachOther = (id) => {
        const selectedCards = getSelectedCards(id);
        const distanceBetweenSelectedCards = selectedCards[1].id - selectedCards[0].id;
        const areCardsNextToEachOther = distanceBetweenSelectedCards === 1;
        const areCardsInTopOfEachOther = distanceBetweenSelectedCards === 5;
        
        return areCardsNextToEachOther || areCardsInTopOfEachOther
    }

    const checkSelected = (id) => {
        if (isFirstCardSelected())
            setSelected([id]);
        else {
            if (isValidMovement(id)) {
                setCards(cards.map(card => isTheCardSelected(card, id) ?
                    {
                        ...card,
                        show: false
                    }
                    :
                    card
                ))
            }

            setSelected([]);
        }
    }

    return (
        <>
            <Container>
                <h1>Card game</h1>
                <Row type="flex" gutter={[8, 8]}>
                    {
                        cards.map(card => card.show ? (
                            <Col style={colStyle}>
                                <span data-testid={"card-" + card.id} className={isActive ? "cards selected" : "cards"} onClick={() => {
                                    setIsActive(!isActive);
                                    checkSelected(card.id);
                                }}>{card.content}</span>
                            </Col>
                        ) : (<></>)
                        )
                    }
                </Row>
            </Container>
        </>
    )
}