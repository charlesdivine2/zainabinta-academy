// Firebase Config
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyCTt6YCzfF6GYHzMHaKcAUCykoK0c9co5o",
  authDomain: "zainabinta-academy-3a82a.firebaseapp.com",
  projectId: "zainabinta-academy-3a82a",
  storageBucket: "zainabinta-academy-3a82a.appspot.com",
  messagingSenderId: "864662579065",
  appId: "1:864662579065:web:95efbd91b3e9c2c014b1a8"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
