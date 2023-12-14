describe('Login en DemoBlaze', () => {
  beforeEach(() => {
    cy.clearCookies() // Limpiar cookies antes de cada prueba para que se borren datos de sesiones anteriores
    cy.visit('https://www.demoblaze.com/')
  })

  it('Realizar proceso de Login', () => {
    // Autenticación con el usuario: standard_user y password: secret_sauce
    cy.get('#login2').click()
    cy.get('#loginusername').click()
    cy.get('#loginusername').type('BlasterOne', { delay: 100 })
    cy.get('#loginpassword').type('123456', { delay: 80 })
    cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()  
    cy.contains('Welcome BlasterOne').should('be.visible')
  })
})
