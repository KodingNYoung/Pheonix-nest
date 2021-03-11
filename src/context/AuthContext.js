import React, { useContext, useState, useEffect } from "react";

const AuthContext = React.createContext();

const useAuthContext = () => {
  return useContext(AuthContext);
};
const AuthProvider = ({ children }) => {
  const [currentUserId, setCurrentUserId] = useState(null);

  const signin = (email, password) => {
    const body = { email, password };
    const url = "https://phoenix-nest.herokuapp.com/api/v1/user/login";

    return postRequestFormat(body, url)
      .then((res) => {
        if (res.success) {
          // save token to localstorage
          localStorage.setItem("authToken", res.token);
          // save user id to state
          localStorage.setItem("currentUserId", res.userId);
        } else {
          throw new Error(res.message);
        }
        return res;
      })
      .catch((err) => {
        return err;
      });
  };
  const signout = () => {
    return new Promise((resolve, reject) => {
      if (currentUserId || localStorage.getItem("authToken")) {
        localStorage.removeItem("authToken");
        localStorage.removeItem("currentUserId");
        resolve("Successful signout");
      } else {
        reject("Unable to logout");
      }
    });
  };

  const signup = async (fullname, email, password) => {
    const body = { fullname, email, password };
    const url = "https://phoenix-nest.herokuapp.com/api/v1/user/signup";

    return postRequestFormat(body, url);
  };
  const recoverPassword = (email) => {
    const body = { email };
    const url = "https://phoenix-nest.herokuapp.com/api/v1/user/recover";

    return postRequestFormat(body, url);
  };
  const verifyToken = (email, token) => {
    const body = { email, token };
    const url = "https://phoenix-nest.herokuapp.com/api/v1/user/verify-token";

    return postRequestFormat(body, url);
  };
  const resetPassword = (password, token) => {
    const body = { password, token };
    const url = "https://phoenix-nest.herokuapp.com/api/v1/user/reset/";

    return postRequestFormat(body, url);
  };
  const uploadAvatar = (file) => {
    const body = new FormData();
    body.append("avatar", file);
    const url = "https://phoenix-nest.herokuapp.com/api/v1/user/me/avatar";

    return postImageFormat(body, url, true);
  };
  const getUserProfile = (userId = localStorage.getItem("currentUserId")) => {
    // const userId = localStorage.getItem("currentUserId");
    const url = `https://phoenix-nest.herokuapp.com/api/v1/user/${userId}`;

    return getRequestFormat(url);
  };
  const getPitchById = (pitchId) => {
    const url = `https://phoenix-nest.herokuapp.com/api/v1/pitch/${pitchId}`;

    return getRequestFormat(url);
  };
  const updateUserProfile = (body) => {
    const url = `https://phoenix-nest.herokuapp.com/api/v1/user/me`;

    return patchRequestFormat(body, url);
  };
  const createPitch = (body) => {
    const url = "https://phoenix-nest.herokuapp.com/api/v1/pitch";

    return postRequestFormat(body, url, true);
  };
  const getTopPitches = () => {
    const url = `https://phoenix-nest.herokuapp.com/api/v1/pitch/get/recent`;

    return getRequestFormat(url);
  };
  const commentOnPitch = (comment, pitchId) => {
    const body = { comment };
    const url = `https://phoenix-nest.herokuapp.com/api/v1/pitch/${pitchId}/comments`;

    return postRequestFormat(body, url, true);
  };
  const postRequestFormat = async (body, url, auth = false) => {
    const authToken = localStorage.getItem("authToken");

    const option = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: auth ? `Bearer ${authToken}` : "",
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
  const postImageFormat = async (body, url, auth = false) => {
    const authToken = localStorage.getItem("authToken");

    const option = {
      method: "POST",
      headers: {
        Authorization: auth ? `Bearer ${authToken}` : "",
      },
      body: body,
    };
    try {
      const response = await fetch(url, option);
      const data = await response.json();
      return data;
    } catch (err) {
      return err;
    }
  };
  const getRequestFormat = async (url) => {
    const authToken = localStorage.getItem("authToken");

    const option = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken}`,
      },
    };
    try {
      const response = await fetch(url, option);
      const data = await response.json();
      return data;
    } catch (err) {
      return err;
    }
  };
  const patchRequestFormat = async (body, url) => {
    const authToken = localStorage.getItem("authToken");

    const option = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken}`,
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
    verifyToken,
    getUserProfile,
    updateUserProfile,
    uploadAvatar,
    createPitch,
    getTopPitches,
    getPitchById,
    commentOnPitch,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { AuthProvider, useAuthContext };
