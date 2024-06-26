import { auth } from "../firebase/firebaseConfig.js";
import { signInWithEmailAndPassword, UserCredential } from "firebase/auth";

type User = {
    email:string,
    pw:string
}

//Returnerar credsen med ett Promise resolved eller ett nytt promise där jag sätter ett fel medelande.
export async function login(user:User):Promise<UserCredential> {
    const {email,pw} = user;
    try{
        const userCredentials = await signInWithEmailAndPassword(auth,email,pw);
        return userCredentials;
    }catch(error){
        return Promise.reject(new Error("Wrong user credentials or bad connection!"));
    }
}