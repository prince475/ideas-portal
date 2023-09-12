import styled from 'styled-components';
import Logo1 from './logo.png'
import React from 'react';
import './Login.css'
import './Background.jpg'


function Login() {
  return(
  
  < >
   <div className='styled--dev'>
    <img className='login--logo' src={Logo1} alt='Britam Logo'/>

    <h2 className='welcome--text'>Welcome to ideas Portal</h2>
    <h3 className='login--desc'>Please enter your details</h3>
      <div className='wrapper'>
          <form action='#'>
            <div className='input--box'>
              <input type='text' placeholder='Enter your email'></input>
            </div>
            <div className='input--box'>
              <input type='password' placeholder='Enter your password'></input>
            </div>
            <div className='checker'>
              <input type="checkbox" id="Remember me" name="Remember me"  />
              <label for="Remember me">Remember me for 30 days?</label>
            </div>
            <div className=''>
              <button className='login--button' type='submit' value='Register now'>
                sign in
              </button>
            </div>
          </form>
      </div>
    </div>
  </>
  )
}


export default Login;

