import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="section" id="contact">
      <div
        className="cc-contact-information"
        style={{ backgroundImage: "url('assets/images/contact.jpg')" }}
      >
        <div className="container">
          <div className="cc-contact">
            <div className="row">
              <div className="col-md-9">
                <div className="card mb-0" data-aos="zoom-in">
                  <div className="h4 text-center title">Contact Me</div>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="card-body nav-align-center">
                        <p className="mb-0">
                          <strong>Email</strong>
                        </p>
                        <p>nagendra.limbu@outlook.com</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
