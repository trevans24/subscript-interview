import React from "react"

const headerStyle = {
  lineHeight: "2em",
  padding: "20px 0",
}

const Header = () => (
  <header style={headerStyle}>
    <h1 className="header" style={{ fontSize: "25px", marginBottom: "15px" }}>
      Simple Todo App
    </h1>
    <p style={{ fontSize: "19px" }}>
      Please add to-dos item(s) through the input field
    </p>
  </header>
)
export default Header
