import { FirebaseAuth } from "@/lib";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export const AuthWithGoogle = async (StateSetAccount: Function) => {
    const FirebaseProvider = new GoogleAuthProvider();

    const result = await signInWithPopup(FirebaseAuth, FirebaseProvider);
    const user = result.user;

    const state = {
        name: user.displayName,
        email: user.email,
        avatar: user.photoURL,
    } as User

    StateSetAccount(state)
}

export const CheckAuth = async () => {
    FirebaseAuth.onAuthStateChanged((user) => {
        if (user) return user
        else return null
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