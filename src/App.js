import React, { useState } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import './App.css';
import StaffList from "./components/StaffList";
import { STAFFS } from "./shared/staffs.jsx"
import ColSelect from "./components/ColSelect";


function App() {
  const [pickCol, setPickCol] = useState(4);
  const [select, setSelect] = useState("3");
  const selectColHandler = col => {
    // console.log(col);
    setPickCol(col);
    switch (col) {
      case 6: 
      setSelect("2");
      break;
      case 4:
      setSelect("3");
      break;
      case 2:
      setSelect("6");
      break
  }
  }
  

  return (
    <div>
        <Navbar dark color="primary">
          <div className="container-fluid">
            <NavbarBrand href="/">Ứng dụng quản lý nhân sự v1.0</NavbarBrand>
            <ColSelect initialCol={select} onSelectCol={selectColHandler}/>
          </div>
        </Navbar>
        <StaffList setCol={pickCol} staffs={STAFFS}/>
      </div>
  );
}

export default App;
