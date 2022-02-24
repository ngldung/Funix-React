import { useState } from "react";
import ListStaff from "../components/staff/ListStaff";
import SearchBar from "../components/UI/SearchBar";
import { STAFFS } from "../shared/staffs";
import { useHistory, useLocation } from "react-router-dom";

const StaffList = () => {
  const history = useHistory();
  const location = useLocation();

  const notSearch = location.search === "";
  console.log(notSearch);

  const [staffs, setStaffs] = useState(STAFFS);
  const onSubmitSearch = (input) => {
    const filterStaffs = STAFFS.filter((staff) => staff.name === input);
    setStaffs(filterStaffs);
    history.push(`/staffs?search=${input}`);
  };
  return (
    <div className="row">
      <SearchBar onSearchInput={onSubmitSearch} />
      <h1>Nhân viên</h1>
      <hr />
      <ListStaff staffs={notSearch ? STAFFS : staffs} />
    </div>
  );
};

export default StaffList;
