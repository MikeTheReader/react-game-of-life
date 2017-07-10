import React from 'react';
import { countLiveCells } from './life';

const Counter = ({ world }) => {
    return (
        <div>
            Number of live cells: {countLiveCells(world)}
        </div>
    );
}

Counter.propTypes = {
    world: React.PropTypes.array.isRequired
}

export default Counter;
