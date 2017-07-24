import React from 'react';

import './index.css';

const InputComponent = ({ widthPercent, input, type, placeholder, name }) => (
  <div className="input_component"
    style={{ flexBasis: `${widthPercent}%` }}
  >
    <input
      autoComplete="false"
      {...input}
      type={type}
      placeholder={placeholder}
    />
    <label htmlFor={name}></label>
  </div>
);

export default InputComponent;

