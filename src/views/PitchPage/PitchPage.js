import React, { useState } from "react";
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

import banner_image from "../../assets/img/pitch-banner.png";
import avatar from "../../assets/img/avatar2.png";

import "./PitchPage.css";
const PitchPage = () => {
  const [like, setLike] = useState(false);
  const [dislike, setDislike] = useState(false);

  const countLike = () => {
    setLike(!like);
    setDislike(false);
  };

  const countDislike = () => {
    setDislike(!dislike);
    setLike(false);
  };

  return (
    <section className='pitch-page'>
      <div className='pitch-banner'>
        <div className='banner-image'>
          <img src={banner_image} alt='' />
          <h1>Agrocreate</h1>
          <span>www.agrocreatefarms.com</span>
        </div>
      </div>
      <div className='user-details'>
        <div className='user-avatar'>
          <img src={avatar} alt='' />
        </div>
        <div className='user-info'>
          <Anchor to='/user/profile' className='details'>
            <div className='col1'>
              <h3 className='name'>Akingbade janet</h3>
              <span className='position'>
                Farm manager at Agrocreate Farms, Nigeria
              </span>
            </div>
            <p>
              View details
            </p>
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
              <span className='topic'>Agriculture</span>
              <span className='time'>3 minutes ago</span>
            </div>
          </div>
        </div>
      </div>
      <div className='pitch'>
        <h2 className='title'>
          Vertical Farming Landscape to Minimise LandSpace Use
        </h2>
        <p className='body'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi at
          placeat quibusdam nihil voluptatibus temporibus in pariatur debitis
          ducimus excepturi eaque saepe cupiditate expedita rerum ad sit quo
          sequi officiis, hic voluptates? Sapiente neque asperiores saepe alias
          perferendis? Aliquid, ipsum! Debitis voluptas dignissimos ducimus!
          Velit, impedit similique! Quidem beatae nobis iusto vitae voluptatum
          impedit vel suscipit, incidunt adipisci eveniet earum labore
          dignissimos assumenda dolorum id dolore? Alias accusamus molestiae
          quibusdam blanditiis laboriosam at? Necessitatibus omnis reprehenderit
          minima animi temporibus culpa quis itaque corporis eaque quidem soluta
          natus perspiciatis, mollitia molestiae, consequatur similique
          accusantium quibusdam numquam ipsum explicabo amet. Hic, rerum! Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis
          cupiditate sapiente inventore aperiam consequuntur commodi incidunt,
          nam, fugit eligendi doloremque, accusantium repellat expedita? Minima
          unde et suscipit doloremque molestias repudiandae dolorem voluptatum,
          voluptatem iusto, quaerat perspiciatis mollitia? Voluptas vel
          accusantium dolore quae exercitationem dolorum assumenda deserunt
          temporibus sapiente, enim quisquam error eligendi neque quam cumque
          aliquam minima rem modi consequuntur. Reiciendis tempore quaerat optio
          impedit explicabo blanditiis alias iure maiores asperiores inventore
          delectus quibusdam, iusto sit labore quos vitae sapiente earum
          necessitatibus quo placeat eligendi, suscipit, doloremque dicta.
          Ullam, in! Accusamus illo ipsum voluptate quas veniam, numquam
          repellendus quasi.
        </p>
      </div>
      <div className='contact'>
        <span>Can you make this a reality?</span>
        <Anchor to='/user/profile' className='primary-link'>
          Contact
        </Anchor>
      </div>
      <div className='like-dislike'>
        <button
          className={`thumbsUp-btn ${like ? "active" : ""}`}
          onClick={countLike}
        >
          <FontAwesomeIcon icon={faThumbsUp} />
          <span>253</span>
        </button>
        <button
          className={`thumbsDown-btn ${dislike ? "active" : ""}`}
          onClick={countDislike}
        >
          <FontAwesomeIcon icon={faThumbsDown} />
          <span>12</span>
        </button>
        <button className='share-btn'>
          <FontAwesomeIcon icon={faShare} />
          <span>Share</span>
        </button>
      </div>
      <div className='comments-section'>
        <h2>Comments</h2>
        <div className='comments'>
          <div className='comment'>
            <div className='commentor-avatar'>
              <img src={avatar} />
            </div>
            <div className='comment-detail'>
              <header>
                <h4 className='name'>Michael James</h4>
                <div className='time'>4 days ago</div>
              </header>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Possimus dolor id mollitia cupiditate ducimus quidem dolorum?
                Necessitatibus velit maxime repellendus.
              </p>
            </div>
          </div>
          <div className='comment'>
            <div className='commentor-avatar'>
              <img src={avatar} />
            </div>
            <div className='comment-detail'>
              <header>
                <h4 className='name'>Michael James</h4>
                <div className='time'>4 days ago</div>
              </header>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Possimus dolor id mollitia cupiditate ducimus quidem dolorum?
                Necessitatibus velit maxime repellendus.
              </p>
            </div>
          </div>
          <div className='comment'>
            <div className='commentor-avatar'>
              <img src={avatar} />
            </div>
            <div className='comment-detail'>
              <header>
                <h4 className='name'>Michael James</h4>
                <div className='time'>4 days ago</div>
              </header>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Possimus dolor id mollitia cupiditate ducimus quidem dolorum?
                Necessitatibus velit maxime repellendus.
              </p>
            </div>
          </div>
        </div>
        <div className='see-comments'>
          <Anchor to='' className='transparent-link'>
            see more comments
          </Anchor>
        </div>
        <form className='post-comment'>
          <input type='text' name='comment' placeholder='type comment' />
          <button>Post comment</button>
        </form>
      </div>
      <Footer />
    </section>
  );
};

export default PitchPage;
