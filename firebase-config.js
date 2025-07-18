// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyBmTIjUCu2U7V1YTOXaqDz28H7R4WKkTj0",
  authDomain: "kqls-1f784.firebaseapp.com",
  projectId: "kqls-1f784",
  storageBucket: "kqls-1f784.firebasestorage.app",
  messagingSenderId: "893993418888",
  appId: "1:893993418888:web:30273f2559b22e332f1f3d",
  measurementId: "G-3Q2X2H714R"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const analytics = getAnalytics(app);

export { db, auth, analytics }; 