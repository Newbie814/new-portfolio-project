import React from 'react';
// import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaFacebookF, FaGithub, FaLinkedin } from 'react-icons/fa';

const SocialMedia = () => (
  <div className='app__social'>
    <div>
      <a href='https://github.com/Newbie814'>
        <FaGithub />
      </a>
    </div>
    <div>
      <a href='https://www.linkedin.com/in/matthewoodard/'>
        <FaLinkedin />
      </a>
    </div>
    <div>
      <a href='https://www.facebook.com/matt.woodard.9849'>
        <FaFacebookF />
      </a>
    </div>
  </div>
);

export default SocialMedia;
