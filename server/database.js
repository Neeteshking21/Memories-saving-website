import "firebase/compact/firestore"
const { initializeApp } = require('firebase/app');
const { getFirestore, collection, getDocs } = require('firebase/firestore');

const firebaseConfig = {
    apiKey: "AIzaSyD8rhs2wGA9XJgxFepxwCiLI9c7kVXxOC0",
    authDomain: "memory-save-e458c.firebaseapp.com",
    databaseURL: "https://memory-save-e458c-default-rtdb.firebaseio.com",
    projectId: "memory-save-e458c",
    storageBucket: "memory-save-e458c.appspot.com",
    messagingSenderId: "487525455540",
    appId: "1:487525455540:web:de3eb1fc78de4d8bbd29e1",
    measurementId: "G-BYM3J1PQJX"
  }

const app = initializeApp(firebaseConfig)

const db = getFirestore(app)

const User = collection(db, 'Users')

module.exports = {User, db}