describe("Let's play the card game", () => {

    it("should visit the game address", () => {
        mockCards([
            {
                id: 1,
                content: "❤️"
            },
            {
                id: 2,
                content: "❤️"
            }
        ]);

        cy.visit("/cards");
        cy.findByText("Card game");
    })

    it("should be able to select cards", () => {
        const card = cy.findByTestId("card-1");
        card.click()
        card.should('have.class', 'selected')

        card.click()
        card.should('not.have.class', 'selected')
    })

    it("should be able to match two equal cards that are close each other", () => {
        const card1 = selectCard("card-1");
        const card2 = selectCard("card-2");

        card1.should('not.be.visible')
        card2.should('not.be.visible')
    })
})

function selectCard(testId) {
    const card = cy.findByTestId(testId);
    card.should('have.text', '❤️');
    card.click();
    return card;
}

function mockCards(cards) {
    cy.intercept('GET', 'http://localhost:8080/api/cards', {
        statusCode: 200,
        body: cards
    }).as("getCards");
}

describe("Defining the moves the player can do", () => {
    it("should match equal cards that are near", () => {
        mockCards([
            {
                id: 1,
                content: "❤️"
            },
            {
                id: 2,
                content: "⭐"
            },
            {
                id: 3,
                content: "⭐"
            },
            {
                id: 4,
                content: "❤️"
            },
            {
                id: 5,
                content: "🐐"
            },
            {
                id: 6,
                content: "🐐"
            },
        ]);

        cy.visit("/cards");
    })
})