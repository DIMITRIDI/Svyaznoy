import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
export const firebaseConfig = {
   apiKey: "AIzaSyAB4wT9vuWrpcEdPFMwlzvz6jSMors3yBk",
   authDomain: "svyznoy-9196e.firebaseapp.com",
   projectId: "svyznoy-9196e",
   storageBucket: "svyznoy-9196e.appspot.com",
   messagingSenderId: "1020092124055",
   appId: "1:1020092124055:web:6b8f7a5c286554e82392d2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;