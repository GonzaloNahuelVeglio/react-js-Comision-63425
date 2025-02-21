 import { initializeApp } from "firebase/app"; 
import { getFirestore } from "firebase/firestore"; 
 

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "tienda-online-803bc.firebaseapp.com",
  projectId: "tienda-online-803bc",
  storageBucket: "tienda-online-803bc.firebasestorage.app",
  messagingSenderId: "348671152246",
  appId: "1:348671152246:web:bcff6635ec021dc1a08f57"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);