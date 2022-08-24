import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'

function Profile() {
  const {id}=useParams();
    const [profile, setProfile]=useState({})
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(res=> res.json())
        .then(data=>setProfile(data))
    },[profile])
  return (
    <div>
         Profile
        <h2>{profile.name}</h2>
        <p>{profile.email}</p>
    </div>
  )
}

export default Profile
