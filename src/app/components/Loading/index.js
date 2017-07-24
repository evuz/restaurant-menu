import React from 'react';
import Spinner from 'react-spinkit';

import './index.css';

const Loading = () => (
  <div className="loading_component">
    {<Spinner name="double-bounce" style={styles.spinner} />}
  </div>
);

const styles = {
  spinner: {
    width: '80px',
    height: '80px',
    color: '#61dafb'
  }
}

export default Loading;
