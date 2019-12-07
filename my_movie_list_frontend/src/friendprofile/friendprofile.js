import React, { Component } from "react";
import "./friendprofile.css";
import NavBar from "../components/navBar"
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol,MDBContainer } from 'mdbreact';


class FriendProfile extends Component {
    constructor(props){
        super(props);
        this.state ={
            useremail:'',
            friendemail:'',
            reviewList: []
        }
    }

    componentWillMount(){
        console.log(this.props.location.state.friendemail)
        this.setState({useremail: this.props.location.state.useremail});
        this.setState({friendemail: this.props.location.state.friendemail});
        this.getReview();   
    }

    componentWillReceiveProps(prevProps, prevState)
    {
        if (prevState.friendemail !== this.state.friendemail) {
        console.log("This si will Reciece" + this.props.location.state.friendemail)
        this.setState({useremail: this.props.location.state.useremail});
        this.setState({friendemail: this.props.location.state.friendemail});
        this.getReview();
        }
    }

    getReview = async _=> {
       await fetch(`http://localhost:4040/getReview?email=${this.props.location.state.friendemail}`)
        .then(res => res.json())
        .then(res => {
            this.setState({ reviewList: res.data});
        })
        .catch(err => console.error(err));
        console.log(this.state.friendemail + "This is username");
    };



    reviewRender= ({
        contentname,
        releaseyear,
        poster,
        review,
        rating
        
    }) => {
        var stars = [];
        for(let i=0; i<10;i++){
            if(i<rating)
            {
                stars.push(<p1><img style={{marginRight:'5px',heihgt:'30px', width: '20px'}} src='https://images.emojiterra.com/google/android-10/512px/2b50.png'></img></p1>)
            }
            else
            {
                stars.push(<p1><img style={{margin:'-5px',heihgt:'30px', width: '35px'}} src='https://myrealdomain.com/images/black-star-icon-7.png'></img></p1>)
            }
            
            
        }
        return (
            <div className="d-inline-block" style={{float: "left", marginTop: "20px"}}>
                <MDBCol >
                    <MDBContainer>
                            <MDBCard style={{ width: "19rem" , height: "35rem", background: "rgba(1,1,1, 0.05)"}}>
                            <MDBCardImage className="img-fluid" src={poster} waves/>
                            <MDBCardBody>
                                <MDBCardTitle>{contentname}{' '}{releaseyear}</MDBCardTitle>
                                <MDBCardText >{review}</MDBCardText>
                                <MDBCardText >{stars}</MDBCardText>
                            </MDBCardBody>
                            </MDBCard>
                    </MDBContainer>
                </MDBCol>
            </div>
        )
    }
    render(){
        return <div>
                <NavBar useremail= {this.state.useremail}></NavBar>
                {this.state.reviewList.map(this.reviewRender)}
                {console.log(this.props.location.state.friendemail)}
                
        </div>
    }
    
}

export default FriendProfile;