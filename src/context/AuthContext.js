import { faBorderStyle } from "@fortawesome/free-solid-svg-icons";
import React, { useContext, useState, useEffect } from "react";

const AuthContext = React.createContext();

const useAuthcontext = () => {
  return useContext(AuthContext);
};
const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  const signin = () => {};
  const signout = () => {};

  const signup = async (fullname, email, password) => {
    const body = { fullname, email, password };
    const url = "https://phoenix-nest.herokuapp.com/api/v1/user/signup";
    const option = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    };
    const response = await fetch(url, option);
    const data = await response.json();

    return data;
  };

  const value = {
    currentUser,
    signin,
    signout,
    signup,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { AuthProvider, useAuthcontext };
