import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import {Route, Navigate, Link } from "react-router-dom";



function Profile() {

  const [login, setLogin]=useState(false)

  const {id}=useParams();
    const [profile, setProfile]=useState({})
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(res=> res.json())
        .then(data=>setProfile(data))
    },[profile])
  return (
    <div>


    <div className='profile'>
        <h2>{profile.name}</h2>
         <div>
          <img src={require('../Images/avatar.webp')} className="avatar" alt="avatar" />
        </div>


        <p>email: <strong>{profile.email}</strong></p>
        <p> phone: <strong>{profile.phone}</strong></p>

        <Link to="/users">Return</Link>
    </div>



   </div>
  )
}


export default Profile
