import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB13TW1mqP_j5ALvO8D0dOn_GDyyeizvfs",
  authDomain: "wirecutter-clone-1.firebaseapp.com",
  projectId: "wirecutter-clone-1",
  storageBucket: "wirecutter-clone-1.firebasestorage.app",
  messagingSenderId: "336030760315",
  appId: "1:336030760315:web:54397bdbaeefb40509d1de"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;

