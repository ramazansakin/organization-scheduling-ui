import React, { Component } from 'react'
import axios from 'axios'

export default class addpresantation extends Component {
    state = {
        subject: '',
        pduration: ''
    }
    onchange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });

        console.log(e.target.value);
    }

    addNewPresantation = (e) => {
        e.preventDefault();

        // api tarafındaki model içerisinde  oğelerin adı ve tipleri birebir buradaki gibi olmalı 
        const newPresantation = {
            name: this.state.name,
            subject: this.state.subject,
            pdate: this.state.pduration
        }
        //rest servise objeyi gönderiyorum. yazdığın rest servis  nerede çalışıyorsa artık abi 
        //onun yolunu veriyorsun.
        //spring için nasıl olur bilemiyorum abi  , ben böyle kullanıyordum .nette.
        //ama .nete özel birşey değil  benim bildiğim
        //axiosun spring örnekleri de var abi 
        axios.post(`https://localhost:8085/organizations/1/addevent`, { newPresantation })
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
                                    name="pduration"
                                    id="pduration"
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

