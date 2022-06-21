import React, {useState} from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth} from "../firebasedb";

import "./Signup.css";

const SignUp = () => {
 const [email,setEmail]=useState('');
 const [password,setPassword]=useState('');

  const register = (e) => {
    e.preventDefault();
   createUserWithEmailAndPassword(auth,email,password)
  .then((auth) => {
    console.log(auth);
  })
  .catch((error) => {   
    console.log(error);   
  });
  };

  const signIn = (e) => {
    e.preventDefault();
  };

  const changeEmail = (e) => {
    setEmail(e.target.value);
    console.log(email);
  }
  const changePassword = (e) => {
    setPassword(e.target.value);
    console.log(password);
  }

  return (
    <div className="signup__container">
      <div className="input__section">
        <h3 style={{ margin: 0 }}>Sign In</h3>
        <form>
          <input  onChange={changeEmail} type="email" name="" id="" placeholder="Enter Your Email" value={email} />{" "}
          <br />
          <input
          onChange={changePassword}
            type="password"
            name=""
            id=""
            placeholder="Enter your password"
            value={password} 
          />
          <br />
          <button className="sign__btn" type="submit" onClick={signIn}>
            Sign In
          </button>
        </form>
      </div>
      <p id="footer-line">
        {" "}
        New to Netflix.?{" "}
        <span id="footer-signup" onClick={register}>
          Signup Now
        </span>{" "}
      </p>
    </div>
  );
};

export default SignUp;
