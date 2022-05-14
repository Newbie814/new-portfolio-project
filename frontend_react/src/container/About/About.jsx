import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { images } from '../../constants';

import './About.scss';

const abouts = [
  {
    title: 'Web Development',
    description:
      'I create web applications to get the most out of your business.',
    imgUrl: images.about01,
  },
  {
    title: 'JavaScript',
    description: 'Making your web presence work for your customers and you.',
    imgUrl: images.about02,
  },
  {
    title: 'Problem Solving',
    description: 'Everything comes down to solving problems',
    imgUrl: images.about03,
  },
  {
    title: 'React',
    description:
      'Using modern and efficient tools to build your online presence.',
    imgUrl: images.about04,
  },
];

const About = () => {
  return (
    <>
      <h2 className='head-text'>
        I know that
        <span>Web Development</span>
        <br />
        Really means
        <span>Problem Solving</span>
      </h2>

      <div className='app__profiles'>
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className='app__profile-item'
            key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2 className='bold-text' style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className='p-text' style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default About;
