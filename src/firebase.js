// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage"
const firebaseConfig = {
  apiKey: "AIzaSyATYS6QD4dkG_33kxprG8GGIR7miJxKHME",
  authDomain: "lotos-eed37.firebaseapp.com",
  projectId: "lotos-eed37",
  storageBucket: "lotos-eed37.appspot.com",
  messagingSenderId: "47516163451",
  appId: "1:47516163451:web:fa418ecaf697ad830ab1de"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)
