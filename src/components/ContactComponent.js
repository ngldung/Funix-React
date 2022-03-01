import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Col,
  Row,
  FormFeedback,
} from "reactstrap";

const INITIAL_INPUT = {
  firstname: "",
  lastname: "",
  telnum: "",
  email: "",
  agree: false,
  contactType: "Tel.",
  message: "",
};
const INITIAL_TOUCHED = {
  firstname: false,
  lastname: false,
  telnum: false,
  email: false,
};

const Contact = (props) => {
  const [userInput, setUserInput] = useState(INITIAL_INPUT);
  const [touchedInput, setTouchedInput] = useState(INITIAL_TOUCHED);

  const handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    setUserInput((prevInput) => {
      return { ...prevInput, [name]: value };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Current State is: " + JSON.stringify(userInput));
    alert("Current State is: " + JSON.stringify(userInput));
  };

  const handleBlur = (field) => {
    setTouchedInput((prevTouched) => {
      return { ...prevTouched, [field]: true };
    });
  };

  const validate = (firstname, lastname, telnum, email) => {
    const errors = {
      firstname: "",
      lastname: "",
      telnum: "",
      email: "",
    };

    if (touchedInput.firstname && firstname.length < 3)
      errors.firstname = "First Name should be >= 3 characters";
    else if (touchedInput.firstname && firstname.length > 10)
      errors.firstname = "First Name should be <= 10 characters";

    if (touchedInput.lastname && lastname.length < 3)
      errors.lastname = "Last Name should be >= 3 characters";
    else if (touchedInput.lastname && lastname.length > 10)
      errors.lastname = "Last Name should be <= 10 characters";

    const reg = /^\d+$/;
    if (touchedInput.telnum && !reg.test(telnum))
      errors.telnum = "Tel. Number should contain only numbers";

    if (
      touchedInput.email &&
      email.split("").filter((x) => x === "@").length !== 1
    )
      errors.email = "Email should contain a @";

    return errors;
  };

  const errors = validate(
    userInput.firstname,
    userInput.lastname,
    userInput.telnum,
    userInput.email
  );

  return (
    <div>
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/home">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>Contact Us</BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
          <h3>Contact Us</h3>
          <hr />
        </div>
      </div>

      {/* FORM CONTROLLED */}
      <div className="row row-content">
        <div className="col-12">
          <h3>Send us your Feedback</h3>
        </div>
        <div className="col-12 col-md-9">
          <Form onSubmit={handleSubmit}>
            <FormGroup row>
              <Label htmlFor="firstname" md={2}>
                First Name
              </Label>
              <Col md={10}>
                <Input
                  type="text"
                  id="firstname"
                  name="firstname"
                  placeholder="First Name"
                  value={userInput.firstname}
                  valid={errors.firstname === ""}
                  invalid={errors.firstname !== ""}
                  onBlur={() => handleBlur("firstname")}
                  onChange={handleInputChange}
                />
                <FormFeedback>{errors.firstname}</FormFeedback>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label htmlFor="lastname" md={2}>
                Last Name
              </Label>
              <Col md={10}>
                <Input
                  type="text"
                  id="lastname"
                  name="lastname"
                  placeholder="Last Name"
                  value={userInput.lastname}
                  valid={errors.lastname === ""}
                  invalid={errors.lastname !== ""}
                  onBlur={() => handleBlur("lastname")}
                  onChange={handleInputChange}
                />
                <FormFeedback>{errors.lastname}</FormFeedback>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label htmlFor="telnum" md={2}>
                Contact Tel.
              </Label>
              <Col md={10}>
                <Input
                  type="tel"
                  id="telnum"
                  name="telnum"
                  placeholder="Tel. Number"
                  value={userInput.telnum}
                  valid={errors.telnum === ""}
                  invalid={errors.telnum !== ""}
                  onBlur={() => handleBlur("telnum")}
                  onChange={handleInputChange}
                />
                <FormFeedback>{errors.telnum}</FormFeedback>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label htmlFor="email" md={2}>
                Email
              </Label>
              <Col md={10}>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  value={userInput.email}
                  valid={errors.email === ""}
                  invalid={errors.email !== ""}
                  onBlur={() => handleBlur("email")}
                  onChange={handleInputChange}
                />
                <FormFeedback>{errors.email}</FormFeedback>
              </Col>
            </FormGroup>
          </Form>
        </div>
      </div>

      <div className="container">
        <div className="row row-content">
          <div className="col-12">
            <h3>Location Information</h3>
          </div>
          <div className="col-12 col-sm-4 offset-sm-1">
            <h5>Our Address</h5>
            <address>
              121, Clear Water Bay Road
              <br />
              Clear Water Bay, Kowloon
              <br />
              HONG KONG
              <br />
              <i className="fa fa-phone"></i>: +852 1234 5678
              <br />
              <i className="fa fa-fax"></i>: +852 8765 4321
              <br />
              <i className="fa fa-envelope"></i>:{" "}
              <a href="mailto:confusion@food.net">confusion@food.net</a>
            </address>
          </div>
          <div className="col-12 col-sm-6 offset-sm-1">
            <h5>Map of our Location</h5>
          </div>
          <div className="col-12 col-sm-11 offset-sm-1">
            <div className="btn-group" role="group">
              <a
                role="button"
                className="btn btn-primary"
                href="tel:+85212345678"
              >
                <i className="fa fa-phone"></i> Call
              </a>
              <a role="button" className="btn btn-info">
                <i className="fa fa-skype"></i> Skype
              </a>
              <a
                role="button"
                className="btn btn-success"
                href="mailto:confusion@food.net"
              >
                <i className="fa fa-envelope-o"></i> Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
