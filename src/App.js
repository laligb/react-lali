import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import Home from "./Pages/Home";
import About from "./Pages/About";
import SinglePost from "./Pages/SinglePost";
import Login from "./Pages/Login";
import 'bootstrap/dist/css/bootstrap.min.css';
import SocialFollow from "./Components/SocialFollow";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import ButtonGroup from 'react-bootstrap/ButtonGroup';



function App() {
  return (
    <div className="App">
      <header className=" navbar navbar-expand-lg navbar-dark bg-dark">
        <logo className="nav-items">
          <img src={require('./logo.png')} className="logo" alt="logo" />
        </logo>

        <form class="d-flex">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>

        <nav className="nav-items">
          <Link to="/">Home</Link>

          <DropdownButton
            as={ButtonGroup}
            key="myKey"
            id="button"
            title="👤"
          >


            <Dropdown.Item eventKey="1"> <Link to="/login">Login</Link></Dropdown.Item>
            <Dropdown.Item eventKey="2"> <Link to="/profile">Profile</Link></Dropdown.Item>
            <Dropdown.Item eventKey="3"> <Link to="/single-post">Post</Link></Dropdown.Item>

          </DropdownButton>

        </nav>


        <div className="socials nav-items">
          <SocialFollow />
        </div>
      </header>

       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/single-post" element={<SinglePost/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
