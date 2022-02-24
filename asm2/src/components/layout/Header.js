import { NavLink, Link } from "react-router-dom";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <Link className={classes.logo} to="/staffs" >Trang chủ</Link>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink activeClassName={classes.active} to="/staffs">
              Nhân Viên
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to="/dept">
              Phòng ban
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to="/salary">
              Bảng lương
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
