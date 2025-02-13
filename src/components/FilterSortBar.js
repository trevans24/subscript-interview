import React from "react"

const containerStyle = {
  alignItems: "center",
  display: "flex",
  justifyContent: "space-between",
  margin: "20px 0",
}

const btnStyle = {
  backgroundColor: "blue",
  textTransform: "capitalize",
}

const activeStyle = {
  backgroundColor: "grey",
  textTransform: "capitalize",
}

const FilterSortBar = ({ handleFilter, handleSort, isFiltered, sortDir }) => {
  return (
    <div style={containerStyle}>
      <button
        className="filter-btn"
        onClick={handleFilter}
        style={isFiltered ? activeStyle : btnStyle}
      >
        Filter Completed
      </button>
      <button className="sort-btn" onClick={handleSort} style={btnStyle}>
        Sort {sortDir}
      </button>
    </div>
  )
}

export default FilterSortBar
