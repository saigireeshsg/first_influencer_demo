import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyBiQ-6Hxau-nRVgr7x2QwIofQkn2xHSrLA",
  authDomain: "firstinfluencer-e2b09.firebaseapp.com",
  projectId: "firstinfluencer-e2b09",
  storageBucket: "firstinfluencer-e2b09.firebasestorage.app",
  messagingSenderId: "245082731117",
  appId: "1:245082731117:web:6da85b33296d2f09124564",
  measurementId: "G-EHFBMXHN51"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const analytics = getAnalytics(app);