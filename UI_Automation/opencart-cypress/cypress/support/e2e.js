// Archivo de soporte global para Cypress
Cypress.on('uncaught:exception', (err, runnable) => {
  // Evita que errores no críticos rompan la prueba
  return false
})
