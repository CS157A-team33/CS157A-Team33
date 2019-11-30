import React, { Component } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardTitle,
  MDBCardBody
} from "mdbreact";
import "./movieInfo.css";

import NavBarWithSearch from "../components/NavBarWithSearch";

class MovieInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: [],
      actors: [],
      actorString: "",
      tvSeries: [],
      movies: []
    };
  }

  componentWillMount() {
    this.getContentUnionMovie();
    this.getContentUnionTvSeries();
    this.getActors();
  }

  getContentUnionMovie = async _ => {
    await fetch(
      `http://localhost:4040/getContentUnionMovie?contentname=${this.props.location.state.contentname}&releaseyear=${this.props.location.state.releaseyear}`
    )
      .then(res => res.json())
      .then(res => {
        this.setState({ movies: res.data });
      })
      .catch(err => console.error(err));
    console.log(this.state.movies);
  };

  getActors = async _ => {
    await fetch(
      `http://localhost:4040/getActors?contentname=${this.props.location.state.contentname}&releaseyear=${this.props.location.state.releaseyear}`
    )
      .then(res => res.json())
      .then(res => {
        this.setState({ actors: res.data });
      })
      .catch(err => console.error(err));
    for (var i = 0; i < this.state.actors.length; i++) {
      if (this.state.actorString === "") {
        this.setState({ actorString: this.state.actors[i].actorname });
      } else {
        this.setState({
          actorString:
            this.state.actorString + ", " + this.state.actors[i].actorname
        });
      }
    }
  };

  getContentUnionTvSeries = async _ => {
    await fetch(
      `http://localhost:4040/getContentUnionTvSeries?contentname=${this.props.location.state.contentname}&releaseyear=${this.props.location.state.releaseyear}`
    )
      .then(res => res.json())
      .then(res => {
        this.setState({ tvSeries: res.data });
      })
      .catch(err => console.error(err));
    console.log(this.state.tvseries);
  };

<<<<<<< HEAD
  renderMovie = ({
    contentname,
    releaseyear,
    contentgenre,
    studioname,
    poster,
    movie_length,
    directorname,
    description
  }) => {
    return (
      <div
        style={{
          height: "100vh",
          backgroundImage: `url(${poster})`,
          WebkitBackgroundSize: "cover",
          MozBackgroundSize: "cover",
          backgroundBlendMode: "luminosity"
        }}
      >
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
                  position: "absolute"
                }}
              >
                <MDBCardBody>
                  <div className="col">
                    <img
                      className="card-img"
                      src={poster}
                      style={{
                        width: "19rem",
                        height: "27rem",
                        marginTop: "5rem",
                        position: "absolute"
                      }}
                    ></img>
                    <MDBCard
                      style={{
                        background: "rgba(-1, -1, -1, 0.8)",
                        float: "center",
                        marginLeft: "21rem",
                        marginRight: "5rem",
                        marginTop: "1.5rem",
                        width: "28rem",
                        height: "35rem",
                        position: "absolute"
                      }}
                    >
                      <MDBCardTitle
                        style={{
                          textAlign: "center",
                          marginTop: "1rem",
                          fontWeight: "bold",
                          fontFamily: "Open Sans",
                          color: "rgba(180, 75, 50)"
                        }}
                      >
                        {contentname} ({releaseyear})
                      </MDBCardTitle>
                      <MDBCardTitle
                        style={{
                          textAlign: "left",
                          marginLeft: "1rem",
                          fontFamily: "Open Sans",
                          color: "LightSeaGreen"
                        }}
                      >
                        <MDBCardBody
                          style={{ color: "White", fontSize: "13px" }}
                        >
                          <h6 style={{ color: "SkyBlue", fontSize: "20px" }}>
                            Detail{" "}
                          </h6>
                          {description}
                          {/* </MDBCardBody>
                                                <MDBCardBody style={{color: "White", fontSize: "15px"}}> */}
                          <h6
                            style={{
                              color: "SkyBlue",
                              fontSize: "20px",
                              marginTop: "1rem"
                            }}
                          >
                            Genre{" "}
                          </h6>
                          {contentgenre}
                          {/* </MDBCardBody>
                                                <MDBCardBody style={{color: "White", fontSize: "15px"}}> */}
                          <h6
                            style={{
                              color: "SkyBlue",
                              fontSize: "20px",
                              marginTop: "1rem"
                            }}
                          >
                            Studio{" "}
                          </h6>
                          {studioname}
                          {/* </MDBCardBody>
                                                <MDBCardBody style={{color: "White", fontSize: "15px"}}> */}
                          <h6
                            style={{
                              color: "SkyBlue",
                              fontSize: "20px",
                              marginTop: "1rem"
                            }}
                          >
                            Length{" "}
                          </h6>
                          {movie_length} Minutes
                          {/* </MDBCardBody>
                                                <MDBCardBody style={{color: "White", fontSize: "15px"}}> */}
                          <h6
                            style={{
                              color: "SkyBlue",
                              fontSize: "20px",
                              marginTop: "1rem"
                            }}
                          >
                            Director{" "}
                          </h6>
                          {directorname}
                          <h6
                            style={{
                              color: "SkyBlue",
                              fontSize: "20px",
                              marginTop: "1rem"
                            }}
                          >
                            Actors{" "}
                          </h6>
                          {this.state.actorString}
                        </MDBCardBody>
                      </MDBCardTitle>
                    </MDBCard>
                  </div>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    );
  };

  renderTvSeries = ({
    contentname,
    releaseyear,
    contentgenre,
    studioname,
    poster,
    no_of_episodes,
    directorname,
    description
  }) => {
    return (
      <div
        style={{
          height: "100vh",
          backgroundImage: `url(${poster})`,
          WebkitBackgroundSize: "cover",
          MozBackgroundSize: "cover",
          backgroundBlendMode: "luminosity"
        }}
      >
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
                  position: "absolute"
                }}
              >
                <MDBCardBody>
                  <div className="col">
                    <img
                      className="card-img"
                      src={poster}
                      style={{
                        width: "19rem",
                        height: "27rem",
                        marginTop: "5rem",
                        position: "absolute"
                      }}
                    ></img>
                    <MDBCard
                      style={{
                        background: "rgba(-1, -1, -1, 0.8)",
                        float: "center",
                        marginLeft: "21rem",
                        marginRight: "5rem",
                        marginTop: "1.5rem",
                        width: "28rem",
                        height: "35rem",
                        position: "absolute"
                      }}
                    >
                      <MDBCardTitle
                        style={{
                          textAlign: "center",
                          marginTop: "1rem",
                          fontWeight: "bold",
                          fontFamily: "Open Sans",
                          color: "rgba(180, 75, 50)"
                        }}
                      >
                        {contentname} ({releaseyear})
                      </MDBCardTitle>
                      <MDBCardTitle
                        style={{
                          textAlign: "left",
                          marginLeft: "1rem",
                          fontFamily: "Open Sans",
                          color: "LightSeaGreen"
                        }}
                      >
                        <MDBCardBody
                          style={{ color: "White", fontSize: "13px" }}
                        >
                          <h6 style={{ color: "SkyBlue", fontSize: "20px" }}>
                            Detail{" "}
                          </h6>
                          {description}
                          {/* </MDBCardBody>
=======
    renderMovie = ({
        contentname,
        releaseyear,
        contentgenre,
        studioname,
        poster,
        movie_length,
        directorname,
        description
       
    }) => {
        return (
            
            <div style={{height:"100vh",backgroundImage: `url(${poster})`, 
            WebkitBackgroundSize: "cover", MozBackgroundSize: "cover" , backgroundBlendMode: "luminosity"}}>
                <MDBContainer>
                    <MDBRow>
                        <MDBCol md="6">
                            <MDBCard style={{background: "rgba(-1, -1, -1, 0.8)", marginLeft: "10rem", marginRight: "5rem",
                                marginTop: "30px", width: "150%", height: "90vh", position:"absolute"}}>
                                <MDBCardBody >
                                    <div className="col">
                                        <img className="card-img" src={poster} style={{width: "19rem", height: "27rem",
                                            marginTop: "5rem", position: "absolute"}} >
                                        </img>
                                        <MDBCard style={{background: "rgba(-1, -1, -1, 0.8)", float:"center",
                                            marginLeft: "21rem", marginRight: "5rem", marginTop: "1.5rem", width: "28rem", height: "35rem", position:"absolute"}}>
                                            <MDBCardTitle style={{textAlign: "center", marginTop: "1rem",fontWeight:"bold",
                                             fontFamily: 'Tahoma', color: 'White', fontSize:"30px"}}>
                                                    {contentname} ({releaseyear})
                                            </MDBCardTitle>
                                            <MDBCardTitle style={{textAlign: "left", marginLeft: "1rem", fontFamily: 'Open Sans', color:"LightSeaGreen"}}>   
                                                <MDBCardBody style={{color: "White", fontSize: "13px"}}>
                                                <h6 style={{color: "SkyBlue", fontSize: "20px"}}>Detail </h6>
                                                     {description}
                                              
                                                <h6 style={{color: "SkyBlue", fontSize: "20px", marginTop: "1rem"}}>Genre </h6>
                                                    {contentgenre}
                                               
                                                <h6 style={{color: "SkyBlue", fontSize: "20px",marginTop: "1rem"}}>Studio </h6>
                                                    {studioname}
                                          
                                                <h6 style={{color: "SkyBlue", fontSize: "20px",marginTop: "1rem"}}>Length </h6>
                                                    {movie_length} Minutes
                                
                                                <h6 style={{color: "SkyBlue", fontSize: "20px",marginTop: "1rem"}}>Director </h6>
                                                    {directorname}
                                                <h6 style={{color: "SkyBlue", fontSize: "20px",marginTop: "1rem"}}>Actors </h6>
                                                    {this.state.actorString}
                                                </MDBCardBody>
                                            </MDBCardTitle>
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


    renderTvSeries = ({
        contentname,
        releaseyear,
        contentgenre,
        studioname,
        poster,
        no_of_episodes,
        directorname,
        description
       
    }) => {
        return (
            
            <div style={{height:"100vh",backgroundImage: `url(${poster})`, 
            WebkitBackgroundSize: "cover", MozBackgroundSize: "cover" , backgroundBlendMode: "luminosity"}}>
                <MDBContainer>
                    <MDBRow>
                        <MDBCol md="6">
                            <MDBCard style={{background: "rgba(-1, -1, -1, 0.8)", marginLeft: "10rem", marginRight: "5rem",
                                marginTop: "30px", width: "150%", height: "90vh", position:"absolute"}}>
                                <MDBCardBody >
                                    <div className="col">
                                        <img className="card-img" src={poster} style={{width: "19rem", height: "27rem",
                                            marginTop: "5rem", position: "absolute"}} >
                                        </img>
                                        <MDBCard style={{background: "rgba(-1, -1, -1, 0.8)", float:"center",
                                            marginLeft: "21rem", marginRight: "5rem", marginTop: "1.5rem", width: "28rem", height: "35rem", position:"absolute"}}>
                                            <MDBCardTitle style={{textAlign: "center", marginTop: "1rem",fontWeight:"bold",
                                             fontFamily: 'Tahoma', color: 'White', fontSize:"30px"}}>
                                                    {contentname} ({releaseyear})
                                            </MDBCardTitle>
                                            <MDBCardTitle style={{textAlign: "left", marginLeft: "1rem", fontFamily: 'Open Sans', color:"LightSeaGreen"}}>   
                                                <MDBCardBody style={{color: "White", fontSize: "13px"}}>
                                                <h6 style={{color: "SkyBlue", fontSize: "20px"}}>Detail </h6>
                                                     {description}
                                                {/* </MDBCardBody>
>>>>>>> 3ae2d776c61d1badca19a79a8629778c3b3b26d3
                                                <MDBCardBody style={{color: "White", fontSize: "15px"}}> */}
                          <h6
                            style={{
                              color: "SkyBlue",
                              fontSize: "20px",
                              marginTop: "1rem"
                            }}
                          >
                            Genre{" "}
                          </h6>
                          {contentgenre}
                          {/* </MDBCardBody>
                                                <MDBCardBody style={{color: "White", fontSize: "15px"}}> */}
                          <h6
                            style={{
                              color: "SkyBlue",
                              fontSize: "20px",
                              marginTop: "1rem"
                            }}
                          >
                            Studio{" "}
                          </h6>
                          {studioname}
                          {/* </MDBCardBody>
                                                <MDBCardBody style={{color: "White", fontSize: "15px"}}> */}
                          <h6
                            style={{
                              color: "SkyBlue",
                              fontSize: "20px",
                              marginTop: "1rem"
                            }}
                          >
                            Episodes{" "}
                          </h6>
                          {no_of_episodes}
                          {/* </MDBCardBody>
                                                <MDBCardBody style={{color: "White", fontSize: "15px"}}> */}
                          <h6
                            style={{
                              color: "SkyBlue",
                              fontSize: "20px",
                              marginTop: "1rem"
                            }}
                          >
                            Director{" "}
                          </h6>
                          {directorname}
                          <h6
                            style={{
                              color: "SkyBlue",
                              fontSize: "20px",
                              marginTop: "1rem"
                            }}
                          >
                            Actors{" "}
                          </h6>
                          {this.state.actorString}
                        </MDBCardBody>
                      </MDBCardTitle>
                    </MDBCard>
                  </div>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    );
  };

  render() {
    console.log(this.state.tvSeries);
    if (this.state.movies && this.state.movies.length > 0) {
      return (
        <div>
          <NavBarWithSearch useremail={this.props.useremail} />
          {this.state.movies.map(this.renderMovie)}
        </div>
      );
    } else {
      return (
        <div>
          <NavBarWithSearch useremail={this.props.useremail} />
          {this.state.tvSeries.map(this.renderTvSeries)}
        </div>
      );
    }
  }
}
export default MovieInfo;
