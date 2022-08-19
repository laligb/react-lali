import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'

function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const SubmitHander=(e)=>{
    e.preventDefault();
    localStorage.setItem('auth', true)
    navigate('/')

  }
  return (
    <div className='login'>
      <div>
        <h2>Login</h2>

        <form onSubmit={SubmitHander}>
            <input type="text" onChange={(e)=>setName(e.currentTarget.value)}  className='login-form' />
            <input type="password" onChange={(e)=>setPassword(e.currentTarget.value)}  className='login-form'/>
            <br/>
            <button type='submit' className='login-form login-button'>Login</button>
        </form>
        <p>Aren't you registered? You can register here</p>
      </div>
      <div>
        <img src={require('../Images/login.jpg')} className="login-pic" alt="logo" />
      </div>
    </div>
  )
}

export default Login
