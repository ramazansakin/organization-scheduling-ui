import React from 'react';
import './App.css';
import AddPresantation from './components/addpresantation'
import ListPresantation from './components/listpresantation'

function App() {
  return (
    <div className="container">
<<<<<<< HEAD
      <div className="card" style={{ marginTop: "5px" }}>
        <div className="card-body">
          <div className="card-header">
            <h5 className="card-title">Organization Scheduling Project</h5>
          </div>
          <div>
            <p className="card-text">You can add presantation or list presantation</p>
          </div>

          <div className="row">
            <div className="col-md-4">
              <AddPresantation />
            </div>
            <div className="col-md-8">
              <ListPresantation />
=======
      <div class="card" style={{ marginTop: "5px" }}>
        <div class="card-body">
          
          <h5 class="card-title">Organization Scheduling Project</h5>
          <p class="card-text">You can add presantation or list presantation</p>

          <div className="row">
            <div className="col-md-6">
              <AddPresantation/>
            </div>
            <div className="col-md-6">
              <ListPresantation/>
>>>>>>> a02ed82162c688e273b4f06fed97a8deb67b1881
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
