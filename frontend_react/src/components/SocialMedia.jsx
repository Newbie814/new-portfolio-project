import React from 'react';
// import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaFacebookF, FaGithub, FaLinkedin } from 'react-icons/fa';

const SocialMedia = () => (
  <div className='app__social'>
    <div>
      <FaGithub />
    </div>
    <div>
      <FaLinkedin />
    </div>
    <div>
      <FaFacebookF />
    </div>
  </div>
);

export default SocialMedia;
