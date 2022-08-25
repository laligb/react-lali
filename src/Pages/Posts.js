import React, {useEffect, useState} from 'react'
import { Link } from "react-router-dom";



function Posts() {

  //posts

  const [posts, setPosts]=useState([])
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res)=> res.json())
    .then((data)=> setPosts(data))
  }, [posts])

  //users
  const [users, setUsers] = useState(() => {
    // getting stored value
    const saved = localStorage.getItem("user");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });


  return (
    <div>
      <h2>Posts</h2>

      {posts.map((post)=>{
        return(
          <div class="post">
            <Link to={`/posts/${post.id}`}><p className="title">{post.title.toUpperCase()}</p></Link>
            <p>{post.body}</p>
            <div>
              <img src={require('../Images/post.jpg')} className="little-avatar" alt="avatar" />
            </div>


          </div>

        )
    })}

    </div>
  )
}

export default Posts
