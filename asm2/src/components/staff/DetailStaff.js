import classes from "./DetailStaff.module.css";
import Breadcrumb from "react-bootstrap/Breadcrumb";

const DetailStaff = (props) => {
  return (
    <div>
      <Breadcrumb>
        <Breadcrumb.Item href="/">Nhân Viên</Breadcrumb.Item>
        <Breadcrumb.Item active>{props.name}</Breadcrumb.Item>
      </Breadcrumb>
      <div className="row">
        <div className="col-12 col-md-4 col-lg-3">
          <img className={classes.img} src={props.image} alt={props.name} />
        </div>
        <div className="col-12 col-md-8 col-lg-9">
          <h3>Họ và tên: {props.name}</h3>
          <p>Ngày sinh: {props.doB}</p>
          <p>Ngày vào công ty: {props.startDate}</p>
          <p>Phòng ban: {props.department}</p>
          <p>Số ngày nghỉ còn lại: {props.annualLeave}</p>
          <p>Số ngày đã làm thêm: {props.overTime}</p>
        </div>
      </div>
    </div>
  );
};

export default DetailStaff;
