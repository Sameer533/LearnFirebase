import { createContext, useContext } from "react";
import {initializeApp} from "firebase/app" ;
import  {getAuth ,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword ,
    GoogleAuthProvider,
    signInWithPopup,
    signInWithRedirect
    
} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAlv30wyARsEtlBwudFbiDf2RUCfe31R0U",
    authDomain: "app-c3966.firebaseapp.com",
    projectId: "app-c3966",
    storageBucket: "app-c3966.appspot.com",
    messagingSenderId: "391527688915",
    appId: "1:391527688915:web:2e7bb28e165aa3721c4226",
    databaseURL:"https://app-c3966-default-rtdb.firebaseio.com"
  };
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const GoogleProvider = new GoogleAuthProvider();

const FirbaseContext = createContext(null);

export const useFirebase = () =>useContext(FirbaseContext);

export const FirebaseProvider = (props) =>{
    const signUp = (email , password) =>{
        return createUserWithEmailAndPassword(auth , email , password);
    }
    const signIn = (email , password) =>{
        return signInWithEmailAndPassword(auth , email , password)
            //.then(value =>alert("sign in successfully"))
            .catch(err => alert(err))
    }
    const GoogleSignIn = () =>{
            signInWithPopup(auth , GoogleProvider)
        // signInWithRedirect(auth,GoogleProvider)
    }
    return(
        <FirbaseContext.Provider value={{signUp ,signIn,GoogleSignIn}}>
            {props.children}
        </FirbaseContext.Provider>
    );
}

