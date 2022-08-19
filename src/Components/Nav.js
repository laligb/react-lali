import React from 'react'
import { Link, useNavigate} from 'react-router-dom'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import ButtonGroup from 'react-bootstrap/ButtonGroup';


function Nav() {
    const navigate=useNavigate()
    const Logout=()=>{
        localStorage.removeItem('auth')
        navigate('/login')
    }
  return (

    <>
      <nav className="nav-items">
          <Link to="/">Home</Link>

          <DropdownButton
            as={ButtonGroup}
            key="myKey"
            id="button"
            title="👤"
          >
        {
          localStorage.getItem('auth')!=null?
          (

            <Dropdown.Item eventKey="1"><Link to="" onClick={Logout}>Logout</Link></Dropdown.Item>

          ):
            <Dropdown.Item eventKey="1"> <Link to="/login">Login</Link></Dropdown.Item>
        }
         <Dropdown.Item eventKey="2"> <Link to="/profile">Profile</Link></Dropdown.Item>
         <Dropdown.Item eventKey="3"> <Link to="/single-post">Post</Link></Dropdown.Item>

         </DropdownButton>
    </nav>

    </>

  )
}

export default Nav
