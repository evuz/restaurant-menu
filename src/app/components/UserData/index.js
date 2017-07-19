import React from 'react';

const UserDataComponent = ({ user }) => (
  <p className="App-intro">
    <p><strong>Display name: </strong>{user.displayName}</p>
    <p><strong>E-mail: </strong>{user.email}</p>
    <p><strong>Photo: </strong>{user.photoURL}</p>
  </p>
);

export default UserDataComponent;
