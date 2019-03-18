import React from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';

//Home page for volunteers 
const AddNewItem = (props) => (
    <div>
        <h1 id="welcome">
           Add New Item
        </h1>
        
        {/* there will be inputs/ a drop down here for volunteers to enter items into inventory */}

        <LogOutButton className="log-in" />
    </div>
);


const mapStateToProps = state => ({
    user: state.user,
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(AddNewItem);
