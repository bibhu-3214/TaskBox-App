import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

function TaskForm(props) {
  const {
    formSubmit,
    isSaved,
    toggleIsSaved,
    id: slNo,
    title: taskTitle,
    status: taskStatus,
  } = props;
  const [id, setId] = useState(slNo ? slNo : uuidv4());
  const [title, setTitle] = useState(taskTitle ? taskTitle : []);
  const [status, setStatus] = useState(taskStatus ? taskStatus : false);

  useEffect(() => {
    if (isSaved) {
      setId(uuidv4());
      setTitle("");
      setStatus(false);
      toggleIsSaved();
    }
  }, [isSaved, toggleIsSaved]);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleStatus = (e) => {
    setStatus(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      id: id,
      title: title,
      status: status,
    };
    if (title === "") {
      alert("Title cannot be blank");
    } else {
      formSubmit(formData);
    }
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={handleTitleChange}
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            value={status}
            onChange={handleStatus}
          />
          <label htmlFor="" className="form-check-label">
            completed
          </label>
        </div>
        <div>
          <input type="submit" value="save" className="btn btn-primary" />
        </div>
      </form>
    </div>
  );
}

export default TaskForm;
