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

const CreatePitch = () => {
  // states
  const [userInputs, setUserInputs] = useState({
    title: "",
    industry: "",
    details: "",
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // other hooks
  const history = useHistory();
  const { createPitch } = useAuthContext();

  const handlePitchUpdate = (e) => {
    e.preventDefault();

    setLoading(true);

    createPitch(userInputs)
      .then((response) => {
        if (response.success) {
          console.log(response);
          setLoading(false);
          history.push(`/user/profile/${localStorage.getItem('currentUserId')}`);
        } else {
          throw new Error(response.message);
        }
      })
      .catch((err) => {
        setError(err.message || err.Error || err);
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

      <form onSubmit={handlePitchUpdate}>
        <p className='form-desc'>pitch your idea</p>
        <Input
          type='text'
          name='title'
          id='title'
          required={false}
          placeholder='title'
          inputFuncs={{
            onChange: handleTextChange,
            value: userInputs.title,
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
          type='textarea'
          name='details'
          id='details'
          required={false}
          placeholder='details'
          inputFuncs={{
            onChange: handleTextChange,
            value: userInputs.details,
            disabled: loading,
          }}
        />
        <Button type='submit' disabled={loading}>
          {loading ? "loading..." : "create pitch"}
        </Button>
      </form>
    </div>
  );
};

export default CreatePitch;
