import { useState } from "react"

export function CardGame() {

    const [isActive, setIsActive] = useState(false);
    const [deleted, setDeleted] = useState(false)

    return (
        <>
            <h1>Card game</h1>
            <div>
                <div className={deleted ? "hide" : ""}>
                    <span data-testid="card-1" className={isActive ? "cards selected" : "cards"} onClick={() => {
                        setIsActive(!isActive);
                    }}>❤️</span>
                </div>
                <div className={deleted ? "hide" : ""}>
                    <span data-testid="card-2" className={isActive ? "cards selected" : "cards"} onClick={() => {
                        setIsActive(!isActive);
                        setDeleted(true)

                    }}>❤️</span>
                </div>
            </div>
        </>
    )
}