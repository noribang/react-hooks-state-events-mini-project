import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function CategoryFilter({categories, selectedCategory, onSelectCategory }) {
  /* NEW ARRAY. CATEGORIES BUTTONS */
  const categoryButtons = categories.map((category) => {
    // const className = category === selectedCategory ? "selected" : null;

    return (
      <button
      key={uuid()}
      // className={className}
      className={category === selectedCategory ? "selected" : null}
      onClick={() => onSelectCategory(category)}
      >
        {category}
      </button>
    );

  });  

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {/* {categories.map((category) => {
        return <button 
                  key={uuid()}
                  className={isSelected ? "selected" : ""}
                  onClick={handleAddSelectClick}
                  >
                  {category}
                </button>
      })} */}

      {categoryButtons}
    </div>
  );
}

export default CategoryFilter;
