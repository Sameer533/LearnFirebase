//import {getDatabase , set , ref} from "firebase/database"
import {app} from "./Firebase";
import {getAuth ,onAuthStateChanged , signOut} from 'firebase/auth'
import SignUpUser  from "./pages/SignUpUser";
import './App.css';
import SignInUser from "./pages/SignInUser";
import { useFirebase } from "./Context/firebase";
import { useEffect, useState } from "react";

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
      <button onClick={() =>{
        firebase.GoogleSignIn();
      
      }}>SignUpWithGoogle</button>

      </div>
    );
  }

  return (
   <>
   <div className="App">
    
    {/* <button>putData</button> */}
    
    <p>hello {user.email}</p>
    <button onClick={()=>signOut(auth)}>LogOut</button>
   
    
    </div>
   </>
  );
}

export default App;
