import { useEffect, useState } from "react"
import * as Repository from "./Repository"
import { Row, Col, Button, Space } from "antd"
import { Container } from "react-bootstrap";

export function CardGame() {

    const colStyle = {
        width: "18%",
        textAlign: "center",
        padding: "25px",
        border: "2px solid",
        borderRadius: "3%",
        fontSize: "40px",
        margin: "0 5px",
        cursor: "pointer"
    }

    const [isGameEnd, setGameEnd] = useState(false)
    const [isGameLost, setGameLost] = useState(false)

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
        const distanceBetweenSelectedCards = selectedCards[1].position - selectedCards[0].position;
        const areCardsNextToEachOther = distanceBetweenSelectedCards === 1;
        const areCardsDiagonallyBottomLeftToTopRight = distanceBetweenSelectedCards === 4;
        const areCardsInTopOfEachOther = distanceBetweenSelectedCards === 5;
        const areCardsDiagonallyTopLeftToBottomRight = distanceBetweenSelectedCards === 6;

        return areCardsNextToEachOther || areCardsInTopOfEachOther || areCardsDiagonallyBottomLeftToTopRight || areCardsDiagonallyTopLeftToBottomRight;
    }

    const orderCards = (disorderedCards) => {
        let position = 0;

        return disorderedCards.map(card => {
            if (card.show) {
                position++
                return {
                    ...card,
                    position
                }
            }
            return card;
        })
    }

    const checkSelected = (id) => {
        if (isFirstCardSelected())
            setSelected([id]);
        else {
            if (isValidMovement(id)) {
                const disorderedCards = cards.map(card => isTheCardSelected(card, id) ? { ...card, show: false, position: undefined } : card);
                const newCards = orderCards(disorderedCards);
                setCards(newCards)
                if (checkEndGame(newCards))
                    setGameEnd(true);
                else
                    setGameLost(checkGameIsLost(newCards))
            }
            setSelected([]);
        }
    }

    const checkGameIsLost = (cardsWithUndefinedPositions) => {

        const cards = cardsWithUndefinedPositions.filter(card => { if (card.position !== undefined) return card })

        let isGameOver = true;
        for (let i = 0; i < cards.length - 1; i++) {

            const areCurrentCardAndNextOneEqual = cards[i].content === cards[i + 1].content;

            if (areCurrentCardAndNextOneEqual)
                isGameOver = false;

        }

        console.log(isGameOver)

        return isGameOver
    }

    const isThisCardActive = (id) => {
        if (selected.length === 0)
            return false

        return isActive && selected[0] === id
    }

    const checkEndGame = (newCards) => {
        let result = true;

        for (let i = 0; i < newCards.length; i++) {
            const { show } = newCards[i];

            if (show)
                result = false;
        }

        return result;
    }

    return (
        <>
            <Container>
                <h1>Card game</h1>
                {
                    isGameEnd ? (
                        <EndGameMessage />
                    ) : (
                        <>
                            {isGameLost ? (<LostGameMessage />)
                                : (
                                    <Row type="flex" gutter={[8, 8]}>
                                        {
                                            cards.map(card => card.show ? (
                                                <Col
                                                    data-testid={"card-" + card.id}
                                                    className={isThisCardActive(card.id) ? "cards selected" : "cards"}
                                                    style={colStyle}
                                                    onClick={() => {
                                                        setIsActive(!isActive);
                                                        checkSelected(card.id);
                                                    }}
                                                >
                                                    <span>{card.content}</span>
                                                </Col>
                                            ) : (<></>)
                                            )
                                        }
                                    </Row>
                                )
                            }


                        </>
                    )
                }

            </Container>
        </>
    )
}

function LostGameMessage() {
    return (
        <ShowMessage {...{ message: "Oh no... You lose!!", image: "/pepe-cry.gif" }} />
    )
}

function EndGameMessage() {
    return (
        <ShowMessage {...{ message: "Congratulations!!", image: "/clap-applause.gif" }} />
    )
}

function ShowMessage({ message, image }) {
    return (
        <Row>
            <Col md={6}></Col>
            <Col md={6} style={{ textAlign: "center" }}>
                <Space direction="vertical" size="large">
                    <h2>{message}</h2>
                    <img style={{ width: "100%" }} alt={"Clap gif"} src={process.env.PUBLIC_URL + image}></img>
                    <br></br>
                    <Button onClick={() => window.location.reload()} type="primary" size="large" shape="round">Play again</Button>
                </Space>
            </Col>
            <Col md={6}></Col>
        </Row>
    )
}