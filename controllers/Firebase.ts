import { FirebaseAuth } from "@/lib";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export const AuthWithGoogle = async () => {
    const FirebaseProvider = new GoogleAuthProvider();

    const result = await signInWithPopup(FirebaseAuth, FirebaseProvider);
    const user = result.user;

    console.log(user)
}

export const CheckAuth = async () => {
    FirebaseAuth.onAuthStateChanged((user) => {
        if (user) console.log('User is signed in:', user);
        else {
            console.log('No user is signed in.');
        }
    });
}

export const SignOut = async () => {
    FirebaseAuth.signOut()
    
    .then(() => {
        console.log('User signed out.')
    })
    
    .catch((error) => {
        console.log(error)
    });
}