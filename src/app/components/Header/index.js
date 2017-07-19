import React from 'react';

import logo from '../../assets/logo.svg';

import './index.css';

const HeaderComponent = ({ onClickImg }) => (
  <div className="App-header">
    <img src={logo}
      className="App-logo"
      alt="logo"
      onClick={onClickImg}
    />
    <h2>Welcome to React</h2>
  </div>
);

export default HeaderComponent;
