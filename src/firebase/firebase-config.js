import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBQ5tPqMI2fvrq5sNnt3EZefeyB80CSweg",
  authDomain: "wherepizza-704b9.firebaseapp.com",
  projectId: "wherepizza-704b9",
  storageBucket: "wherepizza-704b9.appspot.com",
  messagingSenderId: "552889592155",
  appId: "1:552889592155:web:ba0837dc09d1f46f96927e",
  measurementId: "G-3D0YY814EX",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
