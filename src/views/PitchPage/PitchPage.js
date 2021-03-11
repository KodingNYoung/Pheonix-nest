import React, { useState, useEffect } from "react";
import { useAuthContext } from "../../context/AuthContext";

import { Anchor } from "../../components/Navs/Links";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsisH,
  faShare,
  faShareAlt,
  faThumbsDown,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import Footer from "../../components/Footer/Footer";
import Error from "../../components/Toasts/Error";
import banner_image from "../../assets/img/pitch-banner.png";
import avatar from "../../assets/img/avatar2.png";

import "./PitchPage.css";

const PitchPage = ({
  match: {
    params: { pitchId },
  },
}) => {
  // states
  const [like, setLike] = useState(false);
  const [dislike, setDislike] = useState(false);
  const [comment, setComment] = useState("");
  const [pitchDetails, setPitchDetails] = useState({
    coomments: [],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // other hooks
  const { getPitchById, commentOnPitch } = useAuthContext();

  useEffect(() => {
    const unsub = getPitchById(pitchId)
      .then((response) => {
        if (response.success) {
          console.log(response);
          setPitchDetails({ ...response.payload, ...response.payload.author });
          setTimeout(() => setLoading(false, 200));
        } else {
          throw new Error(response.message);
        }
      })
      .catch((err) => {
        setError(err.message || err.Error || err);
      });

    return unsub;
  }, [getPitchById]);

  const countLike = () => {
    setLike(!like);
    setDislike(false);
  };

  const countDislike = () => {
    setDislike(!dislike);
    setLike(false);
  };
  const handleCommentSubmit = (e) => {
    e.preventDefault();
    commentOnPitch(comment, pitchId)
      .then((response) => {
        console.log(response);
        setComment("");
      })
      .catch((err) => {});
  };
  const handleTextChange = (e) => {
    const { value } = e.target;

    setComment(value);
  };

  return (
    <>
      {error && <Error>{error}</Error>}
      {pitchDetails.title && !loading && (
        <section className='pitch-page'>
          <div className='pitch-banner'>
            <div className='banner-image'>
              {/* <img src={banner_image} alt='' /> */}
              <h1>Company name</h1>
            </div>
          </div>
          <div className='user-details'>
            <div className='user-avatar'>
              <img src={pitchDetails.avatar_url} alt='' />
            </div>
            <div className='user-info'>
              <Anchor to='/user/profile' className='details'>
                <div className='col1'>
                  <h3 className='name'>{pitchDetails.fullname}</h3>
                  <span className='position'>{pitchDetails.email}</span>
                </div>
                <p>View details</p>
                <span className='ellipsis'>
                  <FontAwesomeIcon icon={faEllipsisH} />
                </span>
              </Anchor>
              <div className='share'>
                <div className='left'>
                  <Anchor to='/messages' className='primary-link'>
                    messages
                  </Anchor>
                  <Anchor to='' className='red-bg-link'>
                    <FontAwesomeIcon icon={faShareAlt} />
                  </Anchor>
                </div>
                <div className='right'>
                  <span className='topic'>{pitchDetails.industry}</span>
                  <span className='time'>{pitchDetails.timeAgo}</span>
                </div>
              </div>
            </div>
          </div>
          <div className='pitch'>
            <h2 className='title'>{pitchDetails.title}</h2>
            <p className='body'>{pitchDetails.details}</p>
          </div>
          <div className='contact'>
            <span>Can you make this a reality?</span>
            <Anchor
              to={`/user/profile/${pitchDetails._id}`}
              className='primary-link'
            >
              Contact
            </Anchor>
          </div>
          <div className='like-dislike'>
            <button
              className={`thumbsUp-btn ${like ? "active" : ""}`}
              onClick={countLike}
            >
              <FontAwesomeIcon icon={faThumbsUp} />
              <span>{pitchDetails.like_count}</span>
            </button>
            <button
              className={`thumbsDown-btn ${dislike ? "active" : ""}`}
              onClick={countDislike}
            >
              <FontAwesomeIcon icon={faThumbsDown} />
              <span>{pitchDetails.dislike_count}</span>
            </button>
            <button className='share-btn'>
              <FontAwesomeIcon icon={faShare} />
              <span>Share</span>
            </button>
          </div>
          <div className='comments-section'>
            <h2>Comments</h2>
            <div className='comments'>
              {pitchDetails.comments.map((comment) => {
                return <PitchComment key={comment._id} comment={comment} />;
              })}
            </div>
            <div className='see-comments'>
              <Anchor to='#' className='transparent-link'>
                see more comments
              </Anchor>
            </div>
            <form className='post-comment' onSubmit={handleCommentSubmit}>
              <input
                type='text'
                name='comment'
                placeholder='type comment'
                value={comment}
                onChange={handleTextChange}
              />
              <button type='submit'>Post comment</button>
            </form>
          </div>
          <Footer />
        </section>
      )}
    </>
  );
};
const PitchComment = ({ comment }) => {
  console.log(comment);
  const {
    author: { avatar_url, email, fullname, _id },
    timeAgo,
  } = comment;
  return (
    <div className='comment'>
      <div className='commentor-avatar'>
        <img src={avatar_url} />
      </div>
      <div className='comment-detail'>
        <header>
          <h4 className='name'>{fullname}</h4>
          <div className='time'>{timeAgo}</div>
        </header>
        <p>{comment.comment}</p>
      </div>
    </div>
  );
};
export default PitchPage;
