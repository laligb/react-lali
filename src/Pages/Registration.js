import React, { useState } from 'react'
import Login from './Login'

function Registration() {

    const [email, setEmail]=useState(null)

    const [error, setError]=useState(false)
    const [login, setLogin]=useState(false)
    const [forLocal, setforLocal]=useState([])
    const [disabled, setdisabled]=useState(true)

    const UserNameHandler=(e)=>{
        setEmail(e.currentTarget.value)
        if(email!==null){
            setdisabled(false)
        }else{
            setdisabled(true)
        }
    }

    const HandlerSubmit=(e)=>{
        e.preventDefault()
        if(email===null){
            setError(true)
        }
        else{
            setLogin(true)
            localStorage.setItem( email, true)
        }
    }
  return (
    <div className='container'>

        {!login?(
          <>
        <div className='login'>
        <h2 className='login-form'>Registration</h2>
            <form onSubmit={HandlerSubmit}>
                <input
                    type="text"
                    placeholder="UserName"
                    className='login-form' />
                <input type="email" placeholder="Email" className='login-form'  onChange={UserNameHandler}/>
                <input type="password" placeholder="password" className='login-form' />
                {error &&(
                    <p>Please, fill the values</p>
                )}
                <button type='submit' disabled={disabled} className="login-form login-button" >Registration</button>
            </form>
            <div>
              <img src={require('../Images/login.jpg')} className="login-pic" alt="logo" />
            </div>
        </div>
        </>
        ):(
        <div className='Login'>
            <Login/>
        </div>
        )
        }

    </div>

  )
}

export default Registration
