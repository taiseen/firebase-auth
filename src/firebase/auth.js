import { firebaseAuth } from "./config";
import { toast } from "react-toastify";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    sendPasswordResetEmail,
    GoogleAuthProvider,
    signInWithPopup,
    signOut,
} from "firebase/auth";

// create google provider instance...
const googleProvider = new GoogleAuthProvider();

export const registerNewUser = async (email, password) => {
    try {
        const response = await createUserWithEmailAndPassword(firebaseAuth, email, password);
        return response.user;
    } catch (error) {
        console.log(error);
    }
}

export const loginUser = async (email, password) => {
    try {
        const response = await signInWithEmailAndPassword(firebaseAuth, email, password);
        return response;
    } catch (error) {
        return toast.error(error.code.split('/')[1]);
    }
}

export const resetUserPassword = async (email) => {
    try {
        await sendPasswordResetEmail(firebaseAuth, email);
        return toast.info('Send password reset link to given email address');
    } catch (error) {
        console.log(error);
    }
}

export const logOut = async () => {
    try {
        await signOut(firebaseAuth);
    } catch (error) {
        console.log(error);
    }
}

export const signInWithGoogle = async () => {
    try {
        const response = await signInWithPopup(firebaseAuth, googleProvider);
        return response.user;
    } catch (error) {
        console.log(error);
    }
}