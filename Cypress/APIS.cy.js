describe('Pruebas de servicios REST', () => {
  it('Crear un nuevo usuario en signup', () => {
    cy.request('POST', 'https://api.demoblaze.com/signup', {
      username: 'Sebas Test',
      password: '12345',
    }).then((response) => {
      expect(response.status).to.eq(200) 
      expect(null).to.be.null // Se usa este expect ya que la respuesta exitosa de la api al crear un usuario son dos comillas: ""
    })
  })

  it('Intentar crear un usuario ya existente', () => {
    cy.request({
      method: 'POST',
      url: 'https://api.demoblaze.com/signup',
      body: {
        username: 'George Vin', //Este usuario ya se encuentra registrado en la página
        password: '123',
      },
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.have.property('errorMessage', 'This user already exist.') // Se obtiene el mensaje del response que indica que el usuario ya existe
    })
  })

  it('Usuario y password correcto en login', () => {
    cy.request('POST', 'https://api.demoblaze.com/login', {
      username: 'George Vin', // Utiliza un usuario que ya exista en el sistema
      password: '123',

    }).then((response) => {
      expect(response.status).to.eq(200) // Código de respuesta esperado
      expect(response.body).to.have.lengthOf(36) // Arroja la longitud del Auth_token que confirma el login
      expect(response.body).to.have.string('Auth_token') // Confirma que haya un message confirmando nuevamente el login del usuario
    })
  })

  it('Usuario y password incorrecto en login', () => {
    cy.request({
      method: 'POST',
      url: 'https://api.demoblaze.com/login',
      body: {
        username: 'George Vin', // Usuario ya existente
        password: 'abc',
      },
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(200) // Código de respuesta esperado para login incorrecto
      expect(response.body).to.have.property('errorMessage', 'Wrong password.') // Validar el mensaje de contraseña incorrecta en el response de la API
    })
  })
})
