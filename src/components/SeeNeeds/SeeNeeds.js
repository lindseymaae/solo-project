import React, { Component } from 'react';
import { connect } from 'react-redux';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import { TableBody, TableRow, TableCell } from '@material-ui/core';

//Public Home page 
class SeeNeeds extends Component {

    componentDidMount() {
        this.props.dispatch({ type: 'FETCH_PROFILE' });
    }

    render() {
        console.log('Tj', this.props.profileReducer);
        
        return (
            <div>
                <h1 id="inventory">
                   Wish List
        </h1>
                <Table className='inventory-table' >
                    <TableHead>
                        <th>Name</th>
                        <th>Family Size</th>
                        <th>Biography</th>
                        <th>Family Needs</th>
                    </TableHead>
                    {this.props.profileReducer.map((item) => (
                        <TableBody >
                            <TableRow className="tableRow">
                        <TableCell>{item.username}</TableCell>
                                <TableCell>{item.family_members}</TableCell>
                                <TableCell>{item.bio}</TableCell>
                                <TableCell>{item.needs}</TableCell>
                            </TableRow>
                        </TableBody>
                    ))}
                </Table>

            </div>
        )
    }

};


const mapStateToProps = state => {
    return state
};

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(SeeNeeds);
