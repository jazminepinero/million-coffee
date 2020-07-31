import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Button from 'react-bootstrap/Button'
import Link from 'next/link'
function NavBar() {
    return (
        <>
        <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/">hack-my-coffee</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
                      
            <NavDropdown title="Starbucks" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#"><a>Most Popular Starbucks Drinks</a></NavDropdown.Item>
              <NavDropdown.Item href="#"><a>Non-Dairy Starbucks Drinks</a></NavDropdown.Item>
              <NavDropdown.Item href="/Drinks/AllStarbucks"><a>All Starbucks Drinks</a></NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
                      
            <NavDropdown title="Dunkin'" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#"><a>Most Popular Dunkin' Drinks</a></NavDropdown.Item>
              <NavDropdown.Item href="#"><a>Non-Dairy Dunkin' Drinks</a></NavDropdown.Item>
              <NavDropdown.Item href="/Drinks/AllStarbucks"><a>All Dunkin' Drinks</a></NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav href="#deets">More deets</Nav>
            <Nav eventKey={2} href="#memes">
              Dank memes
            </Nav>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      </>
    )
}

export default NavBar
