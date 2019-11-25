import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import { MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody} from 'mdbreact';

class SignUp extends Component{

    constructor(props){
        super(props);
        this.state = {
          qResult: [],
          email:'',
          password:'',
          name: '',
          auth: false,
          user:{
            name:'',
            email:'',
            password:''
          }
        }
      }

      signUp = _=>{
        fetch(`http://localhost:4040/signup?email=${this.state.user.email}&password=${this.state.user.password}&username=${this.state.user.name}`)
            .catch(err => console.err(err))
        this.setState({redirect:true});
    }
    render(){
      const {user} = this.state;
      if(this.state.redirect){
        console.log('Successfully logged in')
        return <Redirect push to ="/" />;
      }
      return (
        <div className = "bg">
          <MDBRow>
            <MDBCol md="9" lg="7" xl="5" className="mx-auto mt-3" >
              <MDBCard style = {{ marginTop: '25%'}} >
                <MDBCardBody className="mx-4" >
                  <div className="text-center">
                    <h3 className="dark-grey-text mb-5">
                      <strong> 
                        <img src = "https://img.icons8.com/bubbles/2x/tv.png" alt = " " width="10%" height="50%"/>
                        My Movie List
                      </strong>
                      <h5 className="dark-grey-text mb-3">
                        <strong>
                          Sign Up
                        </strong>
                      </h5>
                    </h3>
                  </div>
                  <MDBInput label="Name" group type="text" validate error="wrong" success="right" onChange={i=> this.setState({user:{...user,name: i.target.value}})} />
                  <MDBInput label="Email" group type="email" validate error="wrong" success="right" onChange={i=> this.setState({user:{...user,email: i.target.value}})} />
                  <MDBInput label="Password" group type="password" validate containerClass="mb-0" onChange={i=> this.setState({user:{...user,password: i.target.value}})}/>
                  <div className="text-center pt-3 mb-3">
                  <MDBBtn type="submit" gradient="blue" rounded className="btn blue-gradient btn-block btn-rounded z-depth-1a waves-effect waves-light" onClick={this.signUp}>Sign Up</MDBBtn>
                  </div>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </div>
      );
    }
}
        
export default SignUp;