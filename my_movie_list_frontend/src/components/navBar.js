import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse,
  MDBDropdown, MDBDropdownToggle, MDBBtn, MDBBtnGroup, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";
import { BrowserRouter as Router,Link, Redirect } from 'react-router-dom';
import {
  Form,
  FormControl,
} from "react-bootstrap";
import UserAuth from "../userauth";


class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      useremail: '',
      isOpen: false,
      searchText: "",
      user_friend: []
    };
  }

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

componentWillMount() {
  this.setState({useremail: this.props.useremail})
  this.getFriend();
  
}

getFriend = async _ => {
  await fetch(
    `http://localhost:4040/getFriend?email=${this.props.useremail}`
  )
    .then(res => res.json())
    .then(res => {
      this.setState({ user_friend: res.data });
    })
    .catch(err => console.error(err));

};

renderFriend = ( {friend_email}) => {
return <MDBDropdownItem>
        <MDBNavLink style={{color: 'black'}} to={{ pathname: "/friendprofile", 
        state: { useremail:this.state.useremail , friendemail: friend_email} }}>
            {friend_email}
        </MDBNavLink>
        <MDBDropdownItem divider />
        </MDBDropdownItem>
        
};

handleSearchInput(e) {
  this.setState({
    searchText: e.target.value
  });
}

handleAddFriend = _ => {
  fetch(
    `http://localhost:4040/addFriend?email=${this.state.useremail}&friend_email=${this.state.searchText}`
  ).catch(err => console.err(err));
  this.setState({ searchText: "" });
};


render() {
  return (
      <MDBNavbar color="black" dark expand="md">
        <MDBNavbarBrand>
          <strong  style={{color:'orange', fontFamily:'Helvetica', fontWeight: 'bold', fontSize:'25px'}}>
           My Movie List
          </strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>
            <MDBNavItem>
            <MDBNavLink to={{ pathname: "/home", state: { useremail: this.state.useremail } }} style={{fontSize:'17px', fontWeight:'bold'}}>
              Home
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to={{ pathname: "/home", state: { useremail:this.state.useremail } }} style={{fontSize:'17px', fontWeight:'bold'}}>
              Movie
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
            <MDBNavLink to={{ pathname: "/home", state: { useremail:this.state.useremail } }} style={{fontSize:'17px', fontWeight:'bold'}}>
              TV Show
              </MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
          
          <Form inline>
            <FormControl
              onChange={this.handleSearchInput.bind(this)}
              value={this.state.searchText}
              type="text"
              placeholder="@Search Friend's Email"
              className="mr-sm-2"
              style={{borderRadius:"20px"}}
            />
            
          </Form>
          <input className='inline' type="image"src = "https://icons-for-free.com/iconfiles/png/512/user+add+new+plus+icon-1320196240269097543.png" width='3%'onClick={this.handleAddFriend}/>

          
          <MDBNavbarNav right >
          <MDBDropdown>
            <MDBDropdownToggle caret color="primary" style={{borderRadius: "20px"}} >
            <img height='45rem' style={{marginTop: '-10px', marginBottom: '-10px', marginLeft: '-30px'}}
                 src="https://cdn3.iconfinder.com/data/icons/contact-caramel-vol-1/512/ADD_CONTACT-512.png"/>
            </MDBDropdownToggle>
              <MDBDropdownMenu color="danger">
                {this.state.user_friend.map(this.renderFriend)}
              </MDBDropdownMenu>
            </MDBDropdown>


          <MDBNavItem>
            <MDBNavLink style={{marginTop: '0.2rem'}} to="/Settings">
                 <img height='45rem'
                 src="https://www.ifarm.ie/wp-content/uploads/2015/09/settings-icon-orange.png"/>
            </MDBNavLink>
          </MDBNavItem> 

          <MDBNavItem>
            <MDBNavLink to={{ pathname: "/profile", state: { useremail:this.state.useremail, friendemail: this.state.useremail } }}
            style={{marginTop: '0.5rem'}}>
                <img height='48rem' style={{marginTop:'-6px'}}
                src="https://icons-for-free.com/iconfiles/png/512/human+male+profile+user+icon-1320196240448793481.png"/>
            </MDBNavLink>
          </MDBNavItem>

          <MDBNavItem>
            <MDBNavLink style={{marginTop: '0.5rem'}} to="/" >
                <img height='42rem' style={{marginTop: '-4px'}}
                src="https://www.shareicon.net/data/2016/09/05/825104_arrows_512x512.png"/>
            </MDBNavLink>
          </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    );
  }

  home= e => {
    console.log(e.target.id);
    return (
      <Link to={{
            pathname: "/home",
            state: { useremail:e.target.id }
      }}/>
    );
  };

  logout(){
    return <Redirect to={{pathname: '/'}} />;
  }
}

export default NavBar;