import React from 'react';
import '../assets/main.css';
import PropTypes from 'prop-types'

export const Counter = ({index, score, updatePlayer}) =>{
    return (
        <div className="counter">
          <button className="counter-action-decerement" onClick={()=>updatePlayer(-1,index)}>-</button>
          <span className="counter-score">{score}</span>
          <button className="counter-action-increment" onClick={()=>updatePlayer(+1, index)} >+</button>
        </div>
    )
}

Counter.propTypes ={
    index: PropTypes.number,
    score: PropTypes.number,
    updatePlayer: PropTypes.func, 
}

  
   


