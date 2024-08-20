describe('Home Page', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should display Home link', () => {
    const homeLink = cy.findByRole('link', { name: /Home/i }).should('be.visible')
    homeLink.should('have.attr', 'href', '/')
  })

  it('should display title', () => {
    cy.findByRole('heading', { name: /Recipes website/i }).should('be.visible')
  })

  it('should display "Show all recipes" button', () => {
    cy.findByRole('button', { name: /Show all recipes/i }).should('be.visible')
  })
})
