import React, { useState } from 'react';
import { Card, Container, Row, Col } from 'reactstrap';
import "./StaffList.css"
import dateFormat from "dateformat";


const StaffList = props => {
const [clickStaff, setClickStaff] = useState(<p>Bấm vào tên nhân viên để xem thông tin</p>)
const staffClickHandler = (staff) => {
    console.log(staff.department.name);
    setClickStaff((
        <Col xs={12} md={6} lg={4} className='staff'>
        <Card className='staff-detail'>
            <h5>Họ và tên: {staff.name}</h5>
            <p>Ngày sinh: {dateFormat(staff.doB, "dd/mm/yyyy")} </p>
            <p>Ngày vào công ty: {dateFormat(staff.startDate, "dd/mm/yyyy")}</p>
            <p>Phòng ban: {staff.department.name}</p>
            <p>Số ngày nghỉ còn lại: {staff.annualLeave}</p>
            <p>Số ngày đã làm thêm: {staff.overTime}</p>
        </Card>
    </Col>    
    ))
}

return (
    <Container>
        <Row>
        {props.staffs.map(staff => {
                return (          
                    <Col key={staff.id} xs={12} md={6} lg={props.setCol} className='staff'>
                        <Card className="staff-col"  onClick={() => staffClickHandler(staff)}>
                            {staff.name}
                        </Card>
                    </Col>            
                )
          })}
        </Row>
        <Row>
        {clickStaff}
        </Row>
        
    </Container>
);
}

export default StaffList;