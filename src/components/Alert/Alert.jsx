import React from "react";
import { hideAlert } from "../../redux/alert/alertReducer";

const Alert = (props) => {
  debugger;
  if (!props.visible) {
    return null;
  }
  return (
    <div
      className={`alert alert-${
        props.visible ? "warning" : ""
      } alert-dismissible`}
    >
      <strong>Внимание!</strong> {alert.text}
      <button
        onClick={hideAlert()}
        type="button"
        className="btn-close"
        aria-label="Close"
      ></button>
    </div>
  );
};

export default Alert;
