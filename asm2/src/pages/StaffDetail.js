import { Fragment } from "react";
import { useParams } from "react-router-dom";
import DetailStaff from "../components/staff/DetailStaff";
import { STAFFS } from "../shared/staffs";

const StaffDetail = () => {
  const params = useParams();
  console.log(params.staffId);
  const staffsList = STAFFS;
  const selectedStaff = staffsList.find((staff) => staff.id.toString() === params.staffId);
  console.log(selectedStaff);
  if (!selectedStaff) {
    return <p>NO STAFF FOUND</p>;
  }
  const isoStartDate = new Date(selectedStaff.startDate);
  const startDate = isoStartDate.toLocaleDateString('en-GB');
  const isoDOB = new Date(selectedStaff.doB);
  const doB = isoDOB.toLocaleDateString('en-GB');
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
