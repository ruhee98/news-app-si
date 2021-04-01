import React from 'react';
import {Navbar, Nav, Form, Button, FormControl } from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

class HeaderComponent extends React.Component {

    render(){
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
      <LinkContainer to="/nyt-news">
      <Nav.Link>NYT News</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/topics">
      <Nav.Link>Topics</Nav.Link>
      </LinkContainer>
      <Nav.Item className="ml-auto">
      <LinkContainer to="/signUp">
        <Nav.Link>Sign Up </Nav.Link>
        </LinkContainer>
        </Nav.Item>
      <LinkContainer to="/login">
      <Nav.Link>Login</Nav.Link>
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
}



export default HeaderComponent;