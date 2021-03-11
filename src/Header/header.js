import React from 'react';
import styles from './styles';
import {Navbar, Nav, NavDropdown, Form, Button, FormControl } from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

class HeaderComponent extends React.Component {

    render(){
        return(
           <div>
             <Navbar bg="dark" variant='dark' expand="lg">
  <Navbar.Brand href="#home">News Feed</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <LinkContainer to="/">
      <Nav.Link>Home</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/latest">
      <Nav.Link>Latest</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/popular">
      <Nav.Link>Most Popular</Nav.Link>
      </LinkContainer>
      <NavDropdown title="Categories" id="basic-nav-dropdown">
        <NavDropdown.Item href="/category/business">Business</NavDropdown.Item>
        <NavDropdown.Item href="/category/us-politics"> US Politics</NavDropdown.Item>
        <NavDropdown.Item href="/category/tech">Science and Technology</NavDropdown.Item>
        <NavDropdown.Item href="/category/entertainment">Entertainment</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="/category/reviews">Reviews</NavDropdown.Item>
        <NavDropdown.Item href="/category/covid-19">Covid-19 Data</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>

            </div>
           
        )
    }
}



export default HeaderComponent;