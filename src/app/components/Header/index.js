import React from 'react';

import logo from '../../assets/logo.svg';

import './index.css';

const HeaderComponent = ({ onClickImg, img }) => (
  <div className="App-header">
    <img src={img || logo}
      className={img ? 'App-img' : 'App-logo'}
      alt="logo"
      onClick={onClickImg}
    />
    <h2>Welcome to React</h2>
  </div>
);

export default HeaderComponent;
