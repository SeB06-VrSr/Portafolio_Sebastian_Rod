describe('Login en DemoBlaze', () => {
  beforeEach(() => {
    cy.clearCookies() // Limpiar cookies antes de cada prueba para que se borren datos de sesiones anteriores
    cy.visit('https://www.demoblaze.com/')
  })

  it('Realizar proceso de Login', () => {
    cy.get('#login2').click()
    cy.get('#loginusername').click()
    cy.get('#loginusername').type('BlasterOne')
    cy.get('#loginpassword').type('123456', { delay: 80 })
    cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()  
    cy.contains('Welcome BlasterOne').should('be.visible')
    cy.wait(2000)
  })

  it('Realizar compra de producto', () => {
    cy.get(':nth-child(1) > .card > .card-block > .card-title > .hrefch').click()
    cy.wait(2000)
    cy.get('.col-sm-12 > .btn').click()
    cy.wait(2000)    
    cy.get('#cartur').click()
    cy.wait(2000)
    cy.get('.col-lg-1 > .btn').click()
    cy.wait(2000)
    cy.get('#name').click()

    cy.wait(3000)

    cy.get('#name').type('BlasterOne')
    cy.get('#country').click()
    cy.get('#country').type('Colombia', {delay: 80})
    cy.get('#city').click()
    cy.get('#city').type('Bogota',{delay: 80})
    cy.get('#card').click()
    cy.get('#card').type('77728327424782', {delay: 80})
    cy.get('#month').click()
    cy.get('#month').type('July', {delay: 80})
    cy.get('#year').click()
    cy.get('#year').type('2023', {delay: 80})
    cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
    cy.get('.confirm').click()
    cy.wait(3000)
  })

})
