import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function CategoryFilter({categories}) {
  // console.log("categories: ", categories)

  /* State for Category button. */
  const [isSelected, setIsSelected] = useState(false);

  /* Event handler for Category button. */
  function handleAddSelectClick(event) {  
    console.log(event.target)
    // Call setter function.
      setIsSelected((isSelected) => !isSelected);
  }

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {categories.map((category) => {
        return <button 
                  key={uuid()}
                  className={isSelected ? "selected" : ""}
                  onClick={handleAddSelectClick}
                  >
                  {category}
                </button>
      })}
    </div>
  );
}

export default CategoryFilter;
