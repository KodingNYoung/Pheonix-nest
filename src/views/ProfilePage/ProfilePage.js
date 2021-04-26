import React, { useState, useEffect } from "react";
import { useAuthContext } from "../../context/AuthContext";
import { Anchor } from "../../components/Links/Links";

import "./ProfilePage.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faMapMarkerAlt,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import Footer from "../../components/Footer/Footer";
import ProfileModal from "../../components/Modals/ProfileModal";
import { ErrorToast } from "../../components/Errors/Error";
import Preloader from "../../components/PreLoader/Preloader";
import { Brand } from "../../components/Logo/Logo";

const ProfilePage = ({ match }) => {
  // states
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isUserValid, setIsUserValid] = useState(false);

  // other hooks
  const { getUserProfile } = useAuthContext();

  useEffect(() => {
    const unsub = getUserProfile(match.params.userId)
      .then((res) => {
        setLoading(false);
        if (res.success) {
          setProfile(res.payload);
        } else {
          throw new Error(res.message);
        }
      })
      .catch((err) => {
        setLoading(false);
        setError(err.message || err.Error || err);
      });
    setIsUserValid(
      match.params.userId === localStorage.getItem("currentUserId")
    );
    return unsub;
  }, [getUserProfile]);

  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <section className="profile-page">
      {error && <ErrorToast>{error}</ErrorToast>}
      {loading && <Preloader size={70} border={10} color="#d63e39" />}
      {profile && (
        <>
          <div className="profile-page-content">
            <div className="profile-banner">
              <div className="banner-image">
                {/* <img src={banner_image} alt='' /> */}
                <h1>
                  <Brand />
                </h1>
              </div>
            </div>
            <div className="user-details">
              <div className="user-avatar">
                <img src={profile.avatar_url} alt="" />
              </div>
              <div className="user-info">
                <div className="details">
                  <div className="col1">
                    <h3 className="name">{profile.fullname}</h3>
                    {profile.positionAtWork && profile.workPlace ? (
                      <span className="position">
                        {profile.positionAtWork} at {profile.workPlace}
                      </span>
                    ) : null}
                  </div>
                  <Anchor
                    to="/user/pitches"
                    className="red-bg-link sm-screen-dspr"
                  >
                    View pitch
                  </Anchor>
                </div>
                <div className="share">
                  <div className="left">
                    <a
                      target="_blank"
                      href={`https://wa.me/+234${profile.phoneNumber}`}
                      className="primary-link"
                    >
                      message
                    </a>
                    {isUserValid && (
                      <button className="transparent-btn" onClick={openModal}>
                        edit profile
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="profile">
              <div className="description">
                <h2 className="title">Description</h2>
                {profile.description ? (
                  <p className="body">{profile.description}</p>
                ) : (
                  <p className="body empty-desc">
                    Edit your profile and add a description
                  </p>
                )}
              </div>
              <div className="contacts">
                <h2 className="title">User info</h2>
                <div className="body">
                  <ContactInfo
                    icon={faMapMarkerAlt}
                    name="Location"
                    value={profile.location}
                  />
                  <ContactInfo
                    icon={faPhoneAlt}
                    name="Phone"
                    value={
                      profile.phoneNumber ? `0${profile.phoneNumber}` : null
                    }
                  />
                  <ContactInfo
                    icon={faEnvelope}
                    name="Email"
                    value={profile.email}
                  />
                  <ContactInfo
                    icon={faLinkedinIn}
                    name="Linkedin Profile"
                    value={profile.linkedin}
                  />
                </div>
              </div>
            </div>
            <Footer />
          </div>
          <ProfileModal modalOpen={modalOpen} closeModal={closeModal} />
        </>
      )}
    </section>
  );
};
const ContactInfo = ({ icon, name, value }) => {
  return (
    <>
      {value ? (
        <div className="contact-item">
          <div className="contact-icon">
            <FontAwesomeIcon icon={icon} />
          </div>
          <div className="contact-details">
            <span className="contact-title">{name}</span>
            <span className="contact-value">{value}</span>
          </div>
        </div>
      ) : null}
    </>
  );
};
export default ProfilePage;
