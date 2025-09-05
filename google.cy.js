describe('Google', () => {
  it('search', () => {
    cy.visit('https://www.google.com');
    cy.get('input[name="q"]').type('Cypress Testing{enter}');
    cy.title().should('include','Cypress');
  });
});
