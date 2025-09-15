// cypress/pages/registrationPage.js
class RegistrationPage {
  visit() {
    cy.visit('https://opencart.abstracta.us/index.php?route=account/register');
  }

  fillRegisterForm(firstName, lastName, email, telephone, password) {
    cy.get('#input-firstname').type(firstName);
    cy.get('#input-lastname').type(lastName);
    cy.get('#input-email').type(email);
    cy.get('#input-telephone').type(telephone);
    cy.get('#input-password').type(password);
    cy.get('#input-confirm').type(password);
    cy.get('input[name="agree"]').check();
  }

  submitRegister() {
    cy.get('input[type="submit"][value="Continue"]').click();
  }
}

export default RegistrationPage;
