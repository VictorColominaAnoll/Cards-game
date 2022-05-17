import { useState } from "react"

export function CardGame() {

    const [isActive, setIsActive] = useState(false);

    return (
        <>
            <h1>Card game</h1>
            <div>
                <div>
                    <span data-testid="card-1" className={isActive ? "cards selected" : "cards"} onClick={() => setIsActive(!isActive)}>❤️</span>
                </div>
                <div>
                    <span data-testid="card-2" className={isActive ? "cards selected" : "cards"} onClick={() => setIsActive(!isActive)}>❤️</span>
                </div>
            </div>
        </>
    )
}