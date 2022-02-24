import classes from "./Layout.module.css";
import { Fragment } from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = (props) => {
  return (
    <Fragment>
      <Header />
      <main className={`${classes.main} container-fluid`}>{props.children}</main>
      <Footer />
    </Fragment>
  );
};

export default Layout;
