import React, { useRef } from "react";
import { auth } from "../firebase";
import "./Signup.css";

const SignUp = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (e) => {
    e.preventDefault();
    auth.createUserWithEmailAndPassword();
  };

  const signIn = (e) => {
    e.preventDefault();
  };

  return (
    <div className="signup__container">
      <div className="input__section">
        <h3 style={{ margin: 0 }}>Sign In</h3>
        <form>
          <input  ref={emailRef} type="email" name="" id="" placeholder="Enter Your Email" />{" "}
          <br />
          <input
          ref={passwordRef}
            type="password"
            name=""
            id=""
            placeholder="Enter your password"
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
