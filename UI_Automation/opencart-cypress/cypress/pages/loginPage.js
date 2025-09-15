// cypress/pages/loginPage.js
class LoginPage {
  visit() {
    cy.visit('https://opencart.abstracta.us/index.php?route=account/login');
  }

  login(email, password) {
    cy.get('#input-email').type(email);
    cy.get('#input-password').type(password);
    cy.get('input[type="submit"][value="Login"]').click();
  }
}

export default LoginPage;
