import React, { useState, useRef } from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavbarToggler,
  Collapse,
  NavItem,
  Jumbotron,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
} from "reactstrap";
import { NavLink, Link } from "react-router-dom";
import Input from "./Input";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const usernameRef = useRef();
  const passwordRef = useRef();
  const rememberRef = useRef();

  const toggleNav = () => {
    setIsNavOpen((prevState) => {
      return !prevState;
    });
  };

  const toggleModal = () => {
    setIsModal((prevState) => {
      return !prevState;
    });
  };

  const handleLogin = (event) => {
    toggleModal();

    console.log(usernameRef.current.value);

    alert(
      "Username: " +
        usernameRef.current.value +
        " Password: " +
        passwordRef.current.value +
        " Remember: " +
        rememberRef.current.value
    );
    event.preventDefault();
  };

  return (
    <div>
      <Modal isOpen={isModal} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>Login</ModalHeader>
        <ModalBody>
          <Form onSubmit={handleLogin}>
            <FormGroup>
              <Input
                type="text"
                id="username"
                name="username"
                label="Username"
                ref={usernameRef}
              />
            </FormGroup>
            <FormGroup>
              <Input
                type="password"
                id="password"
                name="password"
                label="Password"
                ref={passwordRef}
              />
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="checkbox" name="remember" ref={rememberRef} />
                Remember me
              </Label>
            </FormGroup>
            <Button type="submit" value="submit" color="primary">
              Login
            </Button>
          </Form>
        </ModalBody>
      </Modal>

      <Navbar color="light" light expand="md">
        <div className="container">
          <NavbarToggler onClick={toggleNav} />
          <Link to="/">
            <img
              src="assets/images/logo.png"
              height="30"
              width="41"
              alt="Ristorante Con Fusion"
            />
          </Link>
          <Collapse isOpen={isNavOpen} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink className="nav-link" to="/home">
                  <span className="fa fa-home fa-lg"></span> Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/aboutus">
                  <span className="fa fa-info fa-lg"></span> About Us
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/menu">
                  <span className="fa fa-list fa-lg"></span> Menu
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/contactus">
                  <span className="fa fa-address-card fa-lg"></span> Contact Us
                </NavLink>
              </NavItem>
            </Nav>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Button outline onClick={toggleModal}>
                  <span className="fa fa-sign-in fa-lg"></span> Login
                </Button>
              </NavItem>
            </Nav>
          </Collapse>
        </div>
      </Navbar>
      <Jumbotron>
        <div className="container">
          <div className="row row-header">
            <div className="col-12 col-sm-6">
              <h1>Ristorante con Fusion</h1>
              <p>
                We take inspiration from the World's best cuisines, and create a
                unique fusion experience. Our lipsmacking creations will tickle
                your culinary senses!
              </p>
            </div>
          </div>
        </div>
      </Jumbotron>
    </div>
  );
};

export default Header;

// class Header extends Component {
//     constructor(props) {
//         super(props);

//         this.toggleNav = this.toggleNav.bind(this);
//         this.state = {
//           isNavOpen: false
//         };
//       }
