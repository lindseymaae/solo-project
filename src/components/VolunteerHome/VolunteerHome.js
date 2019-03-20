import React from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import { Link } from 'react-router-dom';
import './VolunteerHome.css';

//Home page for volunteers 
const VolunteerPage = (props) => (
    <div>
        <h1 id="welcome">
            Welcome, {props.user.username}!
        </h1>
        <h2> What would you like to do? </h2>

        <Link className="home-link" to="/delete-item">
            Delete Item
        </Link>

        <Link className="home-link" to="/add-new-item">
            Add New Item
        </Link>
        <Link className="home-link" to="/inventory"> Inventory </Link>

        <LogOutButton className="log-in" />

    </div>
);


const mapStateToProps = state => ({
    user: state.user,
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(VolunteerPage);
