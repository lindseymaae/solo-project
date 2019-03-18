import React from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';

//Home page for volunteers 
const VolunteerPage = (props) => (
    <div>
        <h1 id="welcome">
            Welcome, {props.user.username}!
        </h1>
        <h2> What would you like to do? </h2>
        {/* will be sourcing in tabs for "add new item", "remove item", and "view inventory" */}
       
        <LogOutButton className="log-in" />
    </div>
);


const mapStateToProps = state => ({
    user: state.user,
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(VolunteerPage);
