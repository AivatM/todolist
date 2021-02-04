import React from "react";

const Tasks = (props) => {
  return (
    <ul className="list-group">
      {props.tasks.map((task) => (
        <li
          className="list-group-item d-flex justify-content-between align-items-center fs-1 fw-light"
          key={task.id}
        >
          {task.name}
          <div>
            <small className="m-5"> {new Date().toLocaleDateString()}</small>
            <button type="button" className="btn btn-danger">
              Удалить
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Tasks;
