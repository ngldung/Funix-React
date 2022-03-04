import React, { useEffect, useRef } from "react";
import { Card } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { staffActions } from "../../store";
import classes from "./AddForm.module.css";

const AddForm = (props) => {

  // Define all input from user , link to store index.js
  const dispatch = useDispatch();
  const staffs = useSelector((state) => state.totalStaffs);
  const name = useSelector((state) => state.nameInput);
  const nameIsValid = useSelector((state) => state.nameIsValid);
  const nameTouched = useSelector((state) => state.nameTouched);
  const dobIsValid = useSelector((state) => state.dobIsValid);
  const dobTouched = useSelector((state) => state.dobTouched);
  const startIsValid = useSelector((state) => state.startIsValid);
  const startTouched = useSelector((state) => state.startTouched);
  const formIsValid = useSelector((state) => state.formIsValid);
  const nameError = useSelector((state) => state.nameError);
  const dobError = useSelector((state) => state.dobError);
  const startError = useSelector((state) => state.startError);

  // useRef hook to get value of user inputs (not for name)
  const dobRef = useRef();
  const startRef = useRef();
  const deptRef = useRef();
  const salaryRef = useRef();
  const leaveRef = useRef();
  const overtimeRef = useRef();

// Combine "TOUCHED" that use to show error: only show error if input field is touched
  const nameInputInValid = !nameIsValid && nameTouched;
  const dobInputInValid = !dobIsValid && dobTouched;
  const startInputInValid = !startIsValid && startTouched;

// Check overall form validity to approve add new staff or not
  useEffect(() => {
    if (nameIsValid && dobIsValid && startIsValid) {
      dispatch(staffActions.formValidHandler());
    }
  }, [nameIsValid, dobIsValid, startIsValid]);


// function check validity name input, only valid when name >= 2 and name <20 character
  const nameInputHandler = (event) => {
    const inputName = event.target.value;
    dispatch(staffActions.nameTouchedHandler());
    dispatch(staffActions.changeNameInput(inputName));
    if (name.length < 2) {
      dispatch(staffActions.editNameError("Vui lòng điền tối thiểu 2 chữ cái"));
      dispatch(staffActions.nameInvalidHandler());
    } else if (name.length < 20) {
      dispatch(staffActions.editNameError(""));
      dispatch(staffActions.nameValidHandler());
    } else {
      dispatch(staffActions.editNameError("Vui lòng điền ít hơn 20 chữ cái"));
      dispatch(staffActions.nameInvalidHandler());
    }
  };
// function handler day of birth input
  const dobInputHandler = () => {
    console.log(dobRef.current.value);
    dispatch(staffActions.nameTouchedHandler());
    if (dobRef.current.value != "") {
      dispatch(staffActions.dobValidHandler());
      dispatch(staffActions.editDobError(""));
    } 
    if (dobRef.current.value === "") {
      dispatch(staffActions.dobInvalidHandler());
      dispatch(staffActions.editDobError("Yêu cầu nhập thông tin"));

    }
  };
// function start date input
  const startInputHandler = () => {
    console.log(startRef.current.value);
    dispatch(staffActions.nameTouchedHandler());
    if (startRef.current.value != "") {
      dispatch(staffActions.startValidHandler());
      dispatch(staffActions.editStartError(""));
    } 
    if (startRef.current.value === "") {
      dispatch(staffActions.startInvalidHandler());
      dispatch(staffActions.editStartError("Yêu cầu nhập thông tin"));
      
    }
  };

  //Function handler when click submit button to add user or not (show error)
  const submitHandler = (event) => {
    event.preventDefault();
    const newStaff = {
      name: name,
      doB: dobRef.current.value,
      salaryScale: salaryRef.current.value,
      startDate: startRef.current.value,
      department: deptRef.current.value,
      annualLeave: leaveRef.current.value,
      overTime: overtimeRef.current.value,
      salary: (
        salaryRef.current.value * 3000000 +
        (overtimeRef.current.value / 8) * 200000
      ).toFixed(0),
      image: "/assets/images/alberto.png",
      id: staffs.length,
    };
    dispatch(staffActions.nameTouchedHandler());
    dispatch(staffActions.dobTouchedHandler());
    dispatch(staffActions.startTouchedHandler());
    console.log(formIsValid);

    if (formIsValid) {
      dispatch(staffActions.addNewStaff(newStaff));
      dispatch(staffActions.closeNewStaff());
    } else {
      if (name === "") {
        dispatch(staffActions.editNameError("Yêu cầu nhập thông tin"));
      }
      if (dobRef.current.value === "") {
        dispatch(staffActions.editDobError("Yêu cầu nhập thông tin"));
      }
      if (startRef.current.value === "") {
        dispatch(staffActions.editStartError("Yêu cầu nhập thông tin"));
      }
      return;
    }
  };

  return (
    <Card className={classes.modal}>
      <div className={classes.header}>
        <h2>Thêm nhân viên</h2>
        <button onClick={props.onExit}>Thoát</button>
      </div>
      <div className={classes.content}>
        <form onSubmit={submitHandler} className={classes.form}>
          <div>
            <label htmlFor="name">Tên:</label>
            <input
              type="text"
              id="name"
              onChange={nameInputHandler}
              onBlur={nameInputHandler}
            />
            {nameInputInValid && <p className={classes.error}>{nameError}</p>}
          </div>
          <div>
            <label htmlFor="dob">Ngày sinh:</label>
            <input
              type="date"
              id="dob"
              onChange={dobInputHandler}
              onBlur={dobInputHandler}

              ref={dobRef}
            />
            {dobInputInValid && <p className={classes.error}>{dobError}</p>}
          </div>
          <div>
            <label htmlFor="startdate">Ngày vào công ty:</label>
            <input
              type="date"
              id="startdate"
              onChange={startInputHandler}
              onBlur={startInputHandler}

              ref={startRef}
            />
            {startInputInValid && <p className={classes.error}>{startError}</p>}
          </div>
          <div>
            <label htmlFor="dept">Phòng ban:</label>
            <select id="dept" name="dept" ref={deptRef}>
              <option value="sale">Sale</option>
              <option value="hr">HR</option>
              <option value="marketing">Marketing</option>
              <option value="finance">Finance</option>
              <option value="it">IT</option>
            </select>
          </div>
          <div>
            <label htmlFor="salaryrate">Hệ số lương:</label>
            <input type="number" id="salaryrate" ref={salaryRef} />
          </div>
          <div>
            <label htmlFor="leave">Số ngày nghỉ còn lại:</label>
            <input type="number" id="leave" ref={leaveRef} />
          </div>
          <div>
            <label htmlFor="overtime">Số ngày làm thêm:</label>
            <input type="number" id="overtime" ref={overtimeRef} />
          </div>

          <div>
            <button type="submit" className={classes.button}>
              Thêm
            </button>
          </div>
        </form>
      </div>
    </Card>
  );
};

export default AddForm;
