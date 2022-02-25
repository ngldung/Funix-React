import { useState } from "react";
import ListStaff from "../components/staff/ListStaff";
import SearchBar from "../components/UI/SearchBar";
import { STAFFS } from "../shared/staffs";
import { useHistory, useLocation } from "react-router-dom";

const StaffList = () => {
  const history = useHistory();
  const location = useLocation();
  const [staffs, setStaffs] = useState(STAFFS);

  const notSearch = location.search === ""; //Using searchbar or not to render all staff or only searched staff

  const onSubmitSearch = (input) => {
    //get search input and filter from staffs list to find searched staff
    const filterStaffs = STAFFS.filter(
      (staff) => staff.name.toLowerCase() === input
    );
    setStaffs(filterStaffs);
    history.push(`/staffs?search=${input}`); //change url when searching to be able to back to staffs list
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
