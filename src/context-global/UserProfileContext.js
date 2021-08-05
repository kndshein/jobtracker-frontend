import React, { createContext, useEffect, useReducer, useMemo } from "react";

import { getUserProfile } from "../apicalls/UserProfile-API";

const UserProfileContext = createContext();

const initialUserProfileState = {
  user: null,
  isLoggedIn: false,
};


const UserProfileReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, isLoggedIn: action.payload };
    case "SET_USER":
      return { ...state, user: action.payload };
    default:
      throw new Error();
  }
};

const UserProfileProvider = (props) => {
  const [state, dispatch] = useReducer(
    UserProfileReducer,
    initialUserProfileState
  );

  const token = useMemo(() => {
    return sessionStorage.getItem("token");
  }, []);

  const fetchUserProfileAPI = async () => {
    try {
      const { data } = await getUserProfile();

      dispatch({
        type: "SET_USER",
        payload: data,
      });
    } catch (err) {
      dispatch({
        type: "SET_USER",
        payload: null,
      });

      console.log("You are not logged in");
    }
  };

  useEffect(() => {
    if (state.isLoggedIn) {
      fetchUserProfileAPI();
    } else {
      console.log("There is no token");
    }
  }, [state.isLoggedIn]);

  const { Provider } = UserProfileContext;

  return <Provider value={{ ...state, dispatch }}>{props.children}</Provider>;
};

export { UserProfileContext, UserProfileProvider };
