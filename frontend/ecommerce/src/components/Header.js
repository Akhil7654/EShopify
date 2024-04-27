import React from 'react'
import {Link,useLocation} from 'react-router-dom'
import {LinkContainer} from 'react-router-bootstrap'
import {Navbar,Nav,Dropdown} from 'react-bootstrap'
import {useSelector,useDispatch} from 'react-redux'
import { logout } from '../actions/UserActions'




function Header() {
  const location = useLocation();

  const goBack = () => {
    window.history.back(); // Go back using browser history
  };


  const userLogin=useSelector(state=>state.userLogin)
  const {userInfo}=userLogin
  const dispatch=useDispatch()

  const logoutHandler=()=>{
    dispatch(logout())
  }

  return (
    <>
    <Navbar className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark" style={{ height: '60px' }}>
  <div className="container-fluid">

    <LinkContainer to="/">
    <Nav.Link className="navbar-brand">Eshopify</Nav.Link>
    </LinkContainer>

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarColor02">
      <ul className="navbar-nav me-auto">

        <li className="nav-item">
        <LinkContainer to="/">
        <Nav.Link className="navbar-link active" ><i className="fa-solid fa-house" /></Nav.Link>
        </LinkContainer>        
        </li>
        
        <li className="nav-item">
        <LinkContainer to="/cart">
        <Nav.Link className="nav-link">Cart</Nav.Link>
        </LinkContainer>
        </li>


        <li className="nav-item dropdown">
      {userInfo ? (
        <Dropdown>
          <Dropdown.Toggle className="nav-link dropdown-toggle" id="dropdown-basic">
            Welcome {userInfo.name}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item onClick={logoutHandler}>Logout</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      ) : (
        <Dropdown>
          <Dropdown.Toggle className="nav-link dropdown-toggle" id="dropdown-basic">
            New User?
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <LinkContainer to="/login">
              <Nav.Link className="dropdown-item">Login</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/signup">
              <Nav.Link className="dropdown-item">Signup</Nav.Link>
            </LinkContainer>
          </Dropdown.Menu>
        </Dropdown>
      )}
    </li>

    {location.pathname !== '/' && ( // Check if not in home page
    <Nav.Link onClick={goBack}>Go Back</Nav.Link>
    )}
        
      </ul>
      <form className="d-flex">
        <input className="form-control me-sm-2" type="search" placeholder="Search" />
        <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div>
  </div>
</Navbar>
      
    </>
  )
}

export default Header