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
            storeToken("jwtToken",credential.idToken)
            setUser(result.user.displayName)
            auth.currentUser.getIdToken().then((token)=>{
                localStorage.setItem("Authorization", token)
            })
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
        className="py-2 px-4 text-sm rounded focus:outline-none border-none outline-none flex gap-2"
        >
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png" alt="" width={25} />
        Sign In with Google
      </button>
    )
}

export default Authenticate;