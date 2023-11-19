describe('Hospitals', () => {
  it('should fetch hospital and display', () => {
    cy.visit('/')
    cy.get('video').should('exist')
    cy.get('video').should('have.prop', 'paused', false)
    cy.wait(5000)
    cy.get('button').contains('Pause').click()
    cy.get('video').should('have.prop', 'paused', true)
    cy.get('button').contains('Select Your Hospital').click()
    cy.wait(5000)
    cy.get('img').should('have.length.gte', 3)
  })
})