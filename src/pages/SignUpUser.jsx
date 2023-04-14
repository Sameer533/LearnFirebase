import React from "react";
import { useState } from "react";
import { useFirebase } from "../Context/firebase";

// import { app } from '../Firebase';
// import  {getAuth ,createUserWithEmailAndPassword} from "firebase/auth";
// const auth = getAuth(app);

const SignUpUser = () => {
  const firebase = useFirebase();
  // console.log(firebase);
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  // const createuser = () =>{
  //      createUserWithEmailAndPassword(auth , email ,password) .then(value => alert("succes"))
  // }
  return (
    <>
      <h1>signUP</h1>
      <label>Email</label>
      <input
        type="email"
        required
        placeholder="enter email"
        onChange={(e) => setemail(e.target.value)}
        value={email}
      />
      <br />
      <label>password</label>
      <input
        type="password"
        required
        placeholder="enter password"
        onChange={(e) => setpassword(e.target.value)}
        value={password}
      />
      <br></br>
      <button
        onClick={() => {
          firebase.signUp(email, password);
        }}
      >
        SignUp
      </button>
    </>
  );
};

export default SignUpUser;
