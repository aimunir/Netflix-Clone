import React, {useState} from 'react'
import Signup from '../Signup/Signup';  
import './Login.css'

const Login = () => {

const [signIn,setSignIn] = useState(false);

  return (
    <div className='Login__page__container'> 
             <div className="login__page__background">  
                 <img className='login__screen__logo' 
                                src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"  alt="" />    

                    <button  
                    onClick={()=>setSignIn(true)}
                    className='sign_in'>Sign In</button>   

                    <div className="login_screen_gradient"/>            
              </div>

              <div className="logo__container__body">
                {signIn ?(<Signup/>)
              
                 : ( <>
                 <h1>Unlimited movies, TV shows, and more.</h1>
                 <h2>Watch anywhere. Cancel anytime.</h2> 
                 <h3>Ready to watch? Enter your email to create or restart your membership.</h3>   


                 <div className="login__input">
                  <form>
                        <input type="email" placeholder='Enter your email' required />
                        <button 
                        onClick={()=>setSignIn(true)}
                        className="get__started__btn">Get Started  <span id=''> > </span> </button>

                  </form>
                </div> 

               </>)}
              
             
                </div> 

    </div>
  )
}

export default Login