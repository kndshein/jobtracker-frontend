import React, { createContext, useContext, useReducer } from "react";

const UserDetailContext = createContext();

const initialState = {
  user: null,
};

const UserDetailReducer = (state, action) => {
  switch (action.type) {
    case "GET_USER":
      return { user: action.payload };
    default:
      throw new Error();
  }
};

const UserDetailProvider = () => {
  const [state, dispatch] = useReducer(UserDetailReducer, initialState);
  const { Provider } = UserDetailContext;

  return <Provider state={state} dispatch={dispatch} />;
};

export { UserDetailContext, UserDetailProvider };
