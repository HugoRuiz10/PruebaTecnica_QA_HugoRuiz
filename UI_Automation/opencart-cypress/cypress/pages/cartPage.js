// cypress/pages/cartPage.js
class CartPage {
  openCart() {
    cy.get('#cart-total').click();
  }

  viewCart() {
    this.openCart();
    cy.contains('View Cart', { timeout: 10000 }).click();
  }

  removeItem(itemName) {
    this.viewCart();
    cy.contains(itemName, { timeout: 20000 }).parents('tr').within(() => {
      cy.get('.btn-danger').click();
    });
  }

  updateQuantity(itemName, quantity) {
    this.viewCart();
    cy.contains(itemName, { timeout: 20000 }).parents('tr').within(() => {
      cy.get('input[type="number"], input.qty').clear().type(quantity.toString());
      cy.contains('Update').click();
    });
  }

  itemShouldNotExist(itemName) {
    this.viewCart();
    cy.contains(itemName).should('not.exist');
  }

  quantityShouldBe(itemName, quantity) {
    this.viewCart();
    cy.contains(itemName, { timeout: 20000 }).parents('tr').within(() => {
      cy.get('input[type="number"], input.qty').should('have.value', quantity.toString());
    });
  }
}

export default CartPage;
