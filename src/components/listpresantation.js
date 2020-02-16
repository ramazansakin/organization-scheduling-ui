import React, { Component } from 'react'
import axios from 'axios'
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css'


export default class listpresantation extends Component {
    state = {
        columnDefs: [
            { headerName: "Presantation Time", field: "time" },
            { headerName: "Presantation Subject", field: "subject" },
            { headerName: "Presantation Duration", field: "duration" }
        ],
        //abi burasını örnek data olsun diuye bıraktım
        //yukarıda columları tanımladık. fieldlarını ve ekranda görünecek column adlarını felan
        rowData: [
            { subject: "Toyota", time: "9:00 AM", duration: "45 minutes" },
            { subject: "Ford", time: "9:45 AM", duration: "60 minutes" },
            { subject: "Porsche", time: "11:00 AM", duration: "30 minutes" },
            { subject: "PorscheASD", time: "12:00 PM", duration: "15 minutes" }
        ]
    }
    getList = (e) => {

        //servisten çektiğin data içerisindeki fiedl alanları ile gridin column definitiondaki field alanlarının
        //isimleri birebir aynı olmalı
        axios.get(`https://localhost:8085/organizations/schedule/1`)  //yine kendi metodun yolunu veriyorsun
            .then(res => {
                //data geldi ise 
                this.setState({
                    rowData: res.data // res.data içerisinde servisten gelen data olduğunu varsayıyorum
                });
            });
    }

    render() {
        return (
            <div className="container">
                <div className="card" style={{ width: "32rem" }}>

                    <div className="card-header">
                        <h5 className="card-title">Conference Program</h5>
                    </div>
                    <button type="submit" onClick={this.getList} className="btn btn-success btn-block">Get List</button>
                    <div className="card-body">
                        <div className="ag-theme-balham" style={{ height: "400px", width: "30rem" }}>
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