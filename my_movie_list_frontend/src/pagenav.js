import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import LogIn from './LogIn/login'
import SignUp from './SignUp/signup'
import Home from './Home/home'
import Review from './Review/review'
import MovieInfo from './MoveInfo/movieInfo'
import Profile from './Profile/Profile'
import Settings from './Settings/Settings';
import FriendProfile from './friendprofile/friendprofile';
import Movie from './Movie/movie'
import TvSeries from './TvSeries/tvseries';

class PageNav extends Component{
    render(){
        return (
            <BrowserRouter>
                <Switch>
                    <Route path = "/" exact component = {LogIn}/>
                    <Route path = "/SignUp" exact component = {SignUp}/>
                    <Route path = "/Profile" exact component = {Profile}/>
                    <Route path = "/home" exact component = {Home}/>
                    <Route path = "/review" exact component = {Review}/>
                    <Route path = "/movieInfo" exact component = {MovieInfo}/>
                    <Route path = "/Settings" exact component = {Settings}/>
                    <Route path = "/friendprofile" exact component = {FriendProfile}/>
                    <Route path = "/movie" exact component = {Movie}></Route>
                    <Route path = "/tvseries" exact component = {TvSeries}></Route>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default PageNav;
