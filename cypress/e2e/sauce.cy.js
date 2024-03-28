describe('Add items to cart', () => {
 before("Login as a standart user", () => {cy.login()})

  it("Add first item to cart", () => {
    cy.contains("Add to cart").click();
    cy.contains("1").should('be.visible');
    
  })
})