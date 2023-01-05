import React, { Component } from 'react';
import axios from 'axios';
import DataTable from './DataTable';
export default class Users extends Component {
    constructor(props) {
        super(props);
        this.state = { usersCollection: [] };
    }
    componentDidMount() {
        axios.get('http://localhost:3000/courses')
            .then(res => {
                this.setState({ usersCollection: res.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    dataTable() {
        return this.state.usersCollection.map((data, i) => {
            return <DataTable obj={data} key={i} />;
        });
    }
    render() {
        return (
            < >
                <table className="table table-striped">
                        <thead className="thead-dark">
                            <tr>
                                <td>Course Code</td>
                                <td>Course Name</td>
                                <td>Course Description</td>
                                <td>Action</td>
                            </tr>
                        </thead>
                        <tbody>
                            {this.dataTable()}
                        </tbody>
                    </table>
            </>
        )
    }
}