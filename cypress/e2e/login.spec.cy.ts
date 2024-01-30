require('dotenv').config();

describe('Login', () => {


  beforeEach(() => {
    cy.visit('/');
    cy.url().should('include', 'login');
  });

  it('should not login if the form is invalid', () => {
  
    cy.get('input[name="name"]').type(`${process.env["USER_LOGIN"]}`);

    cy.get('a').contains('Login').click();
   
    cy.url().should('not.include', 'gemuse');
  });

  it('should login if the form is valid', () => {
    cy.login()

   
    cy.url().should('include', 'gemuse');
  });
});
