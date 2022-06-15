import React from "react";
import ReactDOM from "react-dom";
import classes from "./styles.module.css";

const ConfirmDelete = ({ close, onConfirm }) => {
  return ReactDOM.createPortal(
    <div className={classes.container} onClick={close}>
      <div className={classes.wrapper}>
      <div className={classes.modaldialog}>
      <div className={classes.modalcontent}>
      {/* <div className={classes.icon}>
					<i class="material-icons">&#xE5CD;</i>
				</div>	 */}
        <h4 class="modal-title w-100">Are you sure?</h4>	
        <div className={classes.modalbody}>
				<p>Do you really want to delete this records? This process cannot be undone.</p>
			</div>
        <div className={classes.modalfooter} >
          <button onClick={onConfirm} class="btn btn-danger">Confirm</button>
          <button onClick={close} class="btn btn-secondary">Cancel</button>
        </div>
        </div>
        </div>
      </div>
    </div>

  ,
    document.getElementById("modal")
  );
};

export default ConfirmDelete;
