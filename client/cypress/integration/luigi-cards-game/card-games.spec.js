describe("Let's play the card game", () => {

    it("should visit the game address", () => {
        cy.intercept('GET', 'http://localhost:8080/api/cards', {
            statusCode: 200,
            body: [
                {
                    id: 1,
                    content: "❤️"
                },
                {
                    id: 2,
                    content: "❤️"
                }
            ]
        }).as("getCards")

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