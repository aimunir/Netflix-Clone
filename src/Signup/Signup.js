import React from 'react'
import "./Signup.css"

const SignUp = () => {
  return (
    <div  className = "signup__container">
         <div className="input__section">
            <h1>Sign In</h1>
          <form>
            <input type="email" name="" id=""  placeholder='Enter Your Email' /> <br />
            <input type="password" name="" id="" placeholder='Enter your password' /><br />
            <button>Sign In</button>
            
          </form>
         </div>
      </div>
  )
}

export default SignUp