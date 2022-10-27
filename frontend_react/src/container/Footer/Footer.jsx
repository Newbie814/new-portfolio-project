import React from 'react';

import { AppWrap, MotionWrap } from '../../wrapper';
// import { client } from '../../client';
import { ContactUs } from '../../components/ContactForm';

import './Footer.scss';

const Footer = () => {
  return (
    <>
      <h2 className='head-text'>Contact Me</h2>
      <ContactUs />
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg'
);
