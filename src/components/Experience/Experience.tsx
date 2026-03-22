import React from 'react';
import { profileData } from '../../data/profileData';

const Experience: React.FC = () => {
  return (
    <div className="section" id="experience">
      <div className="container cc-education">
        <div className="h4 text-center mb-4 title">Work Experience</div>
        <div className="colorlib-narrow-content">
          <div className="row">
            <div className="col-md-12">
              <div className="timeline-centered">
                {profileData.experience.map((exp) => (
                  <article key={exp.id} className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-2">
                        <i className="icon-pen2"></i>
                      </div>
                      <div className="timeline-label">
                        <h2>
                          {exp.company}<span> - &nbsp;{exp.timeline}</span>
                        </h2>
                        <h3>{exp.location}</h3>
                        <h4>{exp.role}</h4>
                        <ul>
                          {exp.work.map((work, index) => (
                            <li key={index}>{work.eachwork}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
