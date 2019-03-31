import React, { Component } from 'react';
import { connect } from 'react-redux';
import image from '../App/picture.jpg'

//Public Home page 
class Home extends Component {
    componentDidMount() {
        console.log('Mounted');

        this.props.dispatch({ type: 'GET_QUANTITY' });
    }
   

    render() {


        return (
            <div className="home-div">
                {/* <div style={{
                    backgroundImage: `url(${image})`,
                    height: '200px',
                    backgroundPosition: 'bottom'
                }} /> */}
                <h1 id="wishlist">
                    Welcome to our wishlist
                </h1>
                <h2> Our Top Needs are:  </h2>
                <ul className="list">
                    {this.props.homeReducer.map((item) => (
                        <li>
                            {item.product_name}
                        </li>
                    ))}
                </ul>

            </div >
        )
    }
}





const mapStateToProps = state => ({
    user: state.user,
    homeReducer: state.homeReducer,
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(Home);
