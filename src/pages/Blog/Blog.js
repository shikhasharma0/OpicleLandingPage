import React from 'react';
import './Blog.css';
import { pexels1, pexels2, pexels3 } from "../../images";

function Blog() {
  return (
    <div className='blog component__space' id='Blogs'>
      <div className="heading">
        <h1 className="heading__title">My Latest Blogs</h1>
        <p className="heading__subtitle">
          There are many variations of passages of Lorem Ipsum available,
        </p>
        <p className="heading__subtitle">
          but the majority have suffered alteration.
        </p>
      </div>
      <div className="container">
        <div className="row">
          {[pexels1, pexels2, pexels3].map((image, index) => (
            <div className="col__3" key={index}>
              <div className="project__box pointer relative">
                <div className="project__box__img pointer relative">
                  <div className="project__img__box0">
                    <img src={image} alt="" className="project__img" />
                  </div>
                </div>
                <div className="Blog__meta absolute">
                     <h5 className="project__text2">Blogging</h5>
                     <a href="#" className="blog project__btn btn">Read More..</a>
                     </div>
                     
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* <div className="contact component__space" id="Contact">
        <div className="heading">
          <h1 className="heading__title">Get in Touch</h1>
          <p className="heading__subtitle">
            If you have any questions, feel free to reach out.
          </p>
        </div>
        <div className="contact__container">
          <div className="contact__info">
            <h2>Contact Information</h2>
            <p>Email: example@example.com</p>
            <p>Phone: (123) 456-7890</p>
            <div className="social__icons">
              <a href="#"><img src="path/to/facebook-icon.png" alt="Facebook" /></a>
              <a href="#"><img src="path/to/twitter-icon.png" alt="Twitter" /></a>
              <a href="#"><img src="path/to/linkedin-icon.png" alt="LinkedIn" /></a>
            </div>
          </div>
          <div className="contact__image">
            <img src="path/to/contact-image.jpg" alt="Contact" />
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Blog;
