import React from 'react';
import { profileData } from '../../data/profileData';

const Education: React.FC = () => {
  return (
    <div className="section" id="education">
      <div className="container cc-education">
        <div className="h4 text-center mb-4 title">Education</div>
        <div className="card">
          <div className="row">
            {profileData.education.map((e) => (
              <div className="col-md-12" key={e.id}>
                <div>
                  <hr />
                </div>
                <div className="row">
                  <div className="col-md-3 bg-primary" data-aos="fade-right" data-aos-offset="50" data-aos-duration="500">
                    <div className="card-body cc-education-header">
                      <p>{e.from_to_year}</p>
                      <div className="h5">{e.education}</div>
                    </div>
                  </div>
                  <div className="col-md-9" data-aos="fade-left" data-aos-offset="50" data-aos-duration="500">
                    <div className="card-body">
                      <div className="h5">{e.stream}</div>
                      <h5 className="category">{e.institution}</h5>
                    </div>
                  </div>
                </div>
                <hr />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
