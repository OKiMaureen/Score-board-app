import React, { Component} from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import * as PlayerActionCreators from '../actions/playerAction';
import '../assets/main.css';
import  {Header} from './Header';
import { connect } from 'react-redux';
import  Player from './Player' ;
import  AddPlayer from './AddPlayer'; 


class App extends Component{

  static propTypes = {
    players: PropTypes.array.isRequired
  }

  render () {

    const {players, dispatch } = this.props;
    const addPlayer = bindActionCreators(PlayerActionCreators.addPlayer, dispatch);
    const removePlayer = bindActionCreators(PlayerActionCreators.removePlayer, dispatch);
    const updatePlayer = bindActionCreators(PlayerActionCreators.updatePlayer, dispatch);

    return (
      <div className="scoreboard">
        <Header 
          players={players}
        />
        {players.map((player, index) => 
          <Player 
              index={index}
              name={player.name}
              score={player.score}
              key={index}
              addPlayer = {addPlayer}
              removePlayer = {removePlayer}
              updatePlayer= {updatePlayer}
            />
        )}
        <AddPlayer addPlayer={addPlayer}/>
      </div>
    )
  }
} 

const mapStateToProps = state =>(
  { players: state }
)

export default connect(mapStateToProps)(App);
