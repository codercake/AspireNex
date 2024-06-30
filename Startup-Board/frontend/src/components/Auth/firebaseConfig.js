// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBx3dB4IAPpsFA2s2UubQ6bOoUB52F8C-k",
  authDomain: "aspirenex-49bab.firebaseapp.com",
  projectId: "aspirenex-49bab",
  storageBucket: "aspirenex-49bab.appspot.com",
  messagingSenderId: "359719629603",
  appId: "1:359719629603:web:1072d8181e227c2743d296",
  measurementId: "G-R8SPHL729W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
    try {
        const result = await signInWithPopup(auth, provider);
        const credential = GoogleAuthProvider.credentialFromResult(result)
        const token = credential.accessToken;
        const user = result.user;
        console.log('User Info:', user);
        return user;
    } catch (error) {
        console.error("Google sign-in error:", error);
        throw error;
    }
};

export default firebaseConfig;