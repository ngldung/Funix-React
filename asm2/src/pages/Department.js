import { DEPARTMENTS } from "../shared/staffs";

const Department = () => {
  return (
    <div className="row">
      {DEPARTMENTS.map((dept) => (
        <div key={dept.id} className="col-12 col-md-6 col-lg-4">
          <h1>{dept.name}</h1>
          <p>Số lượng nhân viên: {dept.numberOfStaff}</p>
        </div>
      ))}
    </div>
  );
};
export default Department;
