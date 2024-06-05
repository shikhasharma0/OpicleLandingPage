import React from 'react';
import './Contact.css';
import { MdEmail } from 'react-icons/md';
import { BsLinkedin } from 'react-icons/bs';
import { FaWhatsappSquare } from 'react-icons/fa';

function Contact() {
  return (
    <div className='contactcomponent__space' id='Contact'>
     <div className='contact00'>
      <div className='heading'>
        <h1 className='heading__title'>Get in Touch</h1>
        <p className='heading__subtitle'>
          If you have any questions, feel free to reach out.
        </p>
      </div>
      <div className='contact__container'>
        <div className='contact__info'>
          <h2>Contact Information</h2>
          <p>Email: example@example.com</p>
          <p>Phone: (123) 456-7890</p>
          <div className='social__icons'>
            <a href='mailto:example@example.com'><MdEmail /></a>
            <a href='https://www.linkedin.com/in/shikha-sharma-b1a150222/' target="_blank" rel="noopener noreferrer"><BsLinkedin /></a>
            <a href='https://wa.me/9191001910' target="_blank" rel="noopener noreferrer"><FaWhatsappSquare /></a>
          </div>
        </div>
        {/* <div className='contact__image'>
          <img src='path/to/contact-image.jpg' alt='Contact' />
        </div> */}
      </div>
    </div>
    </div>
  );
}

export default Contact;
