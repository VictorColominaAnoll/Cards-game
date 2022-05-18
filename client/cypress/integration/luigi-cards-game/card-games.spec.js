describe("Let's play the card game", () => {

    it("should visit the game address", () => {
        cy.visit("/cards");
        cy.findByText("Card game");
    })

    it("should be able to select cards", () => {
        mockCards([
            {
                id: 1,
                content: "❤️",
                show: true
            },
            {
                id: 2,
                content: "❤️",
                show: true
            }
        ]);

        const card = cy.findByTestId("card-1");
        card.click()
        card.should('have.class', 'selected')

        card.click()
        card.should('not.have.class', 'selected')
    })

    it("should be able to match two equal cards that are close each other", () => {
        selectCard("card-1", '❤️');
        selectCard("card-2", '❤️');

        cy.contains('❤️').should('not.exist')
    })
});

function selectCard(testId, content) {
    const card = cy.findByTestId(testId);
    card.should('have.text', content);
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
    it("should match cards with the same content", () => {
        mockCards([
            {
                id: 1,
                content: "❤️",
                show: true
            },
            {
                id: 2,
                content: "⭐",
                show: true
            },
            {
                id: 3,
                content: "⭐",
                show: true
            },
            {
                id: 4,
                content: "❤️",
                show: true
            },
            {
                id: 5,
                content: "🐐",
                show: true
            },
            {
                id: 6,
                content: "🐐",
                show: true
            },
        ]);

        cy.visit("/cards");

        selectCard("card-2", '⭐');
        selectCard("card-3", '⭐');

        cy.contains('⭐').should('not.exist')
        cy.contains('❤️').should('exist')
        cy.contains('🐐').should('exist')
    })

    it("should NOT match cards with different content", () => {
        mockCards([
            {
                id: 1,
                content: "❤️",
                show: true
            },
            {
                id: 2,
                content: "⭐",
                show: true
            }
        ]);

        cy.visit("/cards");

        selectCard("card-1", '❤️');
        selectCard("card-2", '⭐');

        cy.contains('⭐').should('exist')
        cy.contains('❤️').should('exist')
    })
});