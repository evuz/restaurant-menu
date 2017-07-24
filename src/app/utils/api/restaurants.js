import firebase from 'firebase';

import { getCleanedString } from '../filters/cleanString';

export function listenOnAddRestaurant(cb) {
  firebase.database().ref('/restaurants')
    .on('child_added', cb);
}

export function listenOffAddRestaurant() {
  firebase.database().ref('/restaurants')
    .off('child_added');
}

export function saveRestaurant(values) {
  const name = getCleanedString(values.name);
  const dbRef = firebase.database().ref(`/restaurants/${name}`);
  dbRef.once('value', (snapshot) => {
    if (!snapshot.val()) dbRef.set(values)
  });
}
