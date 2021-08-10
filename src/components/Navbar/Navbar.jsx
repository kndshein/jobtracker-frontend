import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.scss";

const Navbar = (props) => {
  return (
    <div className={styles.navbar_container}>
      <Link to="/">Home</Link>
      <Link to="/jobs">Jobs</Link>
    </div>
  );
};

export default Navbar;
