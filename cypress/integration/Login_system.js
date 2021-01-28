context('cypress_login_in_system', () => {
  it('login case', () => {
      cy.visit('https://staff.test01.pg1.dealfinity.net/login')
      cy.get('input[name="email"]').type('default@manager.site')
      cy.get('input[name="password"]').type('nZZ6WZTJZxJ7a3RS')
      cy.get('div#root span.MuiButton-label').click()
      cy.title().should('include','Edeal')
  })    
 })