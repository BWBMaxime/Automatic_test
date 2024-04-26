describe('Home Component', () => {
  beforeEach(() => {
    // Visitez votre application
    cy.visit('http://localhost:4200');
  });

  it('should display login form', () => {
    // Vérifiez que le titre "Login" est affiché
    cy.contains('Login').should('exist');

    // Vérifiez que les champs "Username" et "Password" sont présents
    cy.get('input[name="username"]').should('exist');
    cy.get('input[name="password"]').should('exist');

    // Vérifiez que le bouton de connexion est présent
    cy.contains('Login').should('exist');
  });

  it('should log username and password when login button is clicked', () => {
    // Saisissez des valeurs dans les champs "Username" et "Password"
    cy.get('input[name="username"]').type('testuser');
    cy.get('input[name="password"]').type('testpassword');

    // Cliquez sur le bouton de connexion
    cy.contains('Login').click();

  });
});
