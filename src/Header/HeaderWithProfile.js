import React, {useState} from 'react';
import {Navbar, Nav, Alert, Button, FormControl } from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

export default function HeaderWithProfile() {

        return(
           <div>
             <Navbar bg="dark" variant='dark' expand="lg">
  <Navbar.Brand href="/">News Aggregator</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="container-fluid">
      <LinkContainer to="/">
      <Nav.Link>Home</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/latest">
      <Nav.Link>Latest</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/nyt-news">
      <Nav.Link>NYT News</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/topics">
      <Nav.Link>Topics</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/saved-articles">
        <Nav.Link>Saved List</Nav.Link>
        </LinkContainer>
      <LinkContainer to="/profile">
      <Nav.Link>Profile</Nav.Link>
      </LinkContainer>
      </Nav>
    {/* <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form> */}
  </Navbar.Collapse>
</Navbar>

            </div>
           
        )
}




