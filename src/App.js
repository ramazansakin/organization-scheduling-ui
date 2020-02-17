import React from 'react';
import './App.css';
import AddPresantation from './components/addpresantation'
import ListPresantation from './components/listpresantation'

function App() {
  return (
    <div className="container">

      <div className="card" style={{ marginTop: "10px" }}>
        <div className="card-body">
          <div className="card-header">
            <h5 className="card-title">Organization Scheduling Project</h5>
          </div>

          <div className="row" style={{ marginTop: "15px" }}>
            <div className="col-lg-4">
              <AddPresantation />
            </div>
            <div className="col-lg-8" >
              <ListPresantation />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
