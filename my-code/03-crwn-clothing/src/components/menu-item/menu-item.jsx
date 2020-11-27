import React from 'react';
import { withRouter } from 'react-router-dom';
import './menu-item.scss';

const MenuItem = ({ title, subtitle, imageUrl, size, linkUrl, history, match }) => {
  const style = {
    backgroundImage: `url(${imageUrl})`
  };
  const linkPath = `${match.url}${linkUrl}`;

  return (
    <div className={`MenuItem ${size}`} onClick={() => history.push(linkPath) }>
      <div className="background-image" style={style}></div>
      <div className="content">
        <h1 className="title">{title}</h1>
        <span className="subtitle">{subtitle}</span>
      </div>
    </div>    
  );
};

export default withRouter(MenuItem);