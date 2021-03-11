import React from "react";

const Notes = ({ notes }) => {
  return (
    <ul className="list-group">
      {notes.map((note) => (
        <li
          className="list-group-item d-flex align-items-center justify-content-between"
          key={note.id}
        >
          <span>{note.title}</span>
          <div className="">
            <span className="mr-3">{new Date().toLocaleDateString()}</span>
            <button type="button" class="btn btn-danger">
              Удалить
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Notes;
