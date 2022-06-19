import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
/* IMPORT ARRAY AND ARRAY OF OBJECTS. */
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
  const [categories, setCategories] = useState("All");

  /* NEW ARRAY OF TASKS TO PASS AS PROPS. */
  const showTasks = tasks.filter(
    (task) => categories === "All" || task.category === categories
  );
  /* HANDLE DELETE TASK */
  function handleDeleteTask(deleteTask) {
    /* UPDATE TASK STATE */
    setTasks(tasks.filter((task) => task.text !== deleteTask ))
  }
  /* UPDATE TASK STATE WITH NEW TASK*/
  function handleAddTask(newTask) {
    setTasks([...tasks, newTask]);
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
        categories={CATEGORIES} 
        /* Current State CATEGORIES */
        selectedCategory={categories}
        /* State Set CATEGORIES */
        onSelectCategory={setCategories}
      />
      <NewTaskForm 
        categories={CATEGORIES.filter((category) => category !== "All")} 
        /* CALLBACK ADD NEW TASK */
        onTaskFormSubmit={handleAddTask}
      />
      <TaskList tasks={showTasks} handleDeleteTask={handleDeleteTask}/>
    </div>
  );
}

export default App;
