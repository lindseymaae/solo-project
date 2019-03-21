import React, { Component } from 'react';
import { connect } from 'react-redux';

//Public Home page 
class Home extends Component {
    componentDidMount() {
        console.log('Mounted');

        this.props.dispatch({ type: 'FETCH_INFO' });}
    mapThings = ()=>{

        
    
}

   render () {
       console.log(this.props.projectReducer);
       
       return (
 <div>
    <h1 id="wishlist">
        Welcome to our wishlist
        </h1>
    <h2> Our Top Needs are:  </h2>
    <ol>
                   {this.props.projectReducer.map((item) => (
                       <li>
                           {item.product_name}
                       </li>
                   ))}
       </ol>
            
    </div >
       )
   }
}

    
   


const mapStateToProps = state => ({
    
    
    user: state.user,
    projectReducer: state.projectReducer,
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(Home);
