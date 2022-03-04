import React from "react";
import classes from "./NewStaff.module.css";
import { useDispatch, useSelector } from "react-redux";
import { staffActions } from "../../store";
import AddStaff from "../addStaff/AddStaff";

const NewStaff = () => {
  const isOpen = useSelector(state => state.isOpenNewStaff);
  const dispatch = useDispatch();
  const openNewStaff = () => {
      dispatch(staffActions.openNewStaff())
  }
  return (
    <main>
      <button className={classes.primaryBtn} onClick={openNewStaff}>
        +
      </button>
      {isOpen && <AddStaff />}
    </main>
  );
};

export default NewStaff;