import React from 'react'
import Footer from '../Components/Footer/footer'
import './CSS/login-signup.css'
const login = () => {
  return (
    <div><div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
           <input type='text' placeholder='Your Name'/>
           <input type='email' placeholder='Email address'/>
           <input type='password' placeholder='Password'/>
        </div>
        <button>Continue</button>
        <p className='loginsignup-login'>Already have an accoount ? <span>LogIn</span></p>
        <div className="loginsignup-agree">
          <input type='checkbox' name='' id='' />
          <p>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>
      </div>
      
    </div>
    <Footer/>
    </div>
    
  )
}

export default login
