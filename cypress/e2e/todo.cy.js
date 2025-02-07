describe("example to-do app", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000")
  })
  it("should display the title", () => {
    cy.get(".header").should("contain", "Simple Todo App")
  })
  // Actions of application
  // Add todo
  it("should add a new todo", () => {
    // make sure there are 3 todos
    const todos = cy.get(".todo-item")
    todos.should("have.length", 3)
    // find the input for title
    const titleInput = cy.get(".input-title")
    // type in title input
    titleInput.type("Add Testing")
    // find the input for tags
    const tagInput = cy.get(".input-tags")
    // type in tag input, hit enter
    tagInput.type("high priority").type("{enter}")
    // find the submit button
    const submitBtn = cy.get(".input-submit")
    // click button
    submitBtn.click()
    // make sure there are now 4 todos
    cy.wait(500).get(".todo-item").should("have.length", 4)
  })
  // tags
  // update todo
  // delete todo
})
