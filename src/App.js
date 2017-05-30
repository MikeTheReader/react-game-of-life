
import React, { Component } from 'react';
import { generateRandomWorld, advance } from './life'
import World from './World'
import Counter from './Counter'

const HEIGHT = 40;
const WIDTH = 40;

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      world: generateRandomWorld(HEIGHT, WIDTH),
      active: true
    }
  }

  componentDidMount() {
    setTimeout(() => this.moveAStep(), 10);
  }

  moveAStep() {
    if (this.state.active) {
      this.setState({
        world: advance(this.state.world),
        active: this.state.active
      });
    }
    setTimeout(() => this.moveAStep(), 10);
  }

  togglePause = () => {
    this.setState({
      world: this.state.world,
      active: !this.state.active
    })
  }


  render() {
    let buttonText = (this.state.active) ? 'Pause' : 'Play';
    return (
        <div className="container">
            <h1>React Game of Life</h1>
            <Counter world={this.state.world}/>
          <button onClick={this.togglePause}>{buttonText}</button>
          <World world={this.state.world} />
        </div>
    );
  }
}

export default App;
