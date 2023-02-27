import React from "react";

function CategoryFilter({ categories, handleCategorySelect, selectedCategory }) {
  const categorySelect = (category) => {
    handleCategorySelect(category)
  }
  
  const renderButtons = categories.map(category => (
    <button
      className={selectedCategory === category ? "selected" : ""} 
      key={category}
      onClick={() => categorySelect(category)}
    >
      {category}
    </button>
  ))
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {renderButtons}
    </div>
  );
}

export default CategoryFilter;
