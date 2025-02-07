describe("example to-do app", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000")
  })
  it("should display the title", () => {
    cy.get(".header").should("contain", "Simple Todo App")
  })
})
