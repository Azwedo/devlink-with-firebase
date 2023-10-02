import { FirebaseAuth } from "@/lib";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export const AuthWithGoogle = async (StateSetAccount: Function) => {
    try {
        const FirebaseProvider = new GoogleAuthProvider();

        const result = await signInWithPopup(FirebaseAuth, FirebaseProvider);
        const user = result.user;

        const state = {
            name: user.displayName,
            email: user.email,
            avatar: user.photoURL
        } as User

        StateSetAccount(state)
    }

    catch(err: any) {
        console.error(err)
    }
}