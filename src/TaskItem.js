import React, { useState } from "react";
import EditItem from "./EditItem";
import axios from "axios";

function TaskItem(props) {
  const { removeItem, editItem, ...task } = props;
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    const result = !toggle;
    setToggle(result);
  };

  const handleRemove = (id) => {
    const confirmRemove = window.confirm("Are you sure?");
    if (confirmRemove) {
      axios
        .delete(`http://localhost:3033/api/tasks/${id}`)
        .then((response) => {
          const result = response.data;
          removeItem(result.id);
        })
        .catch((err) => {
          alert(err.message);
        });
    }
  };

  return (
    <div>
      {toggle ? (
        <div className="border p-3 mb-2">
          <EditItem
            id={task.id}
            title={task.title}
            status={task.status}
            editItem={editItem}
            handleToggle={handleToggle}
          />
          <button
            className="btn btn-md btn-primary mt-2"
            onClick={handleToggle}
          >
            cancel
          </button>
        </div>
      ) : (
        <div className="border p-2 bg-light mb-3">
          <h4 className="h4">{task.title}</h4>
          <button
            className="btn btn-sm btn-primary me-1"
            onClick={handleToggle}
          >
            edit
          </button>
          <button
            className="btn btn-sm btn-primary"
            onClick={() => {
              handleRemove(task.id);
            }}
          >
            remove
          </button>
        </div>
      )}
    </div>
  );
}

export default TaskItem;
