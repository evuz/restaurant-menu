import firebase from 'firebase';
import { push } from 'react-router-redux';

import { SET_USER } from './actionTypes';

export function setUser(user) {
  return {
    type: SET_USER,
    payload: {
      user
    }
  }
}

export function loginGoogle() {
  return (dispatch) => {
    const provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider)
      .then((res) => {
        dispatch(setUser({
          displayName: res.user.displayName,
          email: res.user.email,
          photoURL: res.user.photoURL
        }))
        dispatch(push('/user'));
      }).catch(function (error) {
        throw new Error(error)
      });
  }
}
