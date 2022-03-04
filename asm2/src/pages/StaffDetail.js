import { Fragment } from "react";
import { useParams } from "react-router-dom";
import DetailStaff from "../components/staff/DetailStaff";
import { useSelector } from "react-redux";
const StaffDetail = () => {
  const params = useParams();
  const staffs = useSelector(state => state.totalStaffs);
  const selectedStaff = staffs.find(
    (staff) => staff.id.toString() === params.staffId
  ); //check url param with id of staff
  if (!selectedStaff) {
    return <p>NO STAFF FOUND</p>;
  }

  // turn Iso Date to normal date format
  const isoStartDate = new Date(selectedStaff.startDate);
  const startDate = isoStartDate.toLocaleDateString("en-GB");
  const isoDOB = new Date(selectedStaff.doB);
  const doB = isoDOB.toLocaleDateString("en-GB");

  return (
    <Fragment>
      <DetailStaff
        image={selectedStaff.image}
        name={selectedStaff.name}
        doB={doB}
        startDate={startDate}
        department={selectedStaff.department.name}
        annualLeave={selectedStaff.annualLeave}
        overTime={selectedStaff.overTime}
      />
    </Fragment>
  );
};

export default StaffDetail;
