import React from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';

//Home page for volunteers 
const DeleteItem = () => (
    <div>
        <h1 id="welcome">
            Delete Item
        </h1>

        {/* there will be inputs/ a drop down here for volunteers to remove items from inventory */}

        <LogOutButton className="log-out" />
    </div>
);


const mapStateToProps = state => ({
    user: state.user,
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(DeleteItem);
