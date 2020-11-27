import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBKozBObSUuT5W-1Wqx7QD0iE0rhP2sfn8",
    authDomain: "my-facebook-c0104.firebaseapp.com",
    databaseURL: "https://my-facebook-c0104.firebaseio.com",
    projectId: "my-facebook-c0104",
    storageBucket: "my-facebook-c0104.appspot.com",                 /*copied from project settings*/
    messagingSenderId: "225597095450",
    appId: "1:225597095450:web:d466b31c2fb8be43e19ba3",
    measurementId: "G-P2JH8EJJE8"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider()

export {auth, provider}
export default db