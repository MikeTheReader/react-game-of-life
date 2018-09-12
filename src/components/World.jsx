import React from 'react';
import PropTypes from 'prop-types';
import '../css/world.css';

const World = ({ world }) => {
  const rows = world.map((xArray, y, yArray) => {
    const cells = xArray.map((isAlive, x) => {
      let classes = 'world-cell';
      if (isAlive) {
        classes += ' alive';
      }
      const key = `${x}:${y}`;
      return <div key={key} className={classes} />;
    });
    return (
      <div key={y} className="world-row">
        {cells}
      </div>
    );
  });

  return <div className="world">{rows}</div>;
};

World.propTypes = {
  world: PropTypes.array.isRequired,
};

export default World;
