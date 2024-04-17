import { auth, provider } from "./config";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

function reauthenticateWithRefreshToken(){
    auth.currentUser.getIdToken(true).then((idToken)=>{
        localStorage.setItem("Authorization", idToken);
    }).catch((error)=>{
        console.log(error);
        signInWithPopup(auth, provider).then((result)=>{
            const credential = GoogleAuthProvider.credentialFromResult(result);
            auth.currentUser.getIdToken().then((token)=>{
                localStorage.setItem("Authorization", token)
            })
        }).catch((error)=>{
            console.log(error);
        })
    })
}


export {reauthenticateWithRefreshToken};