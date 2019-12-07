import React, { Component } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBBtnToolbar,
  MDBInput
} from "mdbreact";
import "./review.css";
import { Link, Redirect } from "react-router-dom";

import NavBar from "../components/navBar";

class Review extends Component {
  constructor(props) {
    super(props);
    this.state = {
      useremail:'',
      content: {
        review: "",
        rating: undefined
      }
    };
  }

  componentWillMount(){
    this.setState({useremail: this.props.location.state.useremail});
  }


  review = _ => {
    fetch(
      `http://localhost:4040/addReview?email=${this.props.location.state.useremail}&contentname=${
        this.props.location.state.contentname
      }&releaseyear=${this.props.location.state.releaseyear}&review=${
        this.state.content.review
      }&rating=${this.state.content.rating}`
    ).catch(err => console.err(err));
    this.setState({ redirect: true });
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to={{ pathname: "/home", 
      state: { useremail: this.props.location.state.useremail }}} />;
    }
    const { content } = this.state;
    console.log(this.props.location.state.useremail);
    return (
      <div
        style={{
          height: "100vh",
          backgroundImage: `url(${this.props.location.state.poster})`,
          WebkitBackgroundSize: "cover",
          MozBackgroundSize: "cover",
          backgroundBlendMode: "luminosity"
        }}
      >
        {console.log(this.state.useremail)}
        <NavBar useremail= {this.state.useremail}/>
        
        <MDBContainer>
          <MDBRow>
            <MDBCol md="6">
              <MDBCard
                style={{
                  background: "rgba(-1, -1, -1, 0.8)",
                  marginLeft: "10rem",
                  marginRight: "5rem",
                  marginTop: "30px",
                  width: "150%",
                  height: "85vh"
                }}
              >
                <MDBCardBody>
                  <div className="col">
                    <img
                      className="card-img"
                      src={this.props.location.state.poster}
                      style={{
                        width: "19.5rem",
                        height: "28rem",
                        marginTop: "4rem",
                        position: "absolute"
                      }}
                    ></img>
                    <MDBCard
                      style={{
                        background: "rgba(-1, -1, -1, 0.1)",
                        backgroundBlendMode: "luminosity",
                        position: "absolute",
                        marginLeft: "20rem",
                        marginRight: "1rem",
                        width: "27rem",
                        height: "7rem"
                      }}
                    >
                      <h3
                        style={{
                          textAlign: "center",
                          marginTop: "1rem",
                          fontWeight: "bold",
                          fontFamily: "Tahoma",
                          color: "White",
                          fontSize: "30px"
                        }}
                      >
                        {this.props.location.state.contentname}
                      </h3>
                    </MDBCard>

                    <label
                      className="input-group-text"
                      for="inputGroupSelect01"
                      style={{
                        width: "7rem",
                        height: "2rem",
                        position: "absolute",
                        marginLeft: "29.5rem",
                        marginTop: "7.5rem",
                        borderRadius: "20px"
                      }}
                    >
                      Rating
                    </label>
                    <select
                      onChange={i =>
                        this.setState({
                          content: { ...content, rating: i.target.value }
                        })
                      }
                      className="custom-select"
                      style={{
                        marginLeft: "34.5rem",
                        borderRadius: "20px",
                        width: "4rem",
                        height: "2rem",
                        position: "absolute",
                        marginTop: "7.5rem"
                      }}
                    >
                      <option selected>0</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                      {console.log(this.state.content.rating)}
                    </select>

                    <div
                      className="progress"
                      style={{
                        borderRadius: "2rem",
                        marginLeft: "24.5rem",
                        width: "20rem",
                        height: "1.3rem",
                        position: "absolute",
                        marginTop: "10rem"
                      }}
                    >
                      <div
                        className="progress-bar"
                        role="progress-bar"
                        style={{ width: `${this.state.content.rating * 10}%` }}
                      >
                        {this.state.content.rating}
                      </div>
                    </div>
                    <div
                      style={{
                        position: "absolute",
                        marginLeft: "21.5rem",
                        marginTop: "12rem",
                        width: "25rem"
                      }}
                    >
                      <MDBCardBody style={{ height: "10px" }}>
                        <form>
                          <div className="grey-text">
                            <MDBInput
                              onChange={i =>
                                this.setState({
                                  content: {
                                    ...content,
                                    review: i.target.value
                                  }
                                })
                              }
                              style={{ height: "10px", color: "white" }}
                              type="textarea"
                              rows="2"
                              label="Your Review"
                              icon="pencil-alt"
                            />
                          </div>
                          <div className="text-center py-4 mt-3">
                            <MDBBtn
                              color="blue"
                              type="submit"
                              style={{ borderRadius: "50px" }}
                              onClick={this.review}
                            >
                              {" "}
                              Submit Review{" "}
                            </MDBBtn>
                          </div>
                        </form>
                      </MDBCardBody>
                    </div>
                  </div>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    );
  }
}
export default Review;
