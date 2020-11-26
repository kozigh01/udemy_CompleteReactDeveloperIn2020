import React from 'react';
import './homepage.scss';

const Homepage = () => {
  return (
    <div className="Homepage">
      <div className="directory-menu">

        <div className="menu-item">
          <div className="content">
            <h1 className="title">hats</h1>
            <span className="subtitle">shop</span>
          </div>
        </div>

        <div className="menu-item">
          <div className="content">
            <h1 className="title">coats</h1>
            <span className="subtitle">shop</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Homepage;