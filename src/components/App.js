import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

// function handleAddSelectClick(event) {
//   console.log(event.target)
// }

function App() {
  /* State TASKS data. */
  const [tasks, setTasks] = useState(TASKS);
  /* State CATEGORIES data. */
  const [categories, setCategories] = useState(CATEGORIES);

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
        categories={categories} 
      />
      <NewTaskForm />
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;
