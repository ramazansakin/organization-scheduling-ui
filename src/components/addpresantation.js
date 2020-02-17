import React, { Component } from 'react'
import axios from 'axios'

export default class addpresantation extends Component {
    state = {
        subject: '',
        duration: '',
        time: ''
    }
    onchange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });

        console.log(e.target.value);
    }

    addNewPresantation = (e) => {
        e.preventDefault();

        // event model fields - presentation
        const newPresantation = {
            subject: this.state.subject,
            duration: this.state.duration,
            time: this.state.time
        }
        // Call addEventToOrganization service via axios and map to model if exists
        // https://localhost:8085/organizations/1/addevent
        axios.post(``, { newPresantation })

            .then(res => {
                console.log(res);
                console.log(res.data);
            });
    }

    render() {
        return (
            <div className="container">
                <div className="card" style={{ width: "18rem" }}>
                    <div className="card-header">
                        <h5 className="card-title">Add New Presantation</h5>
                    </div>
                    <div className="card-body">
                        <form>
                            <div className="form-group">
                                <label htmlFor="subject">Presantation Subject</label>
                                <input
                                    type="text"
                                    name="subject"
                                    id="subject"
                                    placeholder="Presantation Subject"
                                    className="form-control"
                                    onChange={this.onchange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="pduration">Presantation Duration</label>
                                <input
                                    type="text"
                                    name="duration"
                                    id="duration"
                                    placeholder="Presantation Duration"
                                    className="form-control"
                                    onChange={this.onchange}
                                />
                            </div>

                            <button type="submit" onClick={this.addNewPresantation} className="btn btn-success btn-block">Add Presantation</button>
                        </form>
                    </div>
                </div>

            </div>
        )
    }
}

