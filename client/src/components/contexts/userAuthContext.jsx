import { createContext, useContext, useState } from "react";
import { auth } from "../../firebase";
import {onAuthStateChanged, GoogleAuthProvider, signInWithPopup, signOut} from 'firebase/auth';
import { useEffect } from "react";
 
const userAuthContext = createContext({});

export function UserAuthContextProvider({children}){
    const [user, setUser] = useState({});

    function googleSignIn(){
      const googleauthprovider = new GoogleAuthProvider();
      
      return signInWithPopup(auth, googleauthprovider);

    }

    function signOutWithGoogle(){
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
    return <userAuthContext.Provider value={{user, googleSignIn, signOutWithGoogle}}> {children} </userAuthContext.Provider>
    
}

export function useUserAuth(){
    return useContext(userAuthContext);
}