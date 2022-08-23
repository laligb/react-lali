import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import Home from "./Pages/Home";
import About from "./Pages/About";
import SinglePost from "./Pages/SinglePost";
import Login from "./Pages/Login";
import 'bootstrap/dist/css/bootstrap.min.css';
import SocialFollow from "./Components/SocialFollow";
import Nav from "./Components/Nav";



function App() {

  return (
    <div className="App">
      <header className="navbar navbar-expand-lg navbar-dark bg-dark">
        <logo className="nav-items">
        <Link to="/"><img src={require('./logo.png')} className="logo" alt="logo" /></Link>
        </logo>

        <form className="d-flex col-lg-3">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-info" type="submit">Search</button>
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
        <Route path="/single-post" element={<SinglePost/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
      </div>
    </div>
  );
}

export default App;
