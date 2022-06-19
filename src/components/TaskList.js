import React from "react";
import Task from "./Task";
import { v4 as uuid } from "uuid";

function TaskList({tasks, handleDeleteTask}) {
  // console.log("Tasks: ", tasks)

  // function handleDeleteClick(event) {
  //   // console.log(event.target.parentNode)
  //   event.target.parentNode.remove();
  // }

  // const tasksToDisplay = tasks.filter((task) => {
  //   return true;
  // });

  // const taskList = TASKS.map((task) = {
  //   console.log(task)
  //   // return <Task  key={uuid} text={task.text} category={task.category}/>
  //   return <Task />;
  // });

  // return (
  //   <div className="tasks">
  //     {/* display a list of tasks using Task component */}
  //     {tasksToDisplay.map((task) => {
  //        <Task 
  //                 key={uuid()} 
  //                 text={task.text} 
  //                 category={task.category}
  //                 handleDeleteTask={handleDeleteTask}
  //               />
  //     })}
  //   </div>
  // );

  /* NEW TASKS ARRAY */
  const taskList = tasks.map((task) => (
    <Task 
      key={uuid()} 
      text={task.text} 
      category={task.category}
      handleDeleteTask={handleDeleteTask}
    />
  ));

  return (<div className="tasks">{taskList}</div>)

}

export default TaskList;
