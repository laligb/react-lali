import { Routes, Route, Link } from "react-router-dom";
import './App.scss';
import Home from "./Pages/Home";
import About from "./Pages/About";
import SinglePost from "./Pages/SinglePost";
import Login from "./Pages/Login";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header>
        <logo>

        </logo>

        <nav>
          <Link to="/">Home</Link>
          <Link to="/single-post">Post</Link>
          <Link to="/login">Login</Link>
        </nav>
        <div className="socials">

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
