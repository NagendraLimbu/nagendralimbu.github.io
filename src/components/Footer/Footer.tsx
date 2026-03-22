import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container text-center">
        <a className="cc-github btn btn-link" href="https://github.com/NagendraLimbu" target="_blank" rel="noreferrer">
          <i className="fa fa-github fa-2x" aria-hidden="true"> Nagendra's Github</i>
        </a>
      </div>
      <div className="text-center text-muted">
        <p>&copy; All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
