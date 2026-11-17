import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCNgjONe0vYFKzaBUgsJc814_Y6Z31wMFU",
  authDomain: "formal-night-attendance.firebaseapp.com",
  projectId: "formal-night-attendance",
  storageBucket: "formal-night-attendance.firebasestorage.app",
  messagingSenderId: "180472862286",
  appId: "1:180472862286:web:8cbf82381275e32388551f"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
