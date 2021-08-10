import React, { useState } from "react";
import TaskForm from "./TaskForm";
import axios from "axios";

function Addtask(props) {
  const [isSaved, setIsSaved] = useState(false);
  const { addItem } = props;

  const formSubmit = (task) => {
    axios
      .post("http://localhost:3033/api/tasks", task)
      .then((resp) => {
        const result = resp.data;
        addItem(result);
        setIsSaved(true);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  const toggleIsSaved = () => {
    setIsSaved(false);
  };

  return (
    <div>
      <h2 className="display-6">Add Tasks here</h2>
      <TaskForm
        formSubmit={formSubmit}
        isSaved={isSaved}
        toggleIsSaved={toggleIsSaved}
      />
    </div>
  );
}

export default Addtask;
