import React from 'react';
import {Stats} from './Stats';
import StopWatch from './StopWatch';
import '../assets/main.css';
import PropTypes from 'prop-types';

export const Header = ({players, boardTitle}) => ((
    <header>
        <Stats players={players}/>
        <h1>{boardTitle}</h1>
        <StopWatch />
    </header>
  ));

  Header.propTypes = {
      players: PropTypes.arrayOf(PropTypes.object),
      boardTitle: PropTypes.string,
  }

Header.defaultProps ={
    boardTitle: 'Score Board'
}
