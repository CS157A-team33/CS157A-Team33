import React, { Component } from 'react';
import './home.css';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol,MDBContainer } from 'mdbreact';
import {Redirect} from 'react-router-dom'


class Home extends Component{
    constructor(props){
        super(props);
        this.state ={
            addList: false,
            e: undefined,
            content: [],
            tvSeries: [],
            movies: [],
            dbcontent: [],
            dbtvshows: [],
            dbmovies: []
        }
    }


    componentWillMount(){
        this.getContent();
        this.getTvSeries();
        this.getMovies();
    }

    getContent = () =>{
        fetch('http://localhost:4040/content')
        .then(res => res.json())
        .then(res => {
            this.setState({ content: res.data});
        })
        .catch(err => console.error(err));
    };

    getTvSeries = () =>{
        fetch('http://localhost:4040/tvseries')
        .then(res => res.json())
        .then(res => {
            this.setState({ tvSeries: res.data});
        })
        .catch(err => console.error(err));
    };

    getMovies = () =>{
        fetch('http://localhost:4040/movies')
        .then(res => res.json())
        .then(res => {
            this.setState({ movies: res.data});
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
      var id= [];
      id.push(contentname);
      id.push(releaseyear);
      id.push(poster);
      
        return <div className="d-inline-block" style={{float: "left", marginTop: "20px"}}>
            
            <MDBCol>
            <MDBContainer fluid >
                    <MDBCard style={{ width: "19rem" , height: "35rem"}}>
                    <MDBCardImage className="img-fluid" src={poster} waves/>
                    <MDBCardBody>
                        <MDBCardTitle>{contentname}</MDBCardTitle>
                        <MDBCardText>{description}</MDBCardText>
                        <MDBBtn id ={id} type="submit" outline color="primary" onClick={this.addToList}>Add To List</MDBBtn>
                    </MDBCardBody>
                    </MDBCard>
            </MDBContainer>
            </MDBCol>
        </div>
    }

    addToList = (e)=>{
        var idArray = e.target.id.split(',');
        
        this.setState({e: idArray});
        
        this.setState({addToList: true});
    }

    render(){
        if(this.state.addToList === true){
            console.log(this.state.e);
            return <Redirect to={{
                pathname: '/review', state: {contentname: this.state.e[0], 
                    releaseyear: this.state.e[1], poster: this.state.e[2]}}} />
        }
        else{
            return <div>
            {this.state.content.map(this.renderContent)}
            </div>
        }
        
    }
}
export default Home;