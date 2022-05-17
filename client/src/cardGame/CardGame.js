import { useEffect, useState } from "react"
import * as Repository from "./Repository"

export function CardGame() {


    const [cards, setCards] = useState([])

    useEffect(async () => {
        setCards(await Repository.getCards())
    }, []);

    const [isActive, setIsActive] = useState(false);
    const [deleted, setDeleted] = useState(false);
    const [selected, setSelected] = useState([])

    const checkSelected = (id) => {
        if (selected.length === 0)
            setSelected([id])
        else {
            if (selected[0] !== id)
                setDeleted(true)

            setSelected([])
        }
    }

    return (
        <>
            <h1>Card game</h1>
            <div>
                {
                    cards.map(card => {
                        return (
                            <div className={deleted ? "hide" : ""}>
                                <span data-testid={"card-" + card.id} className={isActive ? "cards selected" : "cards"} onClick={() => {
                                    setIsActive(!isActive);
                                    checkSelected(card.id);
                                }}>❤️</span>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}