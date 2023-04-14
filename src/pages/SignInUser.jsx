import React ,{useState}from 'react'
import { useFirebase } from '../Context/firebase';
// import { app } from '../Firebase';
// import { getAuth , signInWithEmailAndPassword } from 'firebase/auth';
// const auth = getAuth(app);
const SignInUser = () => {
    const firebase = useFirebase();
    const[email , setemail] = useState("");
    const[password , setpassword] = useState("");
    // const SignIn = () =>{
    //     signInWithEmailAndPassword(auth , email , password)
    //     .then(value =>alert("sign in successfully"))
    //     .catch(err => alert(err));
    // }

  return (
    <>
     <h1>signIN</h1>
    <label>Email</label>
        <input type="email" required placeholder='enter email'
            onChange={(e) => setemail(e.target.value)} value = {email}
        />
        <br/>
        <label>password</label>
        <input type="password" required placeholder='enter password'
            onChange={(e) => setpassword(e.target.value)} value = {password}
        />
         <br></br>
        <button onClick={() => {
            firebase.signIn(email,password);
        }}>SignIN ME</button>

        </>
  )

}

export default SignInUser