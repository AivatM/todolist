import React, { useContext } from "react";
import { AlertContext } from "../../context/alert/alertContext";

const Alert = () => {
  const { alert, hide } = useContext(AlertContext);
  if (!alert.visible) return null;
  return (
    <div
      class={`alert alert-${
        alert.type || "warning"
      } alert-dismissible fade show`}
    >
      <strong>Внимание</strong> {alert.text}
      <button
        onClick={hide}
        type="button"
        class="btn-close"
        aria-label="Close"
      ></button>
    </div>
  );
};

export default Alert;
