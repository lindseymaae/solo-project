import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import { connect } from 'react-redux';
import Nav from '../Nav/Nav';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'

import VolunteerHome from '../VolunteerHome/VolunteerHome';
import Home from '../Home/Home'
import AddNewItem from '../AddNewItem/AddNewItem'
import WishList from '../WishList/WishList'
import SeeNeeds from '../SeeNeeds/SeeNeeds'
import LoginPage from '../LoginPage/LoginPage';
import DeleteItem from '../DeleteItem/DeleteItem';
import Inventory from '../Inventory/Inventory';

import './App.css';
 import image from '../App/picture.jpg'
import RegisterPage from '../RegisterPage/RegisterPage';



class App extends Component {
  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_USER' })
  }

  render() {
    return (
      <Router>
        <div>
          <Nav />
          <img src={image} alt="header" className="header-image" width="100%" height="450px"/>
          <Switch>
            {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
            <Redirect exact from="/" to="/home" />
            <Route exact path='/home'
              component={Home} />
          <Route exact path = '/login' component={LoginPage} />
             <Route
              exact
              path="/add-new-item"
              component={AddNewItem}
            />
            {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/home will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the 'Login' or 'Register' page.
            Even though it seems like they are different pages, the user is always on localhost:3000/home */}
            <ProtectedRoute
              exact
              path="/volunteer-home"
              component={VolunteerHome}
            />
            <ProtectedRoute exact path='/delete-item'
              component={DeleteItem} />
            <ProtectedRoute
              exact path='/inventory'
              component={Inventory} />
            <ProtectedRoute
              exact path='/wishlist'
              component={WishList} />
            <ProtectedRoute
              exact path='/seeNeeds'
              component={SeeNeeds} />
              <Route 
              exact path = '/register'
              component = {RegisterPage} />
            <Route render={() => <h1>404</h1>} />
          </Switch>

        </div>
      </Router>
    )
  }
}

export default connect()(App);
