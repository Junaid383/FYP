import React from "react";
import ReactDOM from "react-dom"
import classes from "./styles.module.css";

const ConfirmDelete = ({ close, onConfirm }) => {
  return ReactDOM.createPortal(
    <div className={classes.container} onClick={close}>
      <div className={classes.wrapper}>
        <p>Are you sure?</p>
        <div>
          <button onClick={onConfirm}>Confirm</button>
          <button onClick={close}>Cancel</button>
        </div>
      </div>
    </div>,
    document.getElementById("modal")
  );
};

export default ConfirmDelete;
