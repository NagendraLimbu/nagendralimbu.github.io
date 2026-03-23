import React from 'react';
import { profileData } from '../../data/profileData';

const Certificates: React.FC = () => {
  return (
    <div className="section" id="certificates">
      <div className="container cc-education">
        <div className="h4 text-center mb-4 title">Certificates</div>
        <div className="card">
          <div className="row">
            {profileData.certificates.map((c) => (
              <div className="col-md-12" key={c.id}>
                <div className="row align-items-center" style={{ width: '100%', margin: 0 }}>
                  <div className="col-md-3" data-aos="fade-right" data-aos-offset="50" data-aos-duration="500" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '15px' }}>
                    {c.logo && (
                      <img src={c.logo} alt={c.title} style={{ width: '100%', maxWidth: '160px', minWidth: '100px', objectFit: 'contain', filter: 'drop-shadow(2px 2px 5px rgba(0,0,0,0.4))' }} />
                    )}
                  </div>
                  <div className="col-md-9" data-aos="fade-left" data-aos-offset="50" data-aos-duration="500">
                    <div className="card-body">
                      <div className="h4">{c.title}</div>
                      <p>Issued: {c.issued}</p>
                      <div className="h5">ID: {c.credential_id}</div>
                      {c.url && (
                        <a href={c.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm mt-3">
                          Verify Credential
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificates;
