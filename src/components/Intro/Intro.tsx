import React from 'react';
import { profileData } from '../../data/profileData';

const Intro: React.FC = () => {
  return (
    <div className="profile-page">
      <div className="wrapper">
        <div className="page-header page-header-small" filter-color="green">
          <div className="page-header-image" data-parallax="true" style={{ backgroundImage: "url('assets/images/intro.jpg')" }}>
          </div>
          <div className="container">
            <div className="content-center">
              <div className="cc-profile-image">
                <a href="#">
                  <img src="assets/images/img2.png" alt="Image" />
                </a>
              </div>
              <h1 className="h2 title">Nagendra Limbu</h1>
              <p className="category text-white">Sr. Software Engineer</p>
              <a className="btn btn-primary smooth-scroll mr-2" href="#contact" data-aos="zoom-in"
                data-aos-anchor="data-aos-anchor">Hire Me</a>
              <a className="btn btn-primary" href={profileData.resumeurl} target="_blank" rel="noreferrer" data-aos="zoom-in"
                data-aos-anchor="data-aos-anchor">Download CV</a>
            </div>
          </div>
          <div className="section">
            <div className="container">
              <div className="button-container">
                <a className="btn btn-default btn-round btn-lg btn-icon"
                  href="https://www.linkedin.com/in/nlimbu/" target="_blank" rel="tooltip"
                  title="Follow me on Linkedin">
                  <i className="fa fa-linkedin"></i>
                </a>
                <a className="btn btn-default btn-round btn-lg btn-icon" href="https://github.com/NagendraLimbu" target="_blank"
                  rel="tooltip" title="Follow me on Github">
                  <i className="fa fa-github"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
