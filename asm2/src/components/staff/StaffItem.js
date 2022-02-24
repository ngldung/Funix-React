import { Fragment } from "react";
import classes from "./StaffItem.module.css";
import { Link } from "react-router-dom";

const StaffItem = (props) => {
  return (
    <Fragment>
      <div className={`${classes.item} col-6 col-sm-4 col-md-2`}>
        <Link to={`/staffs/${props.id}`}>
          <img src={props.image} alt={props.name} />
        </Link>
        <p>{props.name}</p>
      </div>
    </Fragment>
  );
};

export default StaffItem;
