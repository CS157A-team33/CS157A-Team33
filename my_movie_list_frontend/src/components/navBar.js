import React, { Component } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBIcon
} from "mdbreact";
import { BrowserRouter as Router } from "react-router-dom";
import Popup from "reactjs-popup";
import AddFriend from "./AddFriend";
//import "./navBar.css"

const PopupExample = () => (
  <Popup trigger={<a>Friend</a>} position="bottom left">
    {close => (
      <div>
        Content here
        <a className="close" onClick={close}>
          &times;
        </a>
      </div>
    )}
  </Popup>
);

class NavBar extends Component {
  state = {
    isOpen: false
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <Router>
        <MDBNavbar color="default-color" dark expand="md">
          <MDBNavbarBrand>
            <strong className="white-text">MyMovieList</strong>
          </MDBNavbarBrand>
          <MDBNavbarToggler onClick={this.toggleCollapse} />
          <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
            <MDBNavbarNav left>
              <MDBNavItem active>
                <MDBNavLink to="#!">Home</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="#!">Features</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="#!">Pricing</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBDropdown>
                  <MDBDropdownToggle nav caret>
                    <div className="d-none d-md-inline">Dropdown</div>
                  </MDBDropdownToggle>
                  <MDBDropdownMenu className="dropdown-genre">
                    <MDBDropdownItem href="#!">Action</MDBDropdownItem>
                    <MDBDropdownItem href="#!">Comedy</MDBDropdownItem>
                    <MDBDropdownItem href="#!">Drama</MDBDropdownItem>
                    <MDBDropdownItem href="#!">Horror</MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavItem>
              <MDBNavItem>
                <MDBDropdown>
                  <MDBDropdownToggle nav caret>
                    <div className="d-none d-md-inline">FriendList</div>
                  </MDBDropdownToggle>
                  <MDBDropdownMenu className="dropdown-genre">
                    <MDBDropdownItem>
                      <AddFriend />
                    </MDBDropdownItem>
                    <MDBDropdownItem href="#!">My Connection</MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavItem>
            </MDBNavbarNav>

            <MDBNavbarNav right>
              <p className="white-text" style={{ marginTop: "5%" }}>
                {this.props.username}
              </p>
              <MDBNavItem>
                <MDBDropdown dropleft>
                  <MDBDropdownToggle nav caret>
                    <MDBIcon icon="user" />
                  </MDBDropdownToggle>
                  <MDBDropdownMenu className="dropdown-options">
                    <div>
                      <a href="./Settings"> Settings</a>
                    </div>
                    <div>
                      <a href="./"> Log Out</a>
                    </div>
                    {/* <MDBDropdownItem active to="#!">Settings</MDBDropdownItem> */}
                    {/* <MDBDropdownItem>Log Out</MDBDropdownItem> */}
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>
      </Router>
    );
  }
}

export default NavBar;
