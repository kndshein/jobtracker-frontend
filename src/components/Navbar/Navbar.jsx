import React, { useContext } from "react";
import { Link } from "react-router-dom";
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
    <div className="navbar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/jobs">Jobs</Link>
        </li>
      </ul>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Navbar;
