import React,{useEffect, useState} from 'react'
import { Link } from "react-router-dom";

function Users() {

  const [users, setUsers]=useState([])
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((res)=> res.json())
    .then((data)=> setUsers(data))
  }, [users])

  return (
    <div className='col-lg-10'>
      <h2>Users</h2>
      {users.map((user)=>{
        return(
          <div className='post'>
            <div>
             <img src={require('../Images/avatar.webp')} className="little-avatar" alt="avatar" />
            </div>

            <Link to={`/users/${user.id}`}><p>#{user.id} {user.name}</p></Link>
            <p>{user.email}</p>
          </div>

        )
    })}


    </div>
  )
}

export default Users
