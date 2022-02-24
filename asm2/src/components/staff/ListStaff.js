import { Fragment } from "react";
import { STAFFS } from "../../shared/staffs";
import StaffItem from "./StaffItem";

const ListStaff = () => {
  return (
    <Fragment>
      
      {STAFFS.map((staff) => (
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
