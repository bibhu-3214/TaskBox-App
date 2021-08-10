import React from "react";
import TasksContainer from "./TasksContainer";

function App(props) {
  return (
    <div className="container">
      <h1 className="display-2 text-center">Taskbox</h1>
      <TasksContainer />
    </div>
  );
}

export default App;
