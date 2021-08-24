import React, { createContext, useEffect, useReducer } from "react";

import { getUserProfile } from "../apicalls/UserProfile-API";

const UserProfileContext = createContext();

const types = {
  login: "LOGIN",
  set_user: "SET_USER",
};

const initialUserProfileState = {
  user: null,
  isLoggedIn: false,
};

const UserProfileReducer = (state, action) => {
  switch (action.type) {
    case types.login:
      return { ...state, isLoggedIn: action.payload };
    case types.set_user:
      return {
        ...state,
        isLoggedIn: action.payload ? true : false,
        user: action.payload,
      };
    default:
      throw new Error();
  }
};

const UserProfileProvider = (props) => {
  const [state, dispatch] = useReducer(
    UserProfileReducer,
    initialUserProfileState
  );

  // const token = useMemo(() => {
  //   return sessionStorage.getItem("token");
  // }, []);

  const fetchUserProfileAPI = async () => {
    try {
      const { data } = await getUserProfile();

      dispatch({
        type: types.set_user,
        payload: data,
      });
    } catch (err) {
      dispatch({
        type: types.set_user,
        payload: null,
      });

      console.log("You are not logged in");
    }
  };

  useEffect(() => {
    fetchUserProfileAPI();
  }, [state.isLoggedIn]);

  const { Provider } = UserProfileContext;

  return (
    <Provider value={{ types, state, dispatch }}>{props.children}</Provider>
  );
};

export { UserProfileContext, UserProfileProvider };
