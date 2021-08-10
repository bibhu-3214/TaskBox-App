import React from "react";
import TaskForm from "./TaskForm";
import axios from "axios";

function EditItem(props) {
  const { id, title, status, editItem, handleToggle } = props;

  const formSubmit = (task) => {
    axios
      .put(`http://localhost:3033/api/tasks/${task.id}`, task)
      .then((resp) => {
        const result = resp.data;
        // console.log(result);
        editItem(result);
        handleToggle();
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <div>
      <h4 className="h4">Edit Tasks here</h4>
      <TaskForm id={id} title={title} status={status} formSubmit={formSubmit} />
    </div>
  );
}

export default EditItem;
