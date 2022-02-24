import ListStaff from "../components/staff/ListStaff";
import SearchBar from "../components/UI/SearchBar";

const StaffList = () => {
  return (
    <div className="row">
    <SearchBar />
      <h1>Nhân viên</h1>
      <hr />
      <ListStaff />
    </div>
  );
};

export default StaffList;
