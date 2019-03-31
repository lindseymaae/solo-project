import React, { Component } from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
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
        quantity: '',
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
            <div className="addNewItem">

                <h1 id="inventory">
                    Add New Item
                </h1>

                <div>
                    <TextField
                        id="outlined-textarea"
                        label="Item"
                        placeholder="Item"
                        multiline
                        className="textField"
                        margin="normal"
                        variant="outlined"
                        onChange={this.handleItemChange}
                        value={this.state.name}
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
                        value={this.state.quantity}
                    />
                    <div className="dropdown">
                        <button className="category-button">{this.state.category}</button>
                        <div class="dropdown-content">
                            <p onClick={() => this.handleCategoryClick('food')}>Food</p>
                            <p onClick={() => this.handleCategoryClick('clothing')}>Clothing</p>
                            <p onClick={() => this.handleCategoryClick('hygiene')}>Hygiene</p>
                        </div>
                    </div>
                    <div className="dropdown">
                        <button >{this.state.season}</button>
                        <div class="dropdown-content">
                            <p onClick={() => this.handleSeasonClick('winter')}>Winter</p>
                            <p onClick={() => this.handleSeasonClick('spring')}>Spring</p>
                            <p onClick={() => this.handleSeasonClick('summer')}>Summer</p>
                            <p onClick={() => this.handleSeasonClick('fall')}>Fall</p>
                            <p onClick={() => this.handleSeasonClick('all')}>All Seasons</p>
                        </div>

                    </div>
                </div>
                <div>

                    <button onClick={this.addNewProduct} className="submitButton">Submit</button>
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