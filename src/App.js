import React, { Component } from 'react';
import World from './World'

class App extends Component {
  render() {
    return (
        <div className="container">
          <h1>React Game of Life</h1>
          <World height={20} width={20} />
        </div>
    );
  }
}

export default App;
