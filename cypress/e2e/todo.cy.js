describe("example to-do app", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000")
  })
  it("should display the title", () => {
    cy.get(".header").should("contain", "Simple Todo App")
  })
  // Actions of application
  // Add todo
  // tags
  it("should add a new todo", () => {
    // make sure there are 3 todos
    const todos = cy.get(".todo-item")
    todos.should("have.length", 3)
    // find the input for title
    const titleInput = cy.get(".input-title")
    // type in title input
    titleInput.type("Testing")
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
    const tag = cy.get(".tag-Testing-0")
    tag.should("exist").contains("high priority")
  })
  // update todo
  it("should update a todo when clicking on checkbox", () => {
    // make sure first todo is checked
    // grab checkbox
    const checkbox = cy.get(".todo-item > input").first()
    checkbox.should("be.checked")
    // click on checkbox to update state
    checkbox.click()
    // make sure the checkbox changed state
    cy.wait(500).get(".todo-item > input").first().should("not.be.checked")
  })
  // delete todo
  it("should delete a todo when clicking delete button", () => {
    // make sure there are 3 todos
    const todos = cy.get(".todo-item")
    todos.should("have.length", 3)
    // grab the first todo
    const deleteBtn = cy.get(".delete-button").first()
    // find the delete button
    // click delete button
    deleteBtn.click()
    // check and make sure there are 2 todos
    cy.wait(500).get(".todo-item").should("have.length", 2)
  })
  it("should filter out completed todos", () => {
    // make sure there are 3 todos
    const todos = cy.get(".todo-item")
    todos.should("have.length", 3)
    // find filter button
    const filterBtn = cy.get(".filter-btn")
    // click filter button
    filterBtn.click()
    // check for 2 todos
    cy.wait(500).get(".todo-item").should("have.length", 2)
  })
})
