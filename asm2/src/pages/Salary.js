import { STAFFS } from "../shared/staffs";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Card from "../components/UI/Card";
import classes from "./Salary.module.css";
import { useHistory, useLocation } from "react-router-dom";

//Function to execute sort by id or sort by salary
const sortStaffs = (staffs, sortById) => {
  return staffs.slice().sort((staffA, staffB) => {
    if (sortById) {
      return staffA.id > staffB.id ? 1 : -1; //if sort by id -> use this calculation to sort
    } else {
      return (
        //or use below calculation if sort by salary
        staffA.salaryScale * 3000000 +
        (staffA.overTime / 8) * 200000
      ).toFixed(0) <
        (staffB.salaryScale * 3000000 + (staffB.overTime / 8) * 200000).toFixed(0)
        ? 1
        : -1;
    }
  });
};

const Salary = () => {
  const history = useHistory();
  const location = useLocation();

  const queryParam = new URLSearchParams(location.search);
  const isSortingId = queryParam.get("sort") === "id";

  const sortedStaffs = sortStaffs(STAFFS, isSortingId);

  const sortChangeHandler = () => {
    history.push("/salary?sort=" + (isSortingId ? "salary" : "id"));
  };
  return (
    <div>
      {/* Use breadcumb to make nav link visible */}
      <Breadcrumb>
        <Breadcrumb.Item as="div"> Nhân Viên </Breadcrumb.Item>
        <Breadcrumb.Item active> Bảng Lương </Breadcrumb.Item>
      </Breadcrumb>
      <div className={classes.sorting}>
        <button onClick={sortChangeHandler}>
          Xếp theo {isSortingId ? " Lương" : " Mã NV"}
        </button>
      </div>
      <div className="row">
        {sortedStaffs.map((staff) => (
          <div key={staff.id} className="col-12 col-md-6 col-lg-4">
            <Card>
              <h3> {staff.name} </h3> <p> Mã nhân viên: {staff.id} </p>
              <p> Hệ số lương: {staff.salaryScale} </p>
              <p> Số giờ làm thêm: {staff.overTime} </p> <hr />
              <p>
                Lương:
                {(
                  staff.salaryScale * 3000000 +
                  (staff.overTime / 8) * 200000
                ).toFixed(0)}
              </p>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Salary;
