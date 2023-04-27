describe('template spec', () => {  
  it('Расчет', () => {
    cy.visit('https://www.jde.ru/');
    cy.get(':nth-child(4) > .nav-link').click();
    cy.get('.service-list2 > :nth-child(2) > a').click();
    cy.get(':nth-child(1) > .form-group > .form-control').select('Москва');
    cy.get(':nth-child(2) > .form-group > .form-control').select('Владикавказ');
    cy.get(':nth-child(1) > .form-group > .input-group > .form-control').type('25');
    cy.get(':nth-child(2) > .form-group > .input-group > .form-control').type('2');
    cy.get('.btn-danger').click();
    cy.contains('9149');
    })
  })