import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "./config";

export const RegisterUser = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const LogoutUser = () => {
  return signOut(auth);
};

export const LoginUser = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};
