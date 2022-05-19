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
                show: true,
                position: 1
            },
            {
                id: 2,
                content: "❤️",
                show: true,
                position: 2
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
                show: true,
                position: 1
            },
            {
                id: 2,
                content: "⭐",
                show: true,
                position: 2
            },
            {
                id: 3,
                content: "⭐",
                show: true,
                position: 3
            },
            {
                id: 4,
                content: "❤️",
                show: true,
                position: 4
            },
            {
                id: 5,
                content: "🐐",
                show: true,
                position: 5
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
                show: true,
                position: 1
            },
            {
                id: 2,
                content: "⭐",
                show: true,
                position: 2
            }
        ]);

        cy.visit("/cards");

        selectCard("card-1", '❤️');
        selectCard("card-2", '⭐');

        cy.contains('⭐').should('exist')
        cy.contains('❤️').should('exist')
    })

    it("should NOT be able to select two cards with same content that aren't next to each other", () => {
        mockCards([
            {
                id: 1,
                content: "❤️",
                show: true,
                position: 1
            },
            {
                id: 2,
                content: "⭐",
                show: true,
                position: 2
            },
            {
                id: 3,
                content: "❤️",
                show: true,
                position: 3
            },
        ]);

        cy.visit("/cards");

        selectCard("card-1", '❤️');
        selectCard("card-3", '❤️');

        cy.contains('⭐').should('exist')
        cy.contains('❤️').should('exist')
    })

    it("should be able to select two cards with same content vertically", () => {
        mockCards([
            {
                id: 1,
                content: "❤️",
                show: true,
                position: 1
            },
            {
                id: 2,
                content: "⭐",
                show: true,
                position: 2
            },
            {
                id: 3,
                content: "⭐",
                show: true,
                position: 3
            },
            {
                id: 4,
                content: "🐐",
                show: true,
                position: 4
            },
            {
                id: 5,
                content: "🐐",
                show: true,
                position: 5
            },
            {
                id: 6,
                content: "❤️",
                show: true,
                position: 6
            },
        ]);

        cy.visit("/cards");

        selectCard("card-1", '❤️');
        selectCard("card-6", '❤️');

        cy.contains('❤️').should('not.exist')
        cy.contains('⭐').should('exist')
        cy.contains('🐐').should('exist')
    })

    it("should be able to select two cards with the same content that aren't next to each other at the beginning", () => {
        mockCards([
            {
                id: 1,
                content: "❤️",
                show: true,
                position: 1
            },
            {
                id: 2,
                content: "⭐",
                show: true,
                position: 2
            },
            {
                id: 3,
                content: "⭐",
                show: true,
                position: 3
            },
            {
                id: 4,
                content: "❤️",
                show: true,
                position: 4
            },
        ]);

        cy.visit("/cards");

        selectCard("card-2", '⭐');
        selectCard("card-3", '⭐');

        cy.contains('❤️').should('exist')
        cy.contains('⭐').should('not.exist')

        selectCard("card-1", '❤️');
        selectCard("card-4", '❤️');

        cy.contains('❤️').should('not.exist')
        cy.contains('⭐').should('not.exist')
    })

    it("should be able to select two cards with the same content diagonally - topRight to bottomLeft", () => {
        mockCards([
            {
                id: 1,
                content: "❤️",
                show: true,
                position: 1
            },
            {
                id: 2,
                content: "⭐",
                show: true,
                position: 2
            },
            {
                id: 3,
                content: "❤️",
                show: true,
                position: 3
            },
            {
                id: 4,
                content: "🐐",
                show: true,
                position: 4
            },
            {
                id: 5,
                content: "🐐",
                show: true,
                position: 5
            },
            {
                id: 6,
                content: "⭐",
                show: true,
                position: 6
            },
            
        ]);

        cy.visit("/cards");

        selectCard("card-2", '⭐');
        selectCard("card-6", '⭐');

        cy.contains('⭐').should('not.exist')
        cy.contains('❤️').should('exist')
        cy.contains('🐐').should('exist')
    })

    it("should be able to select two cards with the same content diagonally - topLeft to bottomRight", () => {
        mockCards([
            {
                id: 1,
                content: "❤️",
                show: true,
                position: 1
            },
            {
                id: 2,
                content: "🐐",
                show: true,
                position: 2
            },
            {
                id: 3,
                content: "⭐",
                show: true,
                position: 3
            },
            {
                id: 4,
                content: "🐐",
                show: true,
                position: 4
            },
            {
                id: 5,
                content: "🐐",
                show: true,
                position: 5
            },
            {
                id: 6,
                content: "⭐",
                show: true,
                position: 6
            },
            {
                id: 7,
                content: "❤️",
                show: true,
                position: 7
            },
            {
                id: 8,
                content: "🐐",
                show: true,
                position: 8
            },
            
        ]);

        cy.visit("/cards");

        selectCard("card-1", '❤️');
        selectCard("card-7", '❤️');

        cy.contains('❤️').should('not.exist')
        cy.contains('⭐').should('exist')
        cy.contains('🐐').should('exist')
    })
});