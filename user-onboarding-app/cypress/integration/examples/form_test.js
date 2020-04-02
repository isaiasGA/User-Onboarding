describe('Series of test for User Onboarding App', function(){
    beforeEach(function(){
        cy.visit("http://localhost:3000/");
    })
    it('Selecting the name input as well as assigning a value', function(){
      cy.get('input[name="name"]')
        .type("Isaias here 😁")
        .should("have.value", "Isaias here 😁");
      cy.get("input[name='email']")
        .type("isaias@gmail.com")
        .should("have.value", "isaias@gmail.com")
        cy.get('input[name="password"]')
          .type('password')
          .should("have.value", "password")
        cy.get('input[name="terms"]')
          .check();
        cy.get('button')
          .click()
    })
});