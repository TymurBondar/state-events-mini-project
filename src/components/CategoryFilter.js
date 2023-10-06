import React from "react";

function CategoryFilter({categories, filterByCategory, filter}) {
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {categories.map(categorie => 
      <button onClick={filterByCategory} className={filter === categorie ? "selected": ""} key={categorie}>{categorie}</button>)}
    </div>
  );
}

export default CategoryFilter;
