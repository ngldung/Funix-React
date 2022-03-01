import React from "react";
import classes from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.id}>{props.label}</label>
      <input type={props.type} id={props.id} name={props.name} ref={ref} />
    </div>
  );
});

export default Input;
