import React from 'react';
import { profileData } from '../../data/profileData';

const Skills: React.FC = () => {
  return (
    <div className="section" id="skill">
      <div className="container">
        <div className="h4 text-center mb-4 title">Skills</div>
        <div className="card" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
          <div className="card-body">
            <div className="row">
              {profileData.skills.map((skill) => (
                <div className="col-md-6" key={skill.id}>
                  <div className="progress-container progress-primary">
                    <span className="progress-badge">{skill.skill}</span>
                    <div className="progress">
                      <div
                        className="progress-bar progress-bar-primary"
                        data-aos="progress-full"
                        data-aos-offset="10"
                        data-aos-duration="2000"
                        role="progressbar"
                        aria-valuenow={parseInt(skill.progress)}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{ width: skill.progress }}
                      ></div>
                      <span className="progress-value">{skill.progress}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
