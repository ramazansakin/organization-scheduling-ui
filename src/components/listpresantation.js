import React, { Component } from 'react'
import axios from 'axios'
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css'


export default class listpresantation extends Component {
    state = {
        columnDefs: [
            { headerName: "Time", field: "time", width: 100 },
            { headerName: "Presantation Subject", field: "subject", width: 320 },
            { headerName: "Presantation Duration", field: "duration", width: 120 },
            { headerName: "Track No", field: "trackno", width: 80, rowGroup: true } // Group by track No
        ],

        //Sample static test data
        rowData: [
            { subject: "Toyota", time: "9:00 AM", duration: "45 minutes", trackno: 1 },
            { subject: "Ford", time: "9:45 AM", duration: "60 minutes", trackno: 1 },
            { subject: "Porsche", time: "11:00 AM", duration: "30 minutes" , trackno: 1},
            { subject: "PorscheASD", time: "12:00 PM", duration: "15 minutes", trackno: 1 },
            { subject: "Toyota", time: "9:00 AM", duration: "45 minutes" , trackno: 2},
            { subject: "Ford", time: "9:45 AM", duration: "60 minutes" , trackno: 2},
            { subject: "Porsche", time: "11:00 AM", duration: "30 minutes" , trackno: 2},
            { subject: "PorscheASD", time: "12:00 PM", duration: "15 minutes", trackno: 2 }
        ]
    }
    getList = (e) => {

        // Call organization schedule service and get response model to map ui
        axios.get(`http://localhost:8085/organizations/schedule/1`)
            .then(res => {
                // If data is correct, map to model
                this.setState({
                    rowData: res.data.trackTables
                });

                console.log(res);
            });
    }

    render() {
        return (

            <div className="container">
                <div className="card" style={{ width: "42rem" }}>

                    <div className="card-header">
                        <h5 className="card-title">Conference Program</h5>
                    </div>
                    <button type="submit" onClick={this.getList} className="btn btn-success btn-block">Get List</button>
                    <div className="card-body">
                        <div className="ag-theme-balham" style={{ height: "400px", width: "40rem" }}>
                            <AgGridReact
                                columnDefs={this.state.columnDefs}
                                rowData={this.state.rowData}>
                            </AgGridReact>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
