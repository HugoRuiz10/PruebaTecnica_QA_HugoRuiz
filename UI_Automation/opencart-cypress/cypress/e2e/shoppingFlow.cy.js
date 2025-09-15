import RegistrationPage from '../pages/registrationPage'
import LoginPage from '..//pages/loginPage'
import ForgotPasswordPage from '../pages/forgotPasswordPage'
import ProductPage from '../pages/productPage'
import CartPage from '../pages/cartPage'
import CheckoutPage from '../pages/checkoutPage'

describe("Flujo de compra en OpenCart", () => {
  const email = `hugoruiz_${Date.now()}@test.com`
  const password = 'Password123!'
  const firstName = 'Hugo'
  const lastName = 'Ruiz'
  const address = 'Calle 123, Bogotá'

  it('Registro de usuario', () => {
    const registration = new RegistrationPage()
    registration.visit()
    registration.fillRegisterForm(firstName, lastName, email, '3001234567', password)
    registration.submitRegister()

    cy.screenshot('registro_despues_de_continue')
    cy.wait(3000)

    cy.get('body', { timeout: 20000 }).then($body => {
      const text = $body.text()
      cy.log('Contenido después del registro:', text)
      if (/Congratulations! Your new account has been successfully created!/i.test(text)) {
        cy.log('✅ Registro exitoso')
      } else if (/E-Mail Address is already registered!/i.test(text)) {
        cy.log('⚠️ Correo duplicado')
      } else {
        cy.screenshot('registro_error_validacion')
        throw new Error('❌ No se encontró mensaje de éxito ni warning. Texto real: ' + text)
      }
    })
  })

  it('Login del usuario', () => {
    const login = new LoginPage()
    login.visit()
    login.login(email, password)
    cy.contains('My Account', { timeout: 15000 }).should('be.visible')
  })

  it('Restablecimiento de contraseña', () => {
    const forgot = new ForgotPasswordPage()
    forgot.visit()
    forgot.resetPassword(email)
    cy.contains('An email with a confirmation link has been sent', { timeout: 15000 }).should('be.visible')
  })


})
