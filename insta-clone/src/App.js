import React from 'react';
import './App.css';
import dummyData from './dummy-data';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      dummyData: dummyData
    }
  }

  render(){
    console.log(dummyData)
    return(
      <h1>TEST</h1>
    )
  }
}

export default App