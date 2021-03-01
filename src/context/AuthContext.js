import React, { useContext, useState, useEffect } from "react";

const AuthContext = React.createContext();

const useAuthContext = () => {
  return useContext(AuthContext);
};
const AuthProvider = ({ children }) => {
  const [currentUserId, setCurrentUserId] = useState(null);
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  const signin = (email, password) => {
    const body = { email, password };
    const url = "https://phoenix-nest.herokuapp.com/api/v1/user/login";

    requestFormat(body, url, "POST")
      .then((res) => {
        console.log(res);
        if (res.success) {
          // save token to localstorage
          // localStorage.setItem("authorizationToken", res.token)
          // save user id to state
          // setCurrentUserId(res.userId)
          // return res
          // return res
        } else {
          throw new Error(res.message);
        }
      })
      .catch((err) => {
        console.log(err.message || err.Error);
      });
  };
  const signout = () => {};

  const signup = async (fullname, email, password) => {
    const body = { fullname, email, password };
    const url = "https://phoenix-nest.herokuapp.com/api/v1/user/signup";

    return requestFormat(body, url, "POST");
  };
  const recoverPassword = (email) => {
    const body = { email };
    const url = "https://phoenix-nest.herokuapp.com/api/v1/user/recover";

    return requestFormat(body, url, "POST");
  };
  const verifyToken = (email, codeToken) => {
    const body = {email, codeToken};
    const url = "";

    return requestFormat(body, url, "POST");
  }
  const resetPassword = (password) => {
    const body = { password };
    const url = "https://phoenix-nest.herokuapp.com/api/v1/user/reset/";

    return requestFormat(body, url, "POST");
  };

  const requestFormat = async (body, url, method) => {
    const option = {
      method: method,
      headers: {
        "Content-Type": "application/json",

        // Authorization: `Bearer ${Token}`
      },
      body: JSON.stringify(body),
    };
    try {
      const response = await fetch(url, option);
      const data = await response.json();
      return data;
    } catch (err) {
      return err;
    }
  };

  const value = {
    currentUserId,
    signin,
    signout,
    signup,
    resetPassword,
    recoverPassword,
    verifyToken
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { AuthProvider, useAuthContext };
