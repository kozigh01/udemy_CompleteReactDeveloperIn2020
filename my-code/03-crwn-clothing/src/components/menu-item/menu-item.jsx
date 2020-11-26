import React from 'react';
import './menu-item.scss';

const MenuItem = ({ title, subtitle, imageUrl, size }) => {
  const style = {
    backgroundImage: `url(${imageUrl})`
  };

  return (
    <div className={`MenuItem ${size}`}>
      <div className="background-image" style={style}></div>
      <div className="content">
        <h1 className="title">{title}</h1>
        <span className="subtitle">{subtitle}</span>
      </div>
    </div>    
  );
};

export default MenuItem;