import React, { Component } from 'react';
import './App.css';

import SwipeList from './components/SwipeList'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    console.log(this.props)
    return (
      <div className={"App"}>
        {/*<img src={logo} alt={"logo"}/>*/}
        <SwipeList/>
      </div>
    )
  }
}

export default App;
