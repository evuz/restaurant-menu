import { SET_USER } from './actionTypes';
import firebase from 'firebase';

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
      }).catch(function (error) {
        throw new Error(error)
      });
  }
}
