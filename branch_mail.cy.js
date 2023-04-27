describe('template spec', () => {  
    it('Филиал', () => {
    cy.visit('https://www.jde.ru/');
    cy.get(':nth-child(2) > .nav-link').click();
    cy.get('.branch-letter > :nth-child(14) > a').click();
    cy.get('[style=""] > .list-unstyled > :nth-child(20)').click();
    cy.contains('novorossiysk@jde.ru');  
    })
})