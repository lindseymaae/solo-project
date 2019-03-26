import React, { Component } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'

//Public Home page 
const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    },
    dense: {
        marginTop: 16,
    },
    menu: {
        width: 200,
    },
});

class WishList extends Component {

 
    state = {
      user: this.props.user.username, 
      familySize: '',
      bio: '',
      needs: '',

    };
    handleFamilySize = event => {
        this.setState({ familySize: event.target.value });
    };
    handleComments = event => {
        this.setState({ bio: event.target.value });
    }
    handleNeeds = event =>{
        this.setState({needs: event.target.value});
    }
    handleSubmit = () => {
        console.log('handleSubmit', this.state);

        this.props.dispatch({ type: 'ADD_PROFILE', payload: this.state })
        this.setState({
            user: this.props.user.username,
            familySize: '',
            bio: '',
            needs:'',
        })
        
    }

  


    render() {
        const { classes } = this.props;
        console.log('WISHLIST',this.props.user);
        console.log('Wislist STATE', this.state);
        
        
        return (
            <div className="WishingOnAStarDiv">
                <h1><center></center>Build a Wish List</h1>
                <p>We would love to help you and your family. Please fill out the form below and we will do our best to help!</p>
               

                <span><h3>Welcome {this.props.user.username}!!</h3> How many people live in your home?</span>
                <select onChange = {this.handleFamilySize}>
                    <option value = "1">1</option>
                    <option value = "2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                </select>
                <div>
                  
                    <p>Tell us about yourself!</p>
                    <TextField
                        id="Bio"
                        label="Bio"
                        placeholder="Placeholder"
                        multiline
                        className={classes.textField}
                        margin="normal"
                        variant="outlined"
                        onChange = {this.handleComments}
                    />
                    <p>Tell us how we can help!</p>
                    <TextField
                        id="Needs"
                        label="Be Specific"
                        placeholder="Placeholder"
                        multiline
                        className={classes.textField}
                        margin="normal"
                        variant="outlined"
                        onChange = {this.handleNeeds}
                    />
                    <div>
                   <Button onClick = {this.handleSubmit}>Submit</Button>
                    </div>
                </div>
                
            </div >
        )
    }
}





const mapStateToProps = state => ({


    user: state.user,
    homeReducer: state.homeReducer,
});

// this allows us to use <App /> in index.js
export default withStyles(styles) (connect(mapStateToProps)(WishList));
