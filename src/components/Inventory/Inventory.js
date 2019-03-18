import React, { Component } from 'react';
import { connect } from 'react-redux';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import { TableBody, TableRow, TableCell } from '@material-ui/core';

//Public Home page 
class Inventory extends Component {

    componentDidMount(){
        console.log('Mounted');

        this.props.dispatch({type: 'FETCH_INFO'});
    }

    render() {
        return (
            <div>
                <h1 id="inventory">
                    Inventory
        </h1>
                <Table>
                    <TableHead className='table'>
                        <th>Item</th>
                        <th>Quantity</th>
                        <th>Minimum Quantity</th>
                        <th>Category</th>
                        <th>Season</th>
                    </TableHead>
                    {this.props.projectReducer.map((item) => (
                        <TableBody>
                            <TableRow>
                                <TableCell>{item.product_name}</TableCell>
                                <TableCell>{item.product_quantity}</TableCell>
                                <TableCell>{item.product_min_quantity}</TableCell>
                                <TableCell>{item.category}</TableCell>
                                <TableCell>{item.season}</TableCell>
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
export default connect(mapStateToProps)(Inventory);
