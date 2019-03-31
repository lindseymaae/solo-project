import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';

const Nav = (props) => (
  <div className="nav">
    <Link to="/home">
      <h2 className="nav-title">HopeShelf</h2>
    </Link>
    <div className="nav-right">
        {/* Show this link if they are logged in or not,
        but call this link 'Home' if they are logged in,
        and call this link 'Login / Register' if they are not */}
        <Link className="nav-link"
        to="/login">Login</Link>
      
      {/* Show the link to the add new item page and the logout button if the user is logged in */}
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
