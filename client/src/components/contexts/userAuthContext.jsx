import { createContext, useContext, useState } from "react";
// import {signInWithPopup } from 'firebase'
import { signInWithGoogle, auth } from "../../firebase";
import {onAuthStateChanged, GoogleAuthProvider, signInWithPopup} from 'firebase/auth';
import { useEffect } from "react";
import { getAuth, signOut } from "firebase/auth";


 
const userAuthContext = createContext({});

export function UserAuthContextProvider({children}){
    const [user, setUser] = useState({});

    function googleSignIn(){
      const googleauthprovider = new GoogleAuthProvider();
      return signInWithPopup(auth, googleauthprovider);
    }

    function googleLogOut(){
      return signOut(auth);
    }

    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
        console.log(currentUser);
        setUser(currentUser);
      })

      return () => {
        unsubscribe();        
      }
    }, [])
    return <userAuthContext.Provider value={{user, googleSignIn, googleLogOut}}> {children} </userAuthContext.Provider>
    
}

export function useUserAuth(){
    return useContext(userAuthContext);
}