import React from "react";
import ListStaff from "../components/staff/ListStaff";
import SearchBar from "../components/UI/SearchBar";
import { useHistory, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { staffActions } from "../store/index";
import NewStaff from "../components/staff/NewStaff";
import classes from "./StaffList.module.css";

const StaffList = () => {
  const history = useHistory();
  const location = useLocation();
  const staffs = useSelector((state) => state.staffs);
  const totalStaffs = useSelector(state => state.totalStaffs);
  const dispatch = useDispatch();

  const notSearch = location.search === ""; //Using searchbar or not to render all staff or only searched staff

  const onSubmitSearch = (input) => {
    dispatch(staffActions.filterStaff(input));
    history.push(`/staffs?search=${input}`); //change url when searching to be able to back to staffs list
  };
  return (
    <div className="container">
      <div className={`row ${classes.box}`}>
        <div className={classes.item}>
          <h2>Nhân viên</h2>
        </div>
        <div className={classes.item}>
          <NewStaff />
        </div>
        <div className={classes.item}>
          <SearchBar onSearchInput={onSubmitSearch} />
        </div>
      </div>
      <div className="row">
        <hr />
        <ListStaff staffs={notSearch ? totalStaffs : staffs} />
      </div>
    </div>
  );
};

export default StaffList;
