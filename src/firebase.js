import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCpyVz24RP3JmUVh6Wyi6mw4R1U2QacC9g",
  authDomain: "petadoption-f2fea.firebaseapp.com",
  projectId: "petadoption-f2fea",
  storageBucket: "petadoption-f2fea.appspot.com",
  messagingSenderId: "1041770936675",
  appId: "1:1041770936675:web:3623a69adcec9ab2573b56",
  measurementId: "G-BS9179RXTT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);
const storage = getStorage();
const db = getFirestore();

export { auth, storage, db };
export default app;
