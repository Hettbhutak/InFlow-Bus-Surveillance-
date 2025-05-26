import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCPjAbMqtqLaO6T7Ev-gQ5rfvPE6-oWcig",
  authDomain: "inflow-c6e75.firebaseapp.com",
  projectId: "inflow-c6e75",
  storageBucket: "inflow-c6e75.appspot.com",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
