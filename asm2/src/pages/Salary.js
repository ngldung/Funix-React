import { STAFFS } from "../shared/staffs";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Card from "../components/UI/Card";
import classes from "./Salary.module.css";
import { useHistory, useLocation } from "react-router-dom";

const Salary = () => {
  const history = useHistory();
  const location = useLocation();

  const queryParam = new URLSearchParams(location.search);
  const isSortingId = queryParam.get("sort") === "id";

  const sortChangeHandler = () => {
    history.push("/salary?sort=" + (isSortingId ? "salary" : "id"));
  };
  return (
    <div>
      <Breadcrumb>
        <Breadcrumb.Item href="/">Nhân Viên</Breadcrumb.Item>
        <Breadcrumb.Item active>Bảng Lương</Breadcrumb.Item>
      </Breadcrumb>
      <div className={classes.sorting}>
        <button onClick={sortChangeHandler}>
          Sort {isSortingId ? "Xếp theo Lương" : "Xếp theo mã NV"}
        </button>
      </div>

      <div className="row">
        {STAFFS.map((staff) => (
          <div key={staff.id} className="col-12 col-md-6 col-lg-4">
            <Card>
              <h3>{staff.name}</h3>
              <p>Mã nhân viên: {staff.id}</p>
              <p>Hệ số lương: {staff.salaryScale}</p>
              <p>Số giờ làm thêm: {staff.overTime}</p>
              <hr />
              <p>
                Lương:{" "}
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
