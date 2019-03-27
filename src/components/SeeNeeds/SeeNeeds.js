import React, { Component } from 'react';
import { connect } from 'react-redux';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import { TableBody, TableRow, TableCell } from '@material-ui/core';
import Button from '@material-ui/core/Button'

//Public Home page 
class SeeNeeds extends Component {

    componentDidMount() {
        this.props.dispatch({ type: 'FETCH_PROFILE' });
    }

handleClick = (id) =>{
    console.log(id);
    
    this.props.dispatch( {type:'DELETE_WISH', payload: id })

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
                                <TableCell><Button onClick={() => this.handleClick(item.id)}>Delete</Button></TableCell>
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
