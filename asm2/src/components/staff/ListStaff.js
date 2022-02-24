import { Fragment } from "react";
import { STAFFS } from "../../shared/staffs";
import StaffItem from "./StaffItem";

const ListStaff = (props) => {

  return (
    <Fragment>
      {props.staffs.map((staff) => (
        <StaffItem
          key={staff.id}
          id={staff.id}
          name={staff.name}
          image={staff.image}
        />
      ))}
    </Fragment>
  );
};

export default ListStaff;
