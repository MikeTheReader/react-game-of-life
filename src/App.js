
import React, { Component } from 'react';
import { generateRandomWorld, advance } from './life'
import World from './World'

const HEIGHT = 40;
const WIDTH = 40;

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      world: generateRandomWorld(HEIGHT, WIDTH)
    }
  }

  componentDidMount() {
    setTimeout(() => this.moveAStep(), 10);
  }

  moveAStep() {
    this.setState({
      world: advance(this.state.world)
    });
    setTimeout(() => this.moveAStep(), 10);
  }


  render() {
    return (
        <div className="container">
          <h1>React Game of Life</h1>
          <World world={this.state.world} />
        </div>
    );
  }
}

export default App;
