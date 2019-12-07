import React, { Component } from "react";
import "./profile.css";
import NavBar from "../components/navBar"
import Typography from '@material-ui/core/Typography';
import Popper from '@material-ui/core/Popper';
import PopupState, { bindToggle, bindPopper } from 'material-ui-popup-state';
import Fade from '@material-ui/core/Fade';
import Paper from '@material-ui/core/Paper'
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBInput, MDBCardTitle, MDBCardText, MDBCol,MDBContainer,MDBPopover, MDBPopoverBody, MDBPopoverHeader } from 'mdbreact';


class Profile extends Component {
    constructor(props){
        super(props);
        this.state ={
            useremail:'',
            reviewList: [],
            review:'',
            rating: undefined,
        }
    }

    componentWillMount(){
        console.log(this.props.location.state.useremail)
        this.setState({useremail: this.props.location.state.useremail});
        this.getReview();
    }

    getReview = async _=> {
       await fetch(`http://localhost:4040/getReview?email=${this.props.location.state.useremail}`)
        .then(res => res.json())
        .then(res => {
            this.setState({ reviewList: res.data});
        })
        .catch(err => console.error(err));
    };


     deleteReview(array){
     
        fetch(`http://localhost:4040/deleteReview?email=${this.state.useremail}&contentname=${array[0]}&releaseyear=${array[1]}`)
        .then(res => res.json())
        .catch(err => console.error(err));
        console.log(this.state.useremail + "This is username");
        this.getReview();
     };

     updateReview(array){
         console.log(array[0]);
         console.log(this.state.useremail)
         console.log(this.state.review)
         console.log(this.state.rating)
         fetch(`http://localhost:4040/updateReview?email=${this.state.useremail}&contentname=${array[0]}&releaseyear=${array[1]}&review=${this.state.review}&rating=${this.state.rating}`)
         .then(res => res.json())
         .catch(err => console.error(err));
         this.getReview();

         
     }


    reviewRender= ({
        contentname,
        releaseyear,
        poster,
        review,
        rating
    }) => {
        
        var id = [];
        id.push(contentname);
        id.push(releaseyear);
        var stars = [];
        for(let i =0; i<10; i++){
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
            <div className="d-inline-block" style={{float: "left", marginTop: "20px"}} key={id}>
                <MDBCol >
                    <MDBContainer>
                        <MDBCard style={{ width: "19rem" , height: "35rem", background: "rgba(1,1,1, 0.05)"}}>
                            <MDBCardImage className="img-fluid" src={poster} waves/>
                            <MDBCardBody>
                            <MDBCardTitle>{contentname}{' ('}{releaseyear}{')'}</MDBCardTitle>
                                <MDBCardText >{review}</MDBCardText>
                                    
                                <MDBCardText >{stars}</MDBCardText>   
                                {console.log(contentname + releaseyear)}
                                <MDBBtn type="submit" onClick={this.deleteReview.bind(this,id)}
                                            outline
                                            color="red"
                                            style={{float: 'left',borderRadius: "20px",fontSize: "13px"}}>
                                            Delete
                                </MDBBtn>
                                <PopupState variant="popper" popupId="demo-popup-popper">
                                    {popupState => (
                                        <div>
                                            <MDBBtn type="button" 
                                                outline
                                                color="blue"
                                                style={{float: 'right',borderRadius: "20px",fontSize: "13px"}} {...bindToggle(popupState)}>
                                                Edit
                                            </MDBBtn>
                                            <Popper {...bindPopper(popupState)} transition>
                                                {({ TransitionProps }) => (
                                                <Fade {...TransitionProps} timeout={350}>
                                                    <Paper style={{height: '20.5rem', borderRadius:'20px'}}>
                                                       
                                                            <label className="input-group-text" for="inputGroupSelect01" 
                                                                style={{ position: 'fixed',right: '40%',width: "7rem",
                                                                    height: "2rem",borderRadius: "20px",top:'8%'}}>
                                                                Rating
                                                            </label>
                                                            <select onChange={i =>this.setState({rating: i.target.value })}
                                                                className="custom-select" style={{borderRadius: "20px", width: "4rem",
                                                                height: "2rem", position: 'fixed',left: '50%', top:'8%'}}>
                                                                <option value="0">0</option>
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
                                                                {console.log(this.state.rating)}
                                                            </select>

                                                            <div className="progress" style={{borderRadius: "2rem", width: "20rem",
                                                            height: "1.3rem", position:'fixed', top:'20%',left:'10%'}}>
                                                                <div
                                                                    className="progress-bar"
                                                                    role="progress-bar"
                                                                    style={{ width: `${this.state.rating * 10}%`}}>
                                                                    {this.state.rating}
                                                                </div>
                                                            </div>
                                                            <div style={{width: "25rem"}}>
                                                                <MDBCardBody style={{width:'25rem', height:'10rem', position:'fixed', top:'30%'}}>
                                                                    <form>
                                                                        <div className="grey-text">
                                                                            <MDBInput onChange={i => this.setState({review: i.target.value})}
                                                                                style={{ height: "10px", color: "black", top:'60%'}}
                                                                                valueDefault={review}
                                                                                type="textarea" rows="2" label="Your Review" icon="pencil-alt"/>
                                                                                {console.log(this.state.review)}
                                                                        </div>
                                                                        <div className="text-center py-4 mt-3">
                                                                            <MDBBtn color="blue" type="button" style={{borderRadius: "50px"}}
                                                                                onClick={this.updateReview.bind(this,id)}>
                                                                               
                                                                                {" "}Submit Review{" "}
                                                                                
                                                                            </MDBBtn>
                                                                        </div>
                                                                    </form>
                                                                </MDBCardBody>
                                                            </div>
                                                    </Paper>
                                                </Fade>
                                                )}
                                            </Popper>
                                        </div>
                                    )}
                                </PopupState>
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
            </div>
    }
}

export default Profile;