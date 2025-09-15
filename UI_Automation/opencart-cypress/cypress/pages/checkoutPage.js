class CheckoutPage {
  visit() {
    cy.visit('https://opencart.abstracta.us/index.php?route=checkout/checkout')
  }

  fillBillingDetails(firstName, lastName, address) {
    cy.get('#input-payment-firstname').clear().type(firstName)
    cy.get('#input-payment-lastname').clear().type(lastName)
    cy.get('#input-payment-address-1').clear().type(address)
  }

  fillDeliveryDetails(address) {
    cy.get('#input-shipping-address-1').clear().type(address)
  }

  selectDeliveryMethod() {
    cy.get('input[name="shipping_method"]').first().check()
  }

  selectPaymentMethod() {
    cy.get('input[name="payment_method"]').first().check()
  }

  acceptTermsAndConditions() {
    cy.get('input[name="agree"]').check({ force: true })
  }

  clickPaymentAddress() {
    cy.get('#button-payment-address').should('be.visible').click()
    this.closeAnyPopup()
  }

  clickShippingAddress() {
    cy.get('#button-shipping-address').should('be.visible').click()
    this.closeAnyPopup()
  }

  clickShippingMethod() {
    cy.get('#button-shipping-method').should('be.visible').click()
    this.closeAnyPopup()
  }

  clickPaymentMethod() {
    cy.get('#button-payment-method').should('be.visible').click()
    this.closeAnyPopup()
  }

  clickReviewButton() {
    // Forzar activación de la pestaña Review
    cy.get('#tab-review', { timeout: 20000 }).then($tab => {
      $tab.addClass('active')
      $tab.css('display', 'block')
    })

    // Clic seguro con force
    cy.get('#button-review', { timeout: 20000 }).click({ force: true })
  }

  closeAnyPopup() {
    cy.get('body').then($body => {
      if ($body.find('.modal, .popup, .fancybox-overlay').length > 0) {
        cy.get('.modal .close, .popup .close, .fancybox-close').each($btn => {
          cy.wrap($btn).click({ force: true })
        })
      }
    })
  }
}

export default CheckoutPage
