
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import '../assets/main.css';
import {Counter} from './Counter';


export default class Player extends PureComponent {
    static propTypes = {
        removePlayer: PropTypes.func.isRequired,
        id: PropTypes.number,
        name: PropTypes.string.isRequired,
        score: PropTypes.number.isRequired,
        updatePlayer: PropTypes.func,
        index: PropTypes.number.isRequired,
    }

    render (){
        const {removePlayer, name, score, updatePlayer, index} = this.props
        return (
            <div className="player">
                <span className="player-name">
                <button className="remove-player" onClick={() => {
                removePlayer(index)
                }}>x</button>
                {name}
                </span>
                <Counter 
                    score={score} 
                    updatePlayer={updatePlayer}
                    index={index}
                />
            </div>
        )
    }
}




    
  