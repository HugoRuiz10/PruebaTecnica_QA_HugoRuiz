// cypress/pages/forgotPasswordPage.js
class ForgotPasswordPage {
  visit() {
    cy.visit('https://opencart.abstracta.us/index.php?route=account/forgotten');
  }

  resetPassword(email) {
    cy.get('#input-email').type(email);
    cy.get('input[type="submit"][value="Continue"]').click();
  }
}

export default ForgotPasswordPage;
