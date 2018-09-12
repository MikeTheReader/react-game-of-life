import React, { Component } from 'react';
import { advance, generateRandomWorld } from './models/life';
import World from './components/World';
import Counter from './components/Counter';

const HEIGHT = 40;
const WIDTH = 40;
const MILLESECONDS_BETWEEN_STEPS = 10;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      world: generateRandomWorld(HEIGHT, WIDTH),
      active: true,
    };
  }

  componentDidMount() {
    this.moveAStep();
  }

  togglePause = () => {
    this.setState(state => ({ active: !this.state.active }));
  };

  moveAStep() {
    if (this.state.active) {
      this.setState(state => ({ world: advance(state.world) }));
    }
    setTimeout(() => this.moveAStep(), MILLESECONDS_BETWEEN_STEPS);
  }

  render() {
    const buttonText = this.state.active ? 'Pause' : 'Play';
    return (
      <div className="container">
        <h1>React Game of Life</h1>
        <Counter world={this.state.world} />
        <button onClick={this.togglePause}>{buttonText}</button>
        <World world={this.state.world} />
      </div>
    );
  }
}

export default App;
