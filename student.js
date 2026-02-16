import { auth, db } from "./firebase-config.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

window.loginStudent = async function() {

  const id = document.getElementById("studentId").value;
  const password = document.getElementById("password").value;

  try {
    await signInWithEmailAndPassword(auth, id + "@school.com", password);

    const docRef = doc(db, "students", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      document.getElementById("resultSection").style.display = "block";
      document.getElementById("studentInfo").innerHTML =
      JSON.stringify(docSnap.data(), null, 2);
    }

  } catch (error) {
    alert("Login Failed");
  }
};

window.printResult = function() {
  window.print();
};
