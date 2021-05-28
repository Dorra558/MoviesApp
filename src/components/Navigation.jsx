import React from 'react'
import {Navbar,Nav, Container, Button}from 'react-bootstrap'
import '../App.css'
import { Link } from "react-router-dom";

function Navigation({handleChange, favorites}) {
    return (
        <div>
            <Navbar className="navbarr py-2" fixed="top" expand="lg">
              <Container>
                <Navbar.Brand href="/" className="navig"><span className="titlLogo">Movies</span><span className="titlLogo2">On</span></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">

                    <Nav className="mx-auto">
                      <Link to="/MovieApp"  className="navig">Home</Link>
                      <Link to="/MovieApp/movies" className=" px-3 navig">Movies</Link>
                      <Link to="/MovieApp/contact" className="navig ">Contact Us</Link>
                  
                    </Nav>
                    
                    <div className=" mr-2">
                      <input type="text" className="search-box"  placeholder="Search your movies... &#61442;" onChange={handleChange}/> 
                    </div>
                  
                    <Link to="/MovieApp/favorit"><i class="fas fa-heart text-white iconNav "></i><span class="badge bg-danger rounded-circle mr-4" id="val">{favorites}</span></Link>
                    {/* <i class="fas fa-user text-white iconNav"></i> */}
                </Navbar.Collapse>
                <Button variant="dark" className="text-white">Sign In</Button>
                <Button variant="danger" className="text-white">Sign Up</Button>
              </Container>
           
            </Navbar>         
        </div>
    )
}

export default Navigation
