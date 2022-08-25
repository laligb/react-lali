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
  console.log(posts)
  const SearchMe=(query)=>{
    if (query !== ""){
      setQueryExist(true)
      } else {
      setQueryExist(false)
      }
    }

   let postsNew = posts.filter((month,idx) => idx < 3)


  return (
    <>

      <main>
        <h2>Welcome to the homepage!</h2>
        <p>You can do this, I believe in you.</p>
        <div className='row'>
          <img src={require('../Images/banner.jpg')} className="banner col-lg-12 col-md-12 col-sm-12" alt="banner" />
        </div>



        <div className=''>

      </div>
      {postsNew.map((post)=>{
          return (
            <>
          <div className="post col-lg-12 col-md-12 col-sm-12">
          <h2 className="title">{post.title.toUpperCase()}</h2>
            <p>{post.body}</p>
          <Link to={`/posts/${post.id}`}><p>Learn More</p></Link>
          </div>
          </>
          )
        })}

      <Link to="/posts"><p>More Posts</p></Link>

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
