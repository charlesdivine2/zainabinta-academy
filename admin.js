import { auth, db } from "./firebase-config.js";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { doc, setDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

window.loginAdmin = async function() {
  const email = document.getElementById("adminEmail").value;
  const password = document.getElementById("adminPassword").value;

  try {
    await signInWithEmailAndPassword(auth, email, password);
    document.getElementById("adminPanel").style.display = "block";
  } catch {
    alert("Admin Login Failed");
  }
};

window.createStudent = async function() {
  const id = document.getElementById("newStudentId").value;
  const password = document.getElementById("newStudentPassword").value;

  try {
    await createUserWithEmailAndPassword(auth, id + "@school.com", password);

    await setDoc(doc(db, "students", id), {
      studentId: id,
      createdAt: new Date()
    });

    alert("Student Created Successfully");

  } catch {
    alert("Error creating student");
  }
};
