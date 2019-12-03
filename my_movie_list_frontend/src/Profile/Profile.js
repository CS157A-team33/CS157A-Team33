import React, { Component } from "react";
import "./Profile.css";
import NavBar from "../components/navBar"
import UserAuth from "../userauth";
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol,MDBContainer } from 'mdbreact';


class Profile extends Component {
    constructor(props){
        super(props);
        this.state ={
            reviewList: []
        }
    }

    componentWillMount(){
        this.getReview();
    }
    getReview = async _=> {
       await fetch(`http://localhost:4040/getReview?email=${UserAuth.getEmail()}`)
        .then(res => res.json())
        .then(res => {
            this.setState({ reviewList: res.data});
        })
        .catch(err => console.error(err));
        console.log(UserAuth.getEmail());
        this.state.reviewList.map(e => {
            console.log(e);
        });
    };



    reviewRender= ({
        contentname,
        releaseyear,
        poster,
        review,
        rating
    }) => {
        return (
            <div className="d-inline-block" style={{float: "left", marginTop: "20px"}}>
                <MDBCol >
                    <MDBContainer>
                            <MDBCard style={{ width: "19rem" , height: "35rem", background: "rgba(1,1,1, 0.05)"}}>
                            <MDBCardImage className="img-fluid" src={poster} waves/>
                            <MDBCardBody>
                                <MDBCardTitle>{contentname}{' '}{releaseyear}</MDBCardTitle>
                                <MDBCardText >{review}</MDBCardText>
                                <MDBCardText >Rating: {rating}</MDBCardText>
                            </MDBCardBody>
                            </MDBCard>
                    </MDBContainer>
                </MDBCol>
            </div>
        )
    }

    render(){
        return <div>
                <NavBar></NavBar>
                {this.state.reviewList.map(this.reviewRender)}
            </div>
    }
}

export default Profile;