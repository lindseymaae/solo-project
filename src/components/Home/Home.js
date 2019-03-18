import React from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';

//Public Home page 
const Home = () => (
    <div>
        <h1 id="wishlist">
            Welcome to our wishlist
        </h1>
        <h2> Our Top Needs are:  </h2>
        {/* will be sourcing in database query text for top needs list */}


    </div>
);


const mapStateToProps = state => ({
    user: state.user,
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(Home);
