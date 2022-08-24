import React, {useEffect, useState} from 'react'

function Posts() {
  const [posts, setPosts]=useState([])
  useEffect(()=>{
    fetch('https://api.npoint.io/e60f6e6cb709f8c11cffs')
    .then((res)=> res.json())
    .then((data)=> setPosts(data))
  }, [posts])
  console.log(posts)
  return (
    <div>
      posts

    </div>
  )
}

export default Posts
