import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import heroImage from '../App/HopeShelf.png';
import './Nav.css';

const Nav = (props) => (

  <div className="nav">
    <Link to="/home">
    <img src={heroImage} alt="nav"></img>
    </Link>
    
    <Link to="/login" className="nav-link">Login</Link>

    <div className="nav-right">
          {props.user.id && (
        <>
        
          <Link className="nav-link" to="/volunteer-home">
          Home</Link>
          <Link className="nav-link" to="/add-new-item">
            Add New Item
          </Link>
          <Link className="nav-link" to="/delete-item">
            Delete Item
      </Link>
          <Link className="nav-link" to="/inventory"> Inventory </Link>
          <Link className="nav-link" to="/wishlist"> Build A Wish List </Link>
          <Link className="nav-link" to="/seeNeeds"> View Community Wish Lists</Link>

          {/* Always show this link since the about page is not protected */}
          <LogOutButton className="nav-link" />
        </>
      )}
      

    </div>
  </div>
);

// Instead of taking everything from state, we just want the user
// object to determine if they are logged in
// if they are logged in, we show them a few more links 
// if you wanted you could write this code like this:
// const mapStateToProps = ({ user }) => ({ user });
const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps)(Nav);
