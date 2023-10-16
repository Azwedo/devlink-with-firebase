import { FirebaseConfig } from "@/data"
import { getAuth, Auth } from "firebase/auth"
import { getStorage } from "firebase/storage"
import { initializeApp, FirebaseApp } from "firebase/app"

let Firebase: FirebaseApp;
let FirebaseStorage: ReturnType<typeof getStorage>;
let FirebaseAuth: Auth;

try {
    Firebase = initializeApp(FirebaseConfig);
    FirebaseStorage = getStorage(Firebase);
    FirebaseAuth = getAuth(Firebase);
} 

catch (err: any) {
    if (!/already exists/.test(err.message)) {
        console.error("Something wen't wrong trying to start Firebase.", err.stack);
    }
}

export { 
    Firebase,
    FirebaseStorage, 
    FirebaseAuth, 
};
