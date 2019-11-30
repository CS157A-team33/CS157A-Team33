import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
        MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBBtn} from "mdbreact";
import { BrowserRouter as Router, Redirect } from 'react-router-dom';


class NavBar extends Component {
state = {
  isOpen: false,
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}


render() {
  return (

      <MDBNavbar color="indigo" dark expand="md">
        <MDBNavbarBrand>
          <strong className="white-text">
           My Movie List
          </strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>
            <MDBNavItem>
              <MDBNavLink to="/home">
              Home
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/home">
              Movie
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/home">
              TV Show
              </MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
          <MDBNavbarNav right >
          <MDBNavItem>
            <MDBNavLink style={{marginTop: '0.2rem'}} to="/Settings">
                 <img height='42rem'
                 src="https://carlisletheacarlisletheatre.org/images/settings-icon-3.png"/>
            </MDBNavLink>
            </MDBNavItem> 
            <MDBNavItem>
            <MDBNavLink style={{marginTop: '0.5rem'}} to="/profile">
                 <img height='30rem'
                 src="https://cdn0.iconfinder.com/data/icons/social-media-network-4/48/male_avatar-512.png"/>
            </MDBNavLink>
            </MDBNavItem>
            <MDBNavbarNav right>
            <MDBBtn outline color="white"  style={{color:'white', borderRadius: "30px"}} type="submit">Logout</MDBBtn>
            </MDBNavbarNav>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    
    );
  }
}

export default NavBar;