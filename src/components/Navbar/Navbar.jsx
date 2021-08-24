import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.scss";
import { UserProfileContext } from "../../context-global/UserProfileContext";

const Navbar = (props) => {
  const { types, dispatch } = useContext(UserProfileContext);

  const logout = () => {
    sessionStorage.setItem("token", null);
    dispatch({
      type: types.login,
      payload: false,
    });
  };

  return (
    <div className={styles.navbar_container}>
      <Link to="/">Home</Link>
      <Link to="/jobs">Jobs</Link>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Navbar;
