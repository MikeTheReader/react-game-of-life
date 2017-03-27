import React, { Component } from 'react';
import { generateRandomWorld, advance } from './life';

import './css/world.css'

export default class World extends Component {

  constructor(props) {
    super(props);
    this.state = {
      world: generateRandomWorld(props.height, props.width)
    }
  }

  componentDidMount() {
    setTimeout(() => this.moveAStep(), 1000);
  }

  moveAStep() {
    this.setState({
      world: advance(this.state.world)
    });
    setTimeout(() => this.moveAStep(), 1000);
  }

  render() {
    let rows = this.state.world.map((xArray, y, yArray) => {
      let cells = xArray.map((isAlive, x) => {
        let classes = 'world-cell';
        if (isAlive) {
          classes += ' alive';
        }
        let key = x + ':' + y
        return <div key={key} className={classes}></div>
      });
      return <div key={y} className="world-row">{cells}</div>
    });

    return (
      <div className="world">
        <div>{rows}</div>
      </div>
    )
  }
}

World.propTypes = {
  height: React.PropTypes.number.isRequired,
  width: React.PropTypes.number.isRequired
}
