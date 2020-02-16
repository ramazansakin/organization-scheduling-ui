import React from 'react';
import './App.css';
import AddPresantation from './components/addpresantation'
import ListPresantation from './components/listpresantation'

function App() {
  return (
    <div className="container">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
