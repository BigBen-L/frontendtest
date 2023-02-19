describe('Assessment view test', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('This is a mock e2e test', () => {
        cy.get('button').should('be.visible')
    })
});

