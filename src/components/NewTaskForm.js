import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit}) {
  /* STATE */
  const [text, setText] = useState("");
  const [category, setCategory] = useState("Code");

  /* SUBMIT EVENT HANDLER */
  function handleSubmit(event) {
    event.preventDefault();
    /* CALL CALLBACK. ADD NEW TASK */
    onTaskFormSubmit({
      text: text,
      category: category,
    });
    setText("");
    setCategory("Code");
  }

  /* INPUT EVENT HANDLER */
  function onTextChange(event) {
    /* UPDATE TEXT */
    setText(event.target.value);
  }
  /* SELECT EVENT HANDLER */
  function onSelectChange(event) {
    /* UPDATE CATEGORY */
    setCategory(event.target.value);
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input 
        type="text" 
        name="text" 
        value={text}
        onChange={onTextChange}
        />
      </label>
      <label>
        Category
        <select 
        name="category"
        value={category}
        onChange={onSelectChange}
        >
          {/* render <option> elements for each category here */}
          {/* MAP THROUGH PROPS CATEGORIES */}
          {categories.map((c, index) => (<option key={index}>{c}</option>))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
