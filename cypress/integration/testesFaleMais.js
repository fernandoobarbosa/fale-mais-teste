describe('011 para 016 teste', () => {
  it('Gets, types and asserts', () => {
    cy.visit('http://localhost:3000/')
    cy.get('#tempo').type(20)
    cy.get('#origem').contains('011').click()
    cy.get('#destino').contains('016').click()
    cy.get('#plano').contains('FaleMais 30').click()
    cy.get('#submit').click()
    cy.get('#comFaleMais').should('have.value', '0,00')
    cy.get('#semFaleMais').should('have.value', '38,00')
  })
})

describe('011 para 017 teste', () => {
  it('Gets, types and asserts', () => {
    cy.visit('http://localhost:3000/')
    cy.get('#tempo').type(80)
    cy.get('#origem').contains('011').click()
    cy.get('#destino').contains('017').click()
    cy.get('#plano').contains('FaleMais 60').click()
    cy.get('#submit').click()
    cy.get('#comFaleMais').should('have.value', '37,40')
    cy.get('#semFaleMais').should('have.value', '136,00')
  })
})

describe('018 para 011 teste', () => {
  it('Gets, types and asserts', () => {
    cy.visit('http://localhost:3000/')
    cy.get('#tempo').type(200)
    cy.get('#origem').contains('018').click()
    cy.get('#destino').contains('011').click()
    cy.get('#plano').contains('FaleMais 120').click()
    cy.get('#submit').click()
    cy.get('#comFaleMais').should('have.value', '167,20')
    cy.get('#semFaleMais').should('have.value', '380,00')
  })
})

describe('018 para 017 teste', () => {
  it('Gets, types and asserts', () => {
    cy.visit('http://localhost:3000/')
    cy.get('#tempo').type(200)
    cy.get('#origem').contains('018').click()
    cy.get('#destino').contains('017').click()
    cy.get('#plano').contains('FaleMais 30').click()
    cy.get('#submit').click()
    cy.get('#comFaleMais').should('have.value', '0,00')
    cy.get('#semFaleMais').should('have.value', '0,00')
  })
})
