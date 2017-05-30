import React, { Component } from 'react';
import { countLiveCells } from './life';

export default class Counter extends Component {

    render() {
        return (
            <div>
                Number of live cells: { countLiveCells(this.props.world) }
            </div>
        );
    }
}

Counter.propTypes = {
    world: React.PropTypes.array.isRequired
}
