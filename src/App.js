import React, { Component } from 'react';
import SampleComponent from './components/SampleComponent';
import './App.css';

function App() {
  return (
    <div className="App">
      Hello World!
      <TestComponent></TestComponent>
    </div>
  );
}

class TestComponent extends Component{
  render(){
    return (
      <div className="testComponent">
      Test Component
      <SampleComponent/>
    </div>
    );
  }
}


export default App;
