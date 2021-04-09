import React from "react";

const Contact = () => {
  return (
    <div className='text-center'>
      <h2 className='text-center'>
        Contact me via email:<br></br>
        emsoaldin@gmail.com
      </h2>
      <h2 className='text-center mt-3'>
        Or via social networks:
        <div class='container'>
          <a
            href='https://www.linkedin.com/in/aldin-em%C5%A1o-4ba6761b6/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <i className='fab fa-linkedin mr-2'></i>
          </a>
          <a
            href='https://www.facebook.com/ado.mpower/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <i className='fab fa-facebook-square mr-2'></i>
          </a>

          <a
            href='https://www.instagram.com/a.emso/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <i className='fab fa-instagram-square'></i>
          </a>
        </div>
      </h2>
      <p></p>
    </div>
  );
};

export default Contact;
