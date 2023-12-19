describe('Assessment', () => {
  beforeEach(() => {
    cy.clearCookies() // Limpiar cookies antes de cada prueba para que se borren datos de sesiones anteriores
    cy.visit('https://todoist.com/es')
  })

  it('Login To Do List Website', () => {
    cy.get('[style="--navbar-item-group-gap:var(--space-8)"] > :nth-child(1) > .Z2j5FoeQ_umI7vX0SmxF').click()
    cy.get('#element-0').click()
    cy.get('#element-0').type('wl.interview.session@gmail.com', {delay: 80})
    cy.get('#element-3').click()
    cy.get('#element-3').type('WL2021&*')
    cy.get('._966b120f > .F9gvIPl').click()
    cy.get('span.simple_content').should('have.text', 'Today')
  })

})
