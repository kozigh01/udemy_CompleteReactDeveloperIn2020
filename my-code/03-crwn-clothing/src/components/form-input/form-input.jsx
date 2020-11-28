import React from 'react';
import './form-input.scss';

const FormInput = ({ handleChange, label, ...otherProps }) => {
  const labelClass = `${otherProps.value.length ? 'shrink' : ''} label`;

  return (
    <div className="FormInput">
      { label ? <label className={labelClass}>{label}</label> : null }
      <input className="input" onChange={handleChange} { ...otherProps } />
    </div>
  );
};

export default FormInput;