import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const REACT_APP_YOUR_SERVICE_ID = process.env.REACT_APP_YOUR_SERVICE_ID;

const REACT_APP_YOUR_TEMPLATE_ID = process.env.REACT_APP_YOUR_TEMPLATE_ID;

const REACT_APP_YOUR_PUBLIC_KEY = process.env.REACT_APP_YOUR_PUBLIC_KEY;

export const ContactUs = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const [loading, setLoading] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        REACT_APP_YOUR_SERVICE_ID,
        REACT_APP_YOUR_TEMPLATE_ID,
        form.current,
        REACT_APP_YOUR_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          setLoading(false);
          setIsFormSubmitted(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      {!isFormSubmitted ? (
        <form
          className='app__footer-form app__flex'
          ref={form}
          onSubmit={sendEmail}
        >
          <div className='app__flex'>
            <input
              className='p-text'
              type='text'
              name='user_name'
              placeholder='Your Name'
            />
          </div>
          <div className='app__flex'>
            <input
              className='p-text'
              type='email'
              name='user_email'
              placeholder='Your Email'
            />
          </div>
          <div>
            <textarea
              className='p-text'
              placeholder='Your Message'
              name='message'
            />
          </div>

          <input
            className='p-text contactSubmit'
            type='submit'
            value={!loading ? 'Send Message' : 'Sending...'}
          />
        </form>
      ) : (
        <div>
          <h3 className='head-text'>Thank you for getting in touch!</h3>
        </div>
      )}
    </>
  );
};
