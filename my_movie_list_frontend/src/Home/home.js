import React, { Component } from "react";
import "./home.css";

import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBCol,
  MDBContainer
} from "mdbreact";
import { Link, Redirect } from "react-router-dom";
import NavBar from "../components/navBar"

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      useremail:'',
      moreInfo: false,
      addList: false,
      e: undefined,
      content: [],
      tvSeries: [],
      movies: [],
      dbcontent: [],
      dbtvshows: [],
      dbmovies: []
    };
  }

  componentWillMount() {
    this.getContent();
    this.getTvSeries();
    this.getMovies();
    this.setState({useremail: this.props.location.state.useremail});
  }

  getContent = () => {
    fetch(`http://localhost:4040/content`)
      .then(res => res.json())
      .then(res => {
        this.setState({ content: res.data });
      })
      .catch(err => console.error(err));
  };

  getTvSeries = () => {
    fetch(`http://localhost:4040/tvseries`)
      .then(res => res.json())
      .then(res => {
        this.setState({ tvSeries: res.data });
      })
      .catch(err => console.error(err));
  };

  getMovies = () => {
    fetch(`http://localhost:4040/movies`)
      .then(res => res.json())
      .then(res => {
        this.setState({ movies: res.data });
      })
      .catch(err => console.error(err));
  };

  //////////////////Cards of content///////////////////

  renderContent = ({
    contentname,
    releaseyear,
    contentgenre,
    studioname,
    poster,
    description
  }) => {
    var id = [];
    id.push(contentname);
    id.push(releaseyear);
    id.push(poster);
    //   id.push(contentgenre);
    //   id.push(studioname);

    return (
      <div
        className="d-inline-block"
        style={{ float: "left", marginTop: "20px" }}
      >
        <MDBCol>
          <MDBContainer>
            <MDBCard
              style={{
                width: "19rem",
                height: "35rem",
                background: "rgba(1,1,1, 0.05)"
              }}
            >
              <MDBCardImage className="img-fluid" src={poster} waves />
              <MDBCardBody>
                <MDBCardTitle>{contentname}</MDBCardTitle>
                <MDBCardText>{description}</MDBCardText>
                <Link
                  id={id}
                  style={{ fontSize: "19px" }}
                  onClick={this.moreInfo}
                >
                  More Info ⓘ
                </Link>
                <MDBBtn
                  id={id}
                  type="submit"
                  outline
                  color="primary"
                  style={{
                    marginTop: "-0.6rem",
                    float: "right",
                    borderRadius: "20px",
                    fontSize: "10px"
                  }}
                  onClick={this.addToList}
                >
                  🖉
                </MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBContainer>
        </MDBCol>
      </div>
    );
  };

  moreInfo = e => {
    console.log(e.target.id);
    var idArray = e.target.id.split(",");
    this.setState({ e: idArray });
    this.setState({ moreInfo: true });
  };

  addToList = e => {
    console.log(e.target.id);
    var idArray = e.target.id.split(",");

    this.setState({ e: idArray });

    this.setState({ addToList: true });
  };

  render() {
    if (this.state.addToList === true || this.state.moreInfo === true) {
      if (this.state.addToList === true) {
        return (
          <Redirect
            to={{
              pathname: "/review",
              state: {
                useremail: this.props.location.state.useremail,
                contentname: this.state.e[0],
                releaseyear: this.state.e[1],
                poster: this.state.e[2]
              }
            }}
          />
        );
      } else {
        return (
          <Redirect
            to={{
              pathname: "/movieInfo",
              state: {
                useremail: this.state.useremail,
                contentname: this.state.e[0],
                releaseyear: this.state.e[1],
                poster: this.state.e[2]
              }
            }}
          />
        );
      }
    } else {
      return (
        <div>
          {console.log(this.state.useremail)}
          <NavBar useremail= {this.state.useremail}></NavBar>
          {this.state.content.map(this.renderContent)}
        </div>
      );
    }
  }
}
export default Home;
