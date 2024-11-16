import { NavLink } from "react-router-dom";
import styles from "./AuthNav.module.css";
import clsx from "clsx";

const linkClasses = ({ isActive }) => {
  return clsx(styles.link, isActive && styles.active);
};

const AuthNav = () => {
  return (
    <div className={styles.authCont}>
      <NavLink className={linkClasses} to="/register">
        Register
      </NavLink>
      <NavLink className={linkClasses} to="/login">
        Log in
      </NavLink>
    </div>
  );
};

export default AuthNav;