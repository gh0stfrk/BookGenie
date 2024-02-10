import { GoogleAuthProvider } from 'firebase/auth';
import { auth, provider } from "./googleSignIn/config"
import { signInWithPopup } from "firebase/auth";


function storeToken(token){
    localStorage.setItem("jwtToken", token)
    localStorage.setItem("isLogged", true)
}



function Authenticate(){
    const handleSignInWithGoogle = () => {
        signInWithPopup(auth, provider)
        .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            console.log(credential.idToken)
            auth.currentUser.getIdToken(true).then(token => {
                console.log("token",token)
                localStorage.setItem("idToken", token)
            })
            storeToken(credential.idToken)
        })
        .catch((error) => {
            console.error(error)
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