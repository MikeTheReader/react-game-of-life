import React, { Component } from 'react';

import './css/world.css'

export default class World extends Component {

  render() {
    let rows = this.props.world.map((xArray, y, yArray) => {
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
        {rows}
      </div>
    )
  }
}

World.propTypes = {
  world: React.PropTypes.array.isRequired
}
