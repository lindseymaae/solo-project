import React, { Component } from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import './AddNewItem.css';
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/styles'
//Home page for volunteers 


import TextField from '@material-ui/core/TextField';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    
    dense: {
        marginTop: 16,
    },
    menu: {
        width: 200,
    },
});

class AddNewItem extends Component {
    state = {
        id: 8,
        name: '',
        quantity: 0,
        category: 'Category',
        season: 'Season'
    }

    handleCategoryClick = (item) => {
       
            this.setState({
                category: item
            })
       
        }
    
    handleSeasonClick = (item) => {
        this.setState({
            season: item
        })
    }

    addNewProduct = event => {
        event.preventDefault();
        this.props.dispatch({ type: 'POST_INFO', payload: this.state })
        this.setState({
                id: this.state.id + 1,
                name: '',
                quantity: '',
                category: 'Category',
                season: 'Season',
        });
    }

    handleItemChange = (event) => {
        console.log(event.target.value);

        this.setState({
            ...this.state,
            name: event.target.value
        })
    }

    handleQuantityChange = (event) => {
        console.log(event.target.value);

        this.setState({
            ...this.state,
            quantity: event.target.value
        })
    }

    render() {
        console.log(this.state);

        return (
            <div>
                <h1 id="welcome">
                    Add New Item
                </h1>
                <TextField
                    id="outlined-textarea"
                    label="Item"
                    placeholder="Item"
                    multiline
                    className="textField"
                    margin="normal"
                    variant="outlined"
                    onChange={this.handleItemChange}
                />
                <TextField
                    id="outlined-textarea"
                    label="Quantity"
                    placeholder="Quantity"
                    multiline
                    className="textField"
                    margin="normal"
                    variant="outlined"
                    onChange={this.handleQuantityChange}
                />
                <div className="dropdown">
                    <Button>{this.state.category}</Button>
                    <div class="dropdown-content">
                        <p onClick={() => this.handleCategoryClick('food')}>Food</p>
                        <p onClick={() => this.handleCategoryClick('clothing')}>Clothing</p>
                        <p onClick={() => this.handleCategoryClick('hygiene')}>Hygiene</p>
                    </div>
                </div>
                <div className="dropdown">
                    <Button >{this.state.season}</Button>
                    <div class="dropdown-content">
                        <p onClick={() => this.handleSeasonClick('winter')}>Winter</p>
                        <p onClick={() => this.handleSeasonClick('spring')}>Spring</p>
                        <p onClick={() => this.handleSeasonClick('summer')}>Summer</p>
                        <p onClick={() => this.handleSeasonClick('fall')}>Fall</p>
                        <p onClick={() => this.handleSeasonClick('all')}>All Seasons</p>
                    </div>
                </div>
                <Button onClick={this.addNewProduct} className="submitButton">Submit</Button>
                <div>
                    <LogOutButton className="log-in" />
                </div>
            </div>
        );
    }
}


const mapStateToProps = state => ({
    user: state.user,
});

// this allows us to use <App /> in index.js
export default withStyles(styles)(
    connect(mapStateToProps)(AddNewItem));