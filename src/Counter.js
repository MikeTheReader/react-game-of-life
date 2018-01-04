import React from 'react';
import PropTypes from 'prop-types';
import { countLiveCells } from './life';

const Counter = ({ world }) => {
    return (
        <div>
            Number of live cells: {countLiveCells(world)}
        </div>
    );
}

Counter.propTypes = {
    world: PropTypes.array.isRequired
}

export default Counter;
