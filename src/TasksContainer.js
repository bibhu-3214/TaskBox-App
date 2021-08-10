import React, { useState, useEffect } from "react";
import axios from "axios";

import TaskList from "./TaskList";
import Addtask from "./Addtask";

function TasksContainer(props) {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3033/api/tasks")
      .then((response) => {
        const result = response.data;
        setTasks(result);
      })
      .catch((error) => {
        alert(error.message);
      });
  }, []);

  const addItem = (task) => {
    setTasks([...tasks, task]);
  };

  const removeItem = (id) => {
    const result = tasks.filter((task) => {
      return task.id !== id;
    });
    setTasks(result);
  };

  const editItem = (task) => {
    const result = tasks.map((t) => {
      if (t.id === task.id) {
        return { ...t, ...task };
      } else {
        return { ...t };
      }
    });
    setTasks(result);
  };

  return (
    <div className="container overflow-hidden mt-3">
      <div className="row gx-5">
        <div className="col">
          <div className="p-3 border bg-light">
            <TaskList
              tasks={tasks}
              removeItem={removeItem}
              editItem={editItem}
            />
          </div>
        </div>
        <div className="col">
          <div className="p-3 border bg-light">
            <Addtask addItem={addItem} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TasksContainer;
