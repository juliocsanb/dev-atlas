// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

//Cambiar simpre en variables asi como arriba sin string que se remplazan en .env.local se crea ese archivo en la raiz.

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

export const firebaseAuth = getAuth(app);
