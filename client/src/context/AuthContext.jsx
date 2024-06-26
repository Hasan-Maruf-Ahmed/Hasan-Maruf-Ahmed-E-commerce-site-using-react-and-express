/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useEffect, useReducer } from "react";

export const AuthContext = createContext();

export const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { user: action.payload };
    case "LOGOUT":
      return { user: null };
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
  });

  useEffect(() => {
    try {
        const user = JSON.parse(localStorage.getItem("user"));
        if (user) {
          dispatch({ type: "LOGIN", payload: user });
        }
      } catch (error) {
        console.error("Failed to parse user from localStorage", error);
      }
  }, []);

  useEffect(() => {
    console.log("AuthContext State: ", state);
  }, [state]);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
