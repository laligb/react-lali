import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import Home from "./Pages/Home";
import About from "./Pages/About";
import SinglePost from "./Pages/SinglePost";
import Login from "./Pages/Login";
import 'bootstrap/dist/css/bootstrap.min.css';
import SocialFollow from "./Components/SocialFollow";
import Nav from "./Components/Nav";
import Users from "./Pages/Users";
import Posts from "./Pages/Posts";
import Profile from "./Pages/Profile";
import React, {useState, useEffect, useSearchParams} from 'react'
import Registration from "./Pages/Registration";
import Footer from "./Pages/Footer";



function App() {

  const [query, setQuery] = useState("");
  //setQuery({ hello: "world"  });
  //console.log(query);


  const SearchMe=(query)=>{
    if (query !== ""){
      setQueryExist(true)
      } else {
      setQueryExist(false)
      }
    }

    const [queryExist, setQueryExist] = useState(false)

  return (
    <div className="App">
      <header className="navbar navbar-expand-lg navbar-dark bg-dark">
        <logo className="nav-items">
        <Link to="/"><img src={require('./logo.png')} className="logo" alt="logo" /></Link>
        </logo>



        <form className="d-flex col-lg-3">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onSearch={(e)=>setQuery(e.currentTarget.value)}/>
          <button className="btn btn-outline-info" type="submit" onClick={()=>SearchMe(query)}>Search</button>
        </form>

        <div className="col-lg-6">

        </div>

        <div className="">
          <Nav/>
        </div>

        <div className="socials nav-items col-lg-3">
          <SocialFollow />
        </div>


      </header>


      <div className="container">

       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/posts/:id" element={<SinglePost/>}/>
        <Route path="/posts" element={<Posts/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/users" element={<Users/>}/>
        <Route path="/users/:id" element={<Profile/>}/>
        <Route path="/signup" element={<Registration/>}/>
      </Routes>
      </div>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
