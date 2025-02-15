import React from "react";

function Task({text, category, handleDeleteTask}) {
  function handleDeleteClick() {
    /* CALLBACK THAT UPDATES TASK STATE. */
    handleDeleteTask(text);
  }


  return (
    <div className="task">
      {/* <div className="label">CATEGORY HERE</div>
      <div className="text">TEXT HERE</div> */}
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={handleDeleteClick}>X</button>
    </div>
  );
}

export default Task;
