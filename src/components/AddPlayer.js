import React, {Component} from 'react';
import PropTypes from 'prop-types';


export default class AddPlayer extends Component {

    static propTypes= {
        addPlayer: PropTypes.func.isRequired,
    }
  
    playerInput = React.createRef();
    
    addPlayer = (e) => {
        e.preventDefault();
        const {addPlayer} = this.props
        addPlayer(this.playerInput.current.value);
        e.currentTarget.reset()

    }
    render() {
        return (
            <form onSubmit={this.addPlayer}>
                <input 
                    type="text"
                    ref={this.playerInput}
                    placeholder="Enter a players name"
                />
                <input 
                    type="submit"
                    value="add player"
                />
            </form>
        )
    }
}
