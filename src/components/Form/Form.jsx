import React from "react";
import { Field, reduxForm } from "redux-form";

const Form = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className="form-group">
        <Field
          component="input"
          type="text"
          name="task"
          className="form-control"
          placeholder="Добавьте задачу"
        />
        <button>sss</button>
      </div>
    </form>
  );
};

const TaskReduxForm = reduxForm({ form: "task" })(Form);

export default TaskReduxForm;
