import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import { Link } from "react-router-dom";

function SinglePost() {
  const {id}=useParams();
  const [post, setPost]=useState({})
  useEffect(()=>{
      fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res=> res.json())
      .then(data=>setPost(data))
  },[post])
return (
  <div className='post'>
      <h3 className='title'>{post.title}</h3>
      <br/>
      <p>{post.body}</p>
      <div>
          <img src={require('../Images/post.jpg')} className="avatar" alt="post" />
      </div>

      <br/>
      <Link to='/posts'>return</Link>
  </div>
)
}

export default SinglePost
