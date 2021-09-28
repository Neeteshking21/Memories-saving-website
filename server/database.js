import { initializeApp } from 'firebase/app';
import {getFirestore, getDoc, updateDoc, addDoc, collection}  from '@firebase/firestore/lite';
import dotenv from 'dotenv'
dotenv.config()
// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  databaseURL: process.env.databaseURL,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId,
  appId: process.env.appId,
  measurementId: process.env.measurementId,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// const docRed = await addDoc(collection(db, "Cities"), {
//   name: "Neetesh",
//   city: "India"
// })

// console.log("Data base connected")

export {db}