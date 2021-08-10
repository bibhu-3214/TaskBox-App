import React from "react";
import TaskItem from "./TaskItem";

function TaskList(props) {
  const { tasks, removeItem, editItem } = props;
  return (
    <div>
      {tasks.length === 0 ? (
        <div>
          <h1 className="display-6">No tasks found</h1>
          <h4 className="h5">Add your tasks here</h4>
        </div>
      ) : (
        <div>
          <h3 className="display-6">My Tasks - ({tasks.length})</h3>
          <div className="border bg-white p-3">
            {tasks.map((task) => {
              return (
                <TaskItem
                  key={task.id}
                  {...task}
                  removeItem={removeItem}
                  editItem={editItem}
                />
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default TaskList;
