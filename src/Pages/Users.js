import React,{useEffect, useState} from 'react'
import { Link } from "react-router-dom";

function Users() {

  const [users, setUsers]=useState([])
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((res)=> res.json())
    .then((data)=> setUsers(data))
  }, [users])
  console.log(users)
  return (
    <div>
      {users.map((user)=>{
        return(
          <div>
            <Link to={`/users/${user.id}`}><p>{user.name}</p></Link>
          </div>

        )
    })}


    </div>
  )
}

export default Users
