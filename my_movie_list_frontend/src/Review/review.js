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
import UserAuth from "../userauth";
import NavBar from "../components/navBar";
import NavBarWithSearch from "../components/NavBarWithSearch";

class Review extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: {
        review: "",
        rating: undefined
      }
    };
  }

  review = _ => {
    fetch(
      `http://localhost:4040/addReview?email=${UserAuth.getEmail()}&contentname=${
        this.props.location.state.contentname
      }&releaseyear=${this.props.location.state.releaseyear}&review=${
        this.state.content.review
      }&rating=${this.state.content.rating}`
    ).catch(err => console.err(err));
    this.setState({ redirect: true });
  };

  render() {
    if (this.state.redirect) {
      return <Redirect push to="/home"></Redirect>;
    }
    const { content } = this.state;
    console.log(UserAuth.getAuth());
    console.log(UserAuth.getEmail());
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
        <NavBarWithSearch useremail={this.props.useremail} />
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
                  height: "90vh",
                  position: "fized"
                }}
              >
                <MDBCardBody>
                  <div className="col">
                    <img
                      className="card-img"
                      src={this.props.location.state.poster}
                      style={{
                        width: "18rem",
                        height: "25rem",
                        marginLeft: "1rem",
                        marginTop: "3rem",
                        position: "absolute"
                      }}
                    ></img>

                    <label
                      class="input-group-text"
                      for="inputGroupSelect01"
                      style={{
                        width: "6rem",
                        height: "2rem",
                        position: "absolute",
                        marginLeft: "29.5rem",
                        marginTop: "7.5rem"
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
                        marginLeft: "21.5rem",
                        width: "24.5rem",
                        height: "1.3rem",
                        position: "absolute",
                        marginTop: "10rem"
                      }}
                    >
                      <div
                        className="progress-bar"
                        role="progressbar"
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
                              onClick={this.review}
                            >
                              {" "}
                              Submit Review{" "}
                            </MDBBtn>
                          </div>
                        </form>
                      </MDBCardBody>
                    </div>

                    <MDBCard
                      style={{
                        background: "rgba(-1, -1, -1, 0.9)",
                        backgroundBlendMode: "luminosity",
                        position: "absolute",
                        marginLeft: "1rem",
                        marginRight: "1rem",
                        marginTop: "30rem",
                        width: "18rem",
                        height: "7rem"
                      }}
                    >
                      <h3
                        style={{
                          float: "center",
                          color: "White",
                          textAlign: "center",
                          marginTop: "1rem",
                          fontWeight: "bold",
                          fontFamily: "Open Sans"
                        }}
                      >
                        {this.props.location.state.contentname}
                      </h3>
                    </MDBCard>
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
