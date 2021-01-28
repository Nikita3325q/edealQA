describe('My First Test',function () {
    it('Clicks on element', function () {
      cy.visit('https://staff.test01.pg1.dealfinity.net/')

      cy.contains('type').click
            
    })
  })