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
  const [loading, setLoading] = useState(false);
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
      phoneNumber: "0" + phoneNumber,
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
    if (!phoneNumber.match(/^\d{11}$/)) {
      setError("Phone number not valid");
      return false;
    }
    setLoading(true);

    updateUserProfile(userInputs)
      .then((response) => {
        if (response.success) {
          console.log(response);
          setLoading(false);
          history.push("/user/profile");
        } else {
          throw new Error(response.message);
        }
      })
      .catch((err) => {
        setError(err.message || err.Error);
        console.log(err.message || err.Error || err);
        setLoading(false);
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
    <div className='edit-user-form'>
      <nav>
        <button onClick={onArrowClick}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        <Logo />
      </nav>
      <h2>Setup profile</h2>
      {error && <p>Page couldn't load because it {error.toLowerCase()}</p>}
      {details && (
        <form onSubmit={handleProfileUpdate}>
          <p className='form-desc'>Update your profile</p>
          <Input
            type='text'
            name='fullname'
            id='fullname'
            required={false}
            placeholder='full name'
            inputFuncs={{
              onChange: handleTextChange,
              value: userInputs.fullname,
              disabled: loading,
            }}
          />
          <Input
            type='text'
            name='workPlace'
            id='workPlace'
            required={false}
            placeholder='Work place'
            inputFuncs={{
              onChange: handleTextChange,
              value: userInputs.workPlace,
              disabled: loading,
            }}
          />
          <Input
            type='text'
            name='positionAtWork'
            id='positionAtWork'
            required={false}
            placeholder='position at work'
            inputFuncs={{
              onChange: handleTextChange,
              value: userInputs.positionAtWork,
              disabled: loading,
            }}
          />
          <Input
            type='text'
            name='location'
            id='location'
            required={false}
            placeholder='location'
            inputFuncs={{
              onChange: handleTextChange,
              value: userInputs.location,
              disabled: loading,
            }}
          />
          <Input
            type='text'
            name='industry'
            id='industry'
            required={false}
            placeholder='industry'
            inputFuncs={{
              onChange: handleTextChange,
              value: userInputs.industry,
              disabled: loading,
            }}
          />
          <Input
            type='url'
            name='linkedin'
            id='linkedin'
            required={false}
            placeholder='linkedin profile link'
            inputFuncs={{
              onChange: handleTextChange,
              value: userInputs.linkedin,
              disabled: loading,
            }}
          />
          <Input
            type='tel'
            name='phoneNumber'
            id='phoneNumber'
            required={true}
            placeholder='phone number'
            inputFuncs={{
              onChange: handleTextChange,
              value: userInputs.phoneNumber,
              disabled: loading,
            }}
          />
          <Input
            type='textarea'
            name='description'
            id='description'
            required={false}
            placeholder='description'
            inputFuncs={{
              onChange: handleTextChange,
              value: userInputs.description,
              disabled: loading,
            }}
          />
          <Button type='submit' disabled={loading}>
            {loading ? "loading..." : "Submit"}
          </Button>
        </form>
      )}
    </div>
  );
};

export default EditDetails;
