import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon } from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';


class NavBar extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {
  return (
    <Router>
      <MDBNavbar color="indigo" dark expand="md">
        <MDBNavbarBrand>
          <strong className="white-text">MyMovieList</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>
            <MDBNavItem>
              <div style={{ marginTop:"0.5rem"}}>
                    <a style={{ color:"white", marginTop:"2rem" }} className="pl-3" href={"/home"}>Home</a>
              </div>
            </MDBNavItem>
            <MDBNavItem>
            <div style={{ marginTop:"0.5rem"}}>
                    <a style={{ color:"white", marginTop:"2rem" }} className="pl-3" href={"/home"}>Movies</a>
              </div>
            </MDBNavItem>
            <MDBNavItem>
            <div style={{ marginTop:"0.5rem"}}>
                    <a style={{ color:"white", marginTop:"2rem" }} className="pl-3" href={"/home"}>TV Shows</a>
              </div>
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
          </MDBNavbarNav>
          <MDBNavbarNav right>
            <MDBNavItem>
              <MDBNavLink className="waves-effect waves-light" to="#!">
                <MDBIcon fab icon="twitter" />
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink className="waves-effect waves-light" to="http://google.com">
                <MDBIcon fab icon="google-plus-g" />
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBDropdown dropleft>
                <MDBDropdownToggle nav caret>
                  <MDBIcon icon="user" />
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-options">
                  <div>
                    <a href={"/Profile"}>Profile</a>
                  </div>
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