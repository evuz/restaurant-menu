import React from 'react';

import logo from '../../assets/logo.svg';

import './index.css';

const HeaderComponent = ({ onClickImg, img }) => (
  <div className="header_component">
    <img src={img || logo}
      className={img ? 'header_component_img' : 'header_component_logo'}
      alt="logo"
      onClick={onClickImg}
    />
    <h2>Welcome to React</h2>
  </div>
);

export default HeaderComponent;
