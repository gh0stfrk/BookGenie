import { GoogleAuthProvider } from 'firebase/auth';
import { auth, provider } from "./googleSignIn/config"
import { signInWithPopup } from "firebase/auth";
import { useEffect, useState } from 'react';

let api_url = "http://localhost:8000"

function verifyToken(token){

    fetch(api_url + "/api/v1/auth",
    {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Firebase-Key": `${token}`
        },
        body: JSON.stringify({
            "user": "gh0st"
        })
    }
    ).then(
        (response) =>{
            console.log(response)
        }
    ).catch(
        (error)=>{
            console.error(error)
        }
    )
}



function Authenticate(){
    const handleSignInWithGoogle = () => {
        signInWithPopup(auth, provider)
        .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            console.log(credential.idToken)

            verifyToken(credential.idToken)
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.email;
            const credential = GoogleAuthProvider.credentialFromError(error);
        }
        )
    }
    return(
        <button
        onClick={handleSignInWithGoogle}
        className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-red-700 focus:outline-none focus:shadow-outline-red active:bg-red-800"
      >
        Sign In with Google
      </button>
    )
}

export default Authenticate;