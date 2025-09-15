// cypress/pages/productPage.js
class ProductPage {
  goToLaptopsNotebooks() {
    cy.contains('Laptops & Notebooks', { timeout: 20000 }).click();
    cy.contains('Show All Laptops & Notebooks', { timeout: 20000 }).click();
  }

  addMacBookPro() {
    cy.contains('MacBook Pro', { timeout: 20000 }).click();
    cy.get('#button-cart').click();
  }

  searchAndAddTablet(tabletName) {
    cy.get('input[name="search"]').type(tabletName + '{enter}');
    cy.contains(tabletName, { timeout: 20000 }).click();
    cy.get('#button-cart').click();
  }
}

export default ProductPage;
