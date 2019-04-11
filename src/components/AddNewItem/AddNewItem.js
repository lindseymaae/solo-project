import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/styles'
//Home page for volunteers 

//text field styling
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
    }//sets the state based on click of season button

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
    } //dispatches state to sagas, and subsequently resets state 

    handleItemChange = (event) => {
        console.log(event.target.value);

        this.setState({
            ...this.state,
            name: event.target.value
        })
    } // takes in the item name input from user and sets state 

    handleQuantityChange = (event) => {
        console.log(event.target.value);

        this.setState({
            ...this.state,
            quantity: event.target.value
        })
    }// takes in quantity input from user and sets state

    render() {
        console.log(this.state);

        return (
            <div className="addNewItem">

                <h1 id="inventory">
                    Add New Item
                </h1>

                <div id="inputDiv">
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
                        <div className="dropdown-content">
                            <p onClick={() => this.handleCategoryClick('Food')}>Food</p>
                            <p onClick={() => this.handleCategoryClick('Clothing')}>Clothing</p>
                            <p onClick={() => this.handleCategoryClick('Hygiene')}>Hygiene</p>
                        </div>
                    </div>
                    <div className="dropdown">
                        <button >{this.state.season}</button>
                        <div class="dropdown-content">
                            <p onClick={() => this.handleSeasonClick('Winter')}>Winter</p>
                            <p onClick={() => this.handleSeasonClick('Spring')}>Spring</p>
                            <p onClick={() => this.handleSeasonClick('Summer')}>Summer</p>
                            <p onClick={() => this.handleSeasonClick('Fall')}>Fall</p>
                            <p onClick={() => this.handleSeasonClick('All')}>All Seasons</p>
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