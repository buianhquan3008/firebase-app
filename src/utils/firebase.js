import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAnJ3EzOzGobS-3WissJeKf8-2Fpn358s0",
  authDomain: "theta-arcana-248602.firebaseapp.com",
  databaseURL: "https://theta-arcana-248602.firebaseio.com",
  projectId: "theta-arcana-248602",
  storageBucket: "theta-arcana-248602.appspot.com",
  messagingSenderId: "612852987303",
  appId: "1:612852987303:web:2355d4949776602ec9b282",
  measurementId: "G-WQSM3Q95GE"
};

const app = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);
