import classes from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faPhone,
  faBlenderPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fab, faPhone, faBlenderPhone, faEnvelope);

const Footer = () => {
  return (
    <footer className={`${classes.footer} container-fluid`}>
      <div className="row">
        <div className={`${classes.footerContainer} col-lg-6`}>
          <div className={classes.footer1}>
            <h2>Our Address</h2>
            <p>121, Clear Water Bay Road</p>
            <p>Clear Water Bay, Kowloon</p>
            <p>HONGKONG</p>
            <FontAwesomeIcon icon="fa-solid fa-phone" pull="left" />
            <p>:0915480824</p>
            <FontAwesomeIcon icon="fa-solid fa-blender-phone" pull="left" />
            <p>:0383923871</p>
            <FontAwesomeIcon icon="fa-solid fa-envelope" pull="left" />
            <p>luongdung.tdc@gmail.com</p>
          </div>
        </div>

        <div className={`${classes.footer2} col-lg-6`}>
          <FontAwesomeIcon icon={["fab", "google"]} size="3x" />
          <FontAwesomeIcon icon={["fab", "facebook"]} size="3x" />
          <FontAwesomeIcon icon={["fab", "linkedin"]} size="3x" />
          <FontAwesomeIcon icon={["fab", "youtube"]} size="3x" />
          <FontAwesomeIcon icon={["fab", "instagram"]} size="3x" />
        </div>
      </div>
      <div className="row col" style={{ textAlign: "center" }}>
        <p>@ Copyright 2021 NGUYEN LUONG DUNG</p>
      </div>
    </footer>
  );
};

export default Footer;
