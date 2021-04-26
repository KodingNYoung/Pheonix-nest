// react and hooks
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";

import { Input } from "../../../components/FormView/Inputs";
import { Button } from "../../../components/Buttons/Buttons";
import { Logo } from "../../../components/Logo/Logo";
import { ErrorToast } from "../../../components/Errors/Error";

import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// css
import "./ProfileSetupPages.css";
import { useAuthContext } from "../../../context/AuthContext";

const UploadAvatar = () => {
  // states
  const [avatar, setAvatar] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // other hooks
  const history = useHistory();
  const { uploadAvatar } = useAuthContext();

  const handleProfileUpdate = (e) => {
    e.preventDefault();

    setLoading(true);
    uploadAvatar(avatar)
      .then((response) => {
        setLoading(false);
        console.log(response);
        if (response.success) {
          history.push(
            `/user/profile/${localStorage.getItem("currentUserId")}`
          );
        } else {
          throw new Error(response.message);
        }
      })
      .catch((err) => {
        setLoading(false);
        console.log(err.message || err.Error || err);
      });
  };
  const handleFileChange = (e) => {
    const selected = e.target.files[0];
    if (selected) {
      setError(null);
      setAvatar(selected);
    } else {
      setError("select a valid image.");
      setAvatar(null);
    }
  };
  const onArrowClick = () => {
    history.goBack();
  };

  return (
    <div className="edit-user-form">
      <nav>
        <button onClick={onArrowClick}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        <Logo />
      </nav>
      <h2>Setup profile</h2>
      {error && <ErrorToast> {error.toLowerCase()}</ErrorToast>}
      <form onSubmit={handleProfileUpdate}>
        <p className="form-desc">Upload your avatar</p>
        <Input
          type="file"
          name="avatar"
          id="avatar"
          required={false}
          placeholder="Upload avatar"
          inputFuncs={{
            onChange: handleFileChange,
            disabled: loading,
            accept: "image/*",
            required: true,
          }}
        />

        <Button type="submit" disabled={loading}>
          {loading ? "loading..." : "Upload avatar"}
        </Button>
      </form>
    </div>
  );
};

export default UploadAvatar;
