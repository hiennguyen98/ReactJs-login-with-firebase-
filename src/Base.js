import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDT9L-17Xvig_fBNp7CHoX8A5Y7LyBKEJw",
  authDomain: "reactauthdemo-4b6a0.firebaseapp.com",
  databaseURL: "https://reactauthdemo-4b6a0-default-rtdb.firebaseio.com",
  projectId: "reactauthdemo-4b6a0",
  storageBucket: "reactauthdemo-4b6a0.appspot.com",
  messagingSenderId: "316448139937",
  appId: "1:316448139937:web:b16d125c456cd589969ee0",
  measurementId: "G-WDC5P4PZKX",
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase();
export const auth = getAuth(app);
export default app;
