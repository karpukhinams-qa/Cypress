describe('template spec', () => {
  it('Авторизация', () => {
    cy.visit('https://www.jde.ru/');
    cy.get(':nth-child(4) > .nav-link').click();
    cy.get('.service-list2 > :nth-child(1) > [href="https://i.jde.ru/"]').click();
    cy.visit('https://i.jde.ru/');
    cy.get('.js-popup-login-enter__login').type('marina_il@inbox.ru');
    cy.get('.js-popup-login-enter__password').type('marina');
    cy.get('.form-dl > .button').click();
    })
  })