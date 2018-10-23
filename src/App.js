import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import User from './components/user/user.component';
import Routes from './Routes';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

import { LinkContainer } from "react-router-bootstrap";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      fname: 'fname',
      email: ''

    }
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value

    })
  }

  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.name)
  }

  render() {
    return (
      <div className="App container">
        {/* <User name={this.state.name} email={this.state.email} onChange={this.onChange} onSubmit={this.onSubmit}></User> */}
        <div className="App container">
          <Navbar fluid collapseOnSelect>
            <Navbar.Header>
              <Navbar.Brand>
                <Link to="/">Scratch</Link>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav pullRight>
                <LinkContainer to="/signup">
                  <NavItem>Signup</NavItem>
                </LinkContainer>
                <LinkContainer to="/signin">
                  <NavItem>SignIn</NavItem>
                </LinkContainer>
                <LinkContainer to="/user">
                  <NavItem>User</NavItem>
                </LinkContainer>
                <LinkContainer to={`/plant/${'fasdfafa'}`}>
                  <NavItem>Plant</NavItem>
                </LinkContainer>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
        <Routes />
      </div>
    );
  }
}

export default App;
