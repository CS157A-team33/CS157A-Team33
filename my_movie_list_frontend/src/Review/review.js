import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBIcon, MDBBtn, MDBCard, MDBCardBody, MDBBtnToolbar } from 'mdbreact';
import './review.css';

class Review extends Component{
    constructor(props){
        super(props);
        this.state={
            icon: String,
            tooltip: String,
            choosed: Boolean,
            content:{
                review: "",
                rating: undefined
            },
            qResult: []
        }
    }

   

    render(){
        
        return(
            <div style={{height:"100vh",backgroundImage: `url(${this.props.poster})`, 
            WebkitBackgroundSize: "cover", MozBackgroundSize: "cover"}}>
                <MDBContainer>
                    <MDBRow>
                        <MDBCol md="6">
                            <MDBCard>
                                <MDBCardBody>
                                    <form>
                                        <p className="h4 text-center py-4">Review: {this.props.location.state.contentname} </p>
                                        <label htmlFor="defaultFormCardNameEx" className="grey-text font-weight-light"> 
                                            Rating
                                        </label>
                                        <input type="text" id="defaultFormCardNameEx" className="form-control"/>
                                        <br />
                                        <label htmlFor="defaultFormCardEmailEx"className="grey-text font-weight-light">
                                            Review
                                        </label>
                                        <input type="email" id="defaultFormCardEmailEx" className="form-control"/>
                <div className="text-center py-4 mt-3">
                  <MDBBtn className="btn" type="submit" style={{borderRadius: "10%", textAlign: "center"}}>
                    +
                  </MDBBtn>
                </div>
              </form>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
            </div>
        )
    }
}
export default Review;