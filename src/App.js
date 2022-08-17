import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import Home from "./Pages/Home";
import About from "./Pages/About";
import SinglePost from "./Pages/SinglePost";
import Login from "./Pages/Login";

function App() {
  return (
    <div className="App">
      <header>

        <nav>
          <Link to="/">Home</Link>
          <Link to="/single-post">Post</Link>
          <Link to="/login">LOGIN</Link>
        </nav>
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
