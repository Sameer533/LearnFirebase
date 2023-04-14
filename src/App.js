//import {getDatabase , set , ref} from "firebase/database"
import {app} from "./Firebase";
import {getAuth ,onAuthStateChanged , signOut} from 'firebase/auth'
import SignUpUser  from "./pages/SignUpUser";
import './App.css';
import "./index.css";
import SignInUser from "./pages/SignInUser";
import { useFirebase } from "./Context/firebase";
import { useEffect, useState } from "react";
import Firestore from "./pages/Firestore";

const auth = getAuth(app);

// const db = getDatabase(app);
function App() {
  const firebase = useFirebase();

  const[user , setuser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth , (user)=>{
      if(user){
       // console.log(user);
        setuser(user);
      }else{
        //console.log("you are logged out");
        setuser(null);

      }


    });
  
    
  }, [])
  
  // const putData = () =>{
  //   set(ref(db , "user/sameer"),{
  //     id:1,
  //     name: "mohammed sameer",
  //     age: 22

  //   });
  // }
  if(user === null){
  
    return(
      
      <div  className="App">
    <SignUpUser/>
    <br></br>
    <SignInUser/>
      <br/>
      <button className = "gogle" onClick={() =>{
        firebase.GoogleSignIn();
      
      }}>SignUpWithGoogle</button>

      </div>
    );
  }
// mdsaif081ms@gmail.com
// sameer9
  return (
   <>
   <div className="App">
    
    {/* <button>putData</button> */}
    
   <div className="Navbar">
   <p>hello {user.email}</p>
    <button onClick={()=>signOut(auth)}>LogOut</button>
    
   </div>
    <h1>Cloud FireStore</h1>
    <Firestore/>
    
    </div>
   </>
  );
}

export default App;
