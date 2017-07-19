import firebase from 'firebase';

export function saveRestaurant(values) {
    console.log(values);
    const dbRef = firebase.database().ref('restaurants');
    dbRef.push().set(values)
}
