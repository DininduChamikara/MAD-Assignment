// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import config from "../config";

// const firebaseConfig = {
//   apiKey: "AIzaSyC1988Md9aVKI4i2ILYEsLbDlzljJn3x8Y",
//   authDomain: "mad-assignment-992a6.firebaseapp.com",
//   projectId: "mad-assignment-992a6",
//   storageBucket: "mad-assignment-992a6.appspot.com",
//   messagingSenderId: "326292296179",
//   appId: "1:326292296179:web:5b82f48453df33ea688286",
//   measurementId: "G-0XJ3SZ5WML",
// };

const firebaseConfig = {
  apiKey: config.API_KEY,
  authDomain: config.AUTH_DOMAIN,
  projectId: config.PROJECT_ID,
  storageBucket: config.STORAGE_BUCKET,
  messagingSenderId: config.MESSAGING_SENDER_ID,
  appId: config.APP_ID,
  measurementId: config.MEASUREMENT_ID,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export const movieColRef = collection(db, "MovieCollection");
// console.log(auth.currentUser.uid);
// export const currentUser = { uid: "sYPSrbnRKkfI1P8fC3MSDPWAQwF2" };
// export const currentUser = auth.currentUser;
