import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import Users from './Users';

function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const SubmitHander=(e)=>{
    e.preventDefault();
    localStorage.setItem('auth', true)
    navigate('/')
  }



  const SuccessLogin=(auth)=>{
    console.log(name)
    console.log(password)

    }



  // sachiroa gaketdes value

  return (
    <div className='login'>
      <div>
        <h2>Login</h2>

        <form onSubmit={SubmitHander}>
            <input type="text" onChange={(e)=>setName(e.currentTarget.value)}  className='login-form' placeholder='username' />
            <input type="password" onChange={(e)=>setPassword(e.currentTarget.value)}  className='login-form' placeholder='password'/>
            <br/>
            <button type='submit' className='login-form login-button' onClick={()=>SuccessLogin()}>Login</button>
        </form>
        <p>Aren't registered? You can register here</p>
      </div>
      <div>
        <img src={require('../Images/login.jpg')} className="login-pic" alt="logo" />
      </div>

      {/* {users.map((value)=>{
        return(
          <div>
            <p>{value.name}</p>
            <p>{value.username}</p>
            <button onClick={()=>HandlerPopup(value)}>სრულად</button>
          </div>
        )
      })} */}
    </div>
  )
}

export default Login
