import React from 'react';
import './App.css';
import AddPresantation from './components/addpresantation'
import ListPresantation from './components/listpresantation'

function App() {
  return (
    <div className="container">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
