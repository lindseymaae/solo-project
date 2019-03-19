import React, { Component } from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import './AddNewItem.css';
import Button from '@material-ui/core/Button'
//Home page for volunteers 

import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

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

class AddNewItem extends Component {
    state = {
        id: 8,
        name: '',
        quantity: 0,
        category: 'Category',
        season: 'Season'
    }

    handleCategoryClick = (item) => {
        if (item = 'hygiene') {
            this.setState({
                category: 3
            })
        }
        if (item = 'food') {
            this.setState({
                category: 1
            })
        }
        if (item = 'spring') {
            this.setState({
                season: 4,
            })
        }
        if (item = 'clothing') {
            this.setState({
                season: 2,
            })
        }
    }
    handleSeasonClick = (item) => {
        if (item = 'fall') {
            this.setState({
                season: 2
            })
        }
        if (item = 'summer') {
            this.setState({
                season: 1
            })
        }
        if (item = 'spring') {
            this.setState({
                season: 4,
            })
        }
        if (item = 'winter') {
            this.setState({
                season: 3,
            })
        }
        if (item = 'all') {
            this.setState({
                season: 5,
            })
        }
    }

    addNewProduct = event => {
        event.preventDefault();
        this.props.dispatch({ type: 'POST_INFO', payload: this.state })
        this.setState({
            newProduct: {
                id: this.state.id + 1,
                name: '',
                quantity: '',
                category: '',
                season: '',
            }
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
                        <a onClick={() => this.handleCategoryClick('food')}>Food</a>
                        <a onClick={() => this.handleCategoryClick('Clothing')}>Clothing</a>
                        <a onClick={() => this.handleCategoryClick('Hygiene')}>Hygiene</a>
                    </div>
                </div>
                <div class="dropdown">
                    <Button >{this.state.season}</Button>
                    <div class="dropdown-content">
                        <a onClick={() => this.handleSeasonClick('Winter')}>Winter</a>
                        <a onClick={() => this.handleSeasonClick('Spring')}>Spring</a>
                        <a onClick={() => this.handleSeasonClick('Summer')}>Summer</a>
                        <a onClick={() => this.handleSeasonClick('Fall')}>Fall</a>
                        <a onClick={() => this.handleSeasonClick('All')}>All Seasons</a>
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
export default connect(mapStateToProps)(AddNewItem);
