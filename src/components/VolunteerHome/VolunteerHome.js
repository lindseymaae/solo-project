import React from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import { Link } from 'react-router-dom';

//Home page for volunteers 
const VolunteerPage = (props) => (
    <div>
        <div className="home-header">
            <h1 id="welcome">
                Welcome, {props.user.username}!
        </h1>
            <h2> What would you like to do? </h2>
        </div>
        <div className="volunteer-home-div">
            <ul className="home-list">
                <li>
                    <Link className="home-link" to="/delete-item">
                        Delete Item</Link>
                </li>
                <li>
                    <Link className="home-link" to="/add-new-item">
                        Add New Item</Link>
                </li>
                <li>
                    <Link className="home-link" to="/inventory"> Inventory </Link>
                </li>
            </ul>
        </div>
    </div>
);


const mapStateToProps = state => ({
    user: state.user,
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(VolunteerPage);
