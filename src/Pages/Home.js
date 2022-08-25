import React, {useState, useEffect} from 'react'
import { Routes, Route, Link } from "react-router-dom";

function Home() {

  const [query, setQuery] = useState("");

  const [posts, setPosts]=useState([])
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res)=> res.json())
    .then((data)=> setPosts(data))
  }, [posts])

  const [queryExist, setQueryExist] = useState(false)

  const SearchMe=(query)=>{
    if (query !== ""){
      setQueryExist(true)
      } else {
      setQueryExist(false)
      }
    }


  return (
    <>

      <main>
        <h2>Welcome to the homepage!</h2>
        <p>You can do this, I believe in you.</p>
        <div className='row'>
          <img src={require('../Images/banner.jpg')} className="login-pic col-lg-12 col-md-12 col-sm-12" alt="banner" />
        </div>

        <div className='row'>
        {posts.map((post)=>{
          <p>{post.title}</p>
        })}
      </div>
      </main>
      <div>
        <Link to="/about">About</Link>
      </div>




      {/* {queryExist ? (
        <>
       <p>QUERY EXIST</p>
       {console.log(query)}
        {posts.filter(post => post.includes(query)).map(post => (
      <li>
        {console.log(post)}
        {post.title}
      </li>
       ))}</>
       ) : (

        posts.map((post) => {

            <div className="post">
            <p className="title">{post.title}</p>
              <p>{post.body}</p>

            </div>

        }) ) } */}
    </>
  )
}

export default Home
