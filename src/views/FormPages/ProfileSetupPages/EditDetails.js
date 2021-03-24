// react and hooks
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";

import { Button, Input } from "../../../components/FormView/Inputs";
import { Logo } from "../../../components/Logo/Logo";

import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// css
import "./ProfileSetupPages.css";
import { useAuthContext } from "../../../context/AuthContext";
import Preloader from "../../../components/PreLoader/Preloader";

const EditDetails = () => {
  // states
  const [userInputs, setUserInputs] = useState({
    workPlace: "",
    positionAtWork: "",
    phoneNumber: "",
    location: "",
    industry: "",
    linkedin: "",
    description: "",
    fullname: "",
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [details, setDetails] = useState(null);

  // other hooks
  const history = useHistory();
  const { updateUserProfile, getUserProfile } = useAuthContext();

  useEffect(() => {
    const unsub = getUserProfile()
      .then((res) => {
        setLoading(false);
        if (res.success) {
          setDetails(res.payload);
          setDefaultInputs(res.payload);
        } else {
          throw new Error(res.message);
        }
      })
      .catch((err) => {
        setLoading(false);
        setError(err.message || err.Error || err);
      });
    return unsub;
  }, [getUserProfile]);

  const setDefaultInputs = (details) => {
    const {
      workPlace,
      positionAtWork,
      phoneNumber,
      location,
      industry,
      linkedin,
      description,
      fullname,
    } = details;

    setUserInputs({
      workPlace,
      positionAtWork,
      phoneNumber: phoneNumber,
      location,
      industry,
      linkedin,
      description,
      fullname,
    });
  };
  const handleProfileUpdate = (e) => {
    e.preventDefault();
    const { phoneNumber } = userInputs;
    // check if phone is
    if (!phoneNumber.toString().match(/^\d{10}$/)) {
      setError("Phone number not valid");
      return false;
    }
    setSubmitting(true);

    updateUserProfile(userInputs)
      .then((response) => {
        if (response.success) {
          console.log(response);
          setSubmitting(false);
          history.push(
            `/user/profile/${localStorage.getItem("currentUserId")}`
          );
        } else {
          throw new Error(response.message);
        }
      })
      .catch((err) => {
        setError(err.message || err.Error);
        console.log(err.message || err.Error || err);
        setSubmitting(false);
      });
  };

  const handleTextChange = (e) => {
    setError(null);
    const { name, value } = e.target;

    setUserInputs({ ...userInputs, [name]: value });
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
      {error && <p>{error.toLowerCase()}</p>}
      {loading && <Preloader size={70} border={10} color="#d63e39" />}
      {details && (
        <form onSubmit={handleProfileUpdate}>
          <p className="form-desc">Update your profile</p>
          <Input
            type="text"
            name="fullname"
            id="fullname"
            required={false}
            placeholder="full name"
            inputFuncs={{
              onChange: handleTextChange,
              value: userInputs.fullname,
              disabled: submitting,
            }}
          />
          <Input
            type="text"
            name="workPlace"
            id="workPlace"
            required={false}
            placeholder="Work place"
            inputFuncs={{
              onChange: handleTextChange,
              value: userInputs.workPlace,
              disabled: submitting,
            }}
          />
          <Input
            type="text"
            name="positionAtWork"
            id="positionAtWork"
            required={false}
            placeholder="position at work"
            inputFuncs={{
              onChange: handleTextChange,
              value: userInputs.positionAtWork,
              disabled: submitting,
            }}
          />
          <Input
            type="text"
            name="location"
            id="location"
            required={false}
            placeholder="location"
            inputFuncs={{
              onChange: handleTextChange,
              value: userInputs.location,
              disabled: submitting,
            }}
          />
          <Input
            type="text"
            name="industry"
            id="industry"
            required={false}
            placeholder="industry"
            inputFuncs={{
              onChange: handleTextChange,
              value: userInputs.industry,
              disabled: submitting,
            }}
          />
          <Input
            type="url"
            name="linkedin"
            id="linkedin"
            required={false}
            placeholder="linkedin profile link"
            inputFuncs={{
              onChange: handleTextChange,
              value: userInputs.linkedin,
              disabled: submitting,
            }}
          />
          <Input
            type="tel"
            name="phoneNumber"
            id="phoneNumber"
            required={true}
            placeholder="phone number"
            preInput="+234"
            inputFuncs={{
              onChange: handleTextChange,
              value: userInputs.phoneNumber,
              disabled: submitting,
            }}
          />
          <Input
            type="textarea"
            name="description"
            id="description"
            required={false}
            placeholder="description"
            inputFuncs={{
              onChange: handleTextChange,
              value: userInputs.description,
              disabled: submitting,
            }}
          />
          <Button type="submit" disabled={submitting}>
            {submitting ? "submitting..." : "Submit"}
          </Button>
        </form>
      )}
    </div>
  );
};

export default EditDetails;
