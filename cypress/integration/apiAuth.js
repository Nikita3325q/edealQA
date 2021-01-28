context('auth_system_api', () => {

    Cypress.config ('baseUrl,'https://staff.test01.pg1.dealfinity.net')

    it('GET read', () => {

        cy.request ('GET', '/login').then ((response) => {
            expect(response).to.have.property('status', 200)
            expect(response.body).to.not.be.null
                
  
    
        })
    })
})  