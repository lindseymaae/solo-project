import React, { Component } from 'react';
import { connect } from 'react-redux';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import { TableBody, TableRow, TableCell } from '@material-ui/core';
import Button from '@material-ui/core/Button'

//Public Home page 
class Delete extends Component {

    componentDidMount() {
        console.log('Mounted');

        this.props.dispatch({ type: 'FETCH_INFO' });
    }

    handleDeleteClick = id => () => {


        console.log('delete button has been clicked', id)
        this.props.dispatch({type: 'DELETE_ITEM', payload: id})
    }


    render() {
        return (
            <div>
                <h1 id="inventory">
                    Delete Item
        </h1>
                <Table>
                    <TableHead className='table'>
                        <th>Item</th>
                        <th>Quantity</th>
                        <th>Category</th>
                        <th>Season</th>
                        <th>Delete</th>
                    </TableHead>
                    {this.props.projectReducer.map((item) => (
                        <TableBody>
                            <TableRow key={item.product_id}>
                                <TableCell>{item.product_name}</TableCell>
                                <TableCell>{item.product_quantity}</TableCell>
                                <TableCell>{item.category}</TableCell>
                                <TableCell>{item.season}</TableCell>
                                <TableCell><Button class="deleteButton" onClick={this.handleDeleteClick(item.product_id)}>Delete</Button></TableCell>
                            </TableRow>
                       
                        </TableBody>
                    ))}
                </Table>

            </div>
        )
    }

};


const mapStateToProps = state => ({
    projectReducer: state.projectReducer,
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(Delete);
