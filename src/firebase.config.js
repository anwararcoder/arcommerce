import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDo-Dh3I_OPnrgsL_XqXfWwlqmDXq-YilE",
  authDomain: "arcommerce-app.firebaseapp.com",
  projectId: "arcommerce-app",
  storageBucket: "arcommerce-app.appspot.com",
  messagingSenderId: "775154085093",
  appId: "1:775154085093:web:91e968813842875d62f80c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)

export default app;
