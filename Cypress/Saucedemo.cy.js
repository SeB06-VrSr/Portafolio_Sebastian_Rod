describe('Flujo de compra en saucedemo.com', () => {
  beforeEach(() => {
    cy.clearCookies() // Limpiar cookies antes de cada prueba para que se borren datos de sesiones anteriores
    cy.visit('https://www.saucedemo.com/')
  })

  it('Autenticarse y realizar la compra', () => {
    // Autenticación con el usuario: standard_user y password: secret_sauce
    cy.get('[data-test="username"]').type('standard_user', { delay: 80 })
    cy.get('[data-test="password"]').type('secret_sauce', { delay: 80 })
    cy.get('[data-test="login-button"]').click()

    // Tiempo de espera para 
    cy.wait(3000)

    // Agregar dos productos al carrito
    cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click()
    cy.get('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click()

    // Tiempo de espera para que se agreguen los productos al carrito
    cy.wait(3000)

    // Visualizar el carrito
    cy.get('.shopping_cart_link').click()

    // Tiempo de espera para observar el carrito de compras
    cy.wait(3000)

    // Completar el formulario de compra
    cy.get('[data-test="checkout"]').click()
    cy.get('[data-test="firstName"]').type('Sebastian', { delay: 80 })
    cy.get('[data-test="lastName"]').type('Rodriguez', { delay: 80 })
    cy.get('[data-test="postalCode"]').type('111511', { delay: 80 })
    cy.get('[data-test="continue"]').click()

    // Tiempo de espera al diligenciamiento del formulario de datos personales
    cy.wait(3000)

    // Finalización de la compra con la visualización del enunciado de "THANK YOU FOR YOUR ORDER"
    cy.get('[data-test="finish"]').click()
    cy.get('.complete-header')
  })
})
