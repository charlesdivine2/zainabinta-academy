import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// 🔥 Your Real Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyCTt6YCzfF6GYHzMHaKcAUCykoK0c9co5o",
  authDomain: "zainabinta-academy-3a82a.firebaseapp.com",
  projectId: "zainabinta-academy-3a82a",
  storageBucket: "zainabinta-academy-3a82a.appspot.com",
  messagingSenderId: "864662579065",
  appId: "1:864662579065:web:95efbd91b3e9c2c014b1a8"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// 🔐 Your Real Admin UID
const ADMIN_UID = "i9a6Rex1V0MujP1AigQYt48jyE82";

// 🔒 Protect Admin Page
onAuthStateChanged(auth, (user) => {
  if (user) {
    if (user.uid === ADMIN_UID) {
      console.log("✅ Admin Verified");
      document.getElementById("adminPanel").style.display = "block";
    } else {
      alert("❌ Access Denied");
      window.location.href = "index.html";
    }
  } else {
    window.location.href = "index.html";
  }
});
