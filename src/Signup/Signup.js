import React from 'react'
import "./Signup.css"

const SignUp = () => {
  return (
    <div  className = "signup__container">
         <div className="input__section">
            <h3  style={{margin:0}}>Sign In</h3>
          <form>
            <input type="email" name="" id=""  placeholder='Enter Your Email' /> <br />
            <input type="password" name="" id="" placeholder='Enter your password' /><br />
            <button className="sign__btn">Sign In</button>
            
          </form>
         </div>
          <p></p>
      </div>
  )
}

export default SignUp