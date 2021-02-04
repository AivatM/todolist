import React, { Fragment } from "react";
import TaskReduxForm from "../components/Form/Form";
import Tasks from "../components/Tasks/Tasks";

const Home = (props) => {
  const onSubmit = (formData) => {
    console.log(formData);
  };
  const tasks = [
    { id: 1, name: "ffff" },
    { id: 2, name: "aaa" },
  ];
  return (
    <Fragment>
      <TaskReduxForm onSubmit={onSubmit} />
      <Tasks tasks={tasks} />
    </Fragment>
  );
};

export default Home;
