// Import Firebase functions
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTt6YCzfF6GYHzMHaKcAUCykoK0c9co5o",
  authDomain: "zainabinta-academy-3a82a.firebaseapp.com",
  projectId: "zainabinta-academy-3a82a",
  storageBucket: "zainabinta-academy-3a82a.firebasestorage.app",
  messagingSenderId: "864662579065",
  appId: "1:864662579065:web:95efbd91b3e9c2c014b1a8",
  measurementId: "G-PEE885CEEL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
const auth = getAuth(app);
const db = getFirestore(app);

// Export so other files can use it
export { auth, db };
