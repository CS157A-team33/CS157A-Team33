import React, { Component } from "react";
import "./login.css";
import { Link, Redirect } from "react-router-dom";
import {
  MDBRow,
  MDBCol,
  MDBInput,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBModalFooter
} from "mdbreact";
import UserAuth from "../userauth";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      qResult: [],
      email: "",
      password: "",
      name: "",
      auth: false,
      user: {
        email: "",
        password: ""
      }
    };
  }

  render() {
    const { user } = this.state;
    if (this.state.auth) {
      //route to dashboard
      return (
        <Redirect
          to={{
            pathname: "/home",
            state: { username: this.state.name }
          }}
        />
      );
    }
    return (
      <div className="bg">
        <MDBRow>
          <MDBCol md="9" lg="7" xl="5" className="mx-auto mt-3">
            <MDBCard style={{ marginTop: "25%" }}>
              <MDBCardBody className="mx-4">
                <div className="text-center">
                  <h3 className="dark-grey-text mb-5">
                    <strong>
                      <img
                        src="https://img.icons8.com/bubbles/2x/tv.png"
                        alt=" "
                        width="10%"
                        height="50%"
                      ></img>
                      My Movie List
                    </strong>
                  </h3>
                </div>
                <MDBInput
                  label="Email"
                  group
                  type="email"
                  validate
                  error="wrong"
                  success="right"
                  onChange={i =>
                    this.setState({ user: { ...user, email: i.target.value } })
                  }
                />
                <MDBInput
                  label="Password"
                  group
                  type="password"
                  validate
                  containerClass="mb-0"
                  onChange={i =>
                    this.setState({
                      user: { ...user, password: i.target.value }
                    })
                  }
                />
                <div className="text-center pt-3 mb-3">
                  <MDBBtn
                    type="button"
                    gradient="blue"
                    rounded
                    className="btn blue-gradient btn-block btn-rounded z-depth-1a waves-effect waves-light"
                    onClick={this.login}
                  >
                    Log in
                  </MDBBtn>
                </div>
              </MDBCardBody>
              <MDBModalFooter className="mx-5 pt-3 mb-1">
                <div
                  className="grey-text d-flex justify-content-end"
                  style={{ fontSize: "0.8rem" }}
                >
                  Not a member?{" "}
                  <Link to="/signup" className="blue-text ml-1">
                    {" "}
                    Sign Up
                  </Link>
                </div>
              </MDBModalFooter>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </div>
    );
  }

  login = async _ => {
    const { user, qResult } = this.state;
    await fetch(`http://localhost:4040/login?email=${user.email}`).then(res =>
      res.json().then(res =>
        this.setState(
          {
            qResult: res.data
          },
          () =>
            this.state.qResult.map(db =>
              this.setState({
                email: db.email,
                password: db.password,
                name: db.username
              })
            )
        )
      )
    );
    if (this.state.password === this.state.user.password) {
      this.setState({ auth: true });
      UserAuth.setName(this.state.name);
      UserAuth.setEmail(this.state.email);
      UserAuth.setAuth(true);
    }
  };
}

export default Login;
