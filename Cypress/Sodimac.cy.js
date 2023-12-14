describe('Flujo de compra en saucedemo.com', () => {
  beforeEach(() => {
    cy.clearCookies() // Limpiar cookies antes de cada prueba para que se borren datos de sesiones anteriores
    cy.visit('https://www.homecenter.com.co/homecenter-co/')
  })

  it('Agregar e ir al carrito de compras ', () => {
    //Acceder al apartado de nuevos productos
    cy.get('//DIV[@class="IconAndInformationItem-module_item-icon-title__-u778 text-center"][text()="Encuentra nuevos productos"]/self::DIV').click()
    //Seleccionar el producto "Espejo Deco"
    cy.get('//IMG[@id="896561"]/self::IMG').click()

    //Tiempo de espera para la selección del producto
    cy.wait(3000)

    //Dar clic en el botón "Agregar al carro"
    cy.get('//BUTTON[@id="testId-btn-add-to-cart"]/self::BUTTON').click()
 
    //Tiempo de espera para el despliegue de modal para ir al carro de compras
    cy.wait(3000)

    //Ir al carro de compras
    cy.get('//BUTTON[@id="testId-btn-goto-cart-button"]/self::BUTTON').click()  
  })
})
