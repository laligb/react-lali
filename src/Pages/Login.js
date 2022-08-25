import React, { useEffect, useState, createContext} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import Users from './Users';
const AuthContext = createContext();


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();


 const [user, setUser] = useState("")
// CORRECTION!!!!!!!!!!!!!!!!!!!!!!!!!!!!! LOCALSTORAGE??????
  const login=(e)=>{
    e.preventDefault();
    console.log(JSON.parse(localStorage.getItem(email)))
    console.log(localStorage.getItem(1))

    if (JSON.parse(localStorage.getItem(email)) === true)
    {
      localStorage.setItem('auth', true)
      navigate('/')
      console.log('You logged in successfully!')
    } else {
      console.log("Invalid login")
      navigate('/login')
    }

}


// const HandleLogin=()=>{
//   if (JSON.parse(localStorage.getItem('auth')) === null){
//     console.log("Incorrect login")
//   }else{
//     console.log("Welcome!")
//   }
// }


  // const SuccessLogin=(auth)=>{
  //   console.log(name)
  //   console.log(password)

  //   }


  // sachiroa gaketdes value

  return (
    <div className='login'>
      <div>
        <h2>Login</h2>

        <form onSubmit={login}>
            <input type="email" onChange={(e)=>setEmail(e.currentTarget.value)}  className='login-form' placeholder='username' />
            <input type="password" onChange={(e)=>setPassword(e.currentTarget.value)}  className='login-form' placeholder='password'/>
            <br/>
            <button type='submit' className='login-form login-button' onClick={(e)=>login()}>Login</button>
        </form>
        <p>Aren't registered? You can register <Link to="/signup">here</Link></p>
      </div>
      <div>
        <img src={require('../Images/login.jpg')} className="login-pic col-12" alt="logo" />
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
