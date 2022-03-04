import React from "react";
import classes from "./AddStaff.module.css";
import { useDispatch } from "react-redux";
import { staffActions } from "../../store";
import ReactDOM from "react-dom";
import AddForm from "./AddForm";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onExit} />;
};

const AddStaff = (props) => {
  const dispatch = useDispatch();

  return (
    <React.Fragment>
      {/* ReactDOM.createPortal(child, container) */}
      {ReactDOM.createPortal(
        <Backdrop onExit={() => dispatch(staffActions.closeNewStaff())} />,
        document.getElementById("backdrop")
      )}
      ;
      {ReactDOM.createPortal(
        <AddForm
          onExit={() => dispatch(staffActions.closeNewStaff())}
          mess="Hello"
        />,
        document.getElementById("overlay")
      )}
      ;
    </React.Fragment>
  );
};

export default AddStaff;
