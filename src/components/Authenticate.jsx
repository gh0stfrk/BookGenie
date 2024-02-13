import { GoogleAuthProvider } from 'firebase/auth';
import { auth, provider } from "./googleSignIn/config"
import { signInWithPopup } from "firebase/auth";


function storeToken(key, token){
    localStorage.setItem(key, token)
}

function setUser(user){
    localStorage.setItem("user", user)
    localStorage.setItem("isLoggedIn", true)
}


function Authenticate(){
    const handleSignInWithGoogle = () => {
        signInWithPopup(auth, provider)
        .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);

            auth.currentUser.getIdToken(true).then(token => {
                console.log("token",token)
                storeToken("idToken", token)
            })

            storeToken("jwtToken",credential.idToken)
            setUser(result.user.displayName)
            window.location.reload()
        })
        .catch((error) => {
            console.error(error)
            alert(error.message)
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