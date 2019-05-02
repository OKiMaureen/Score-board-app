import * as PlayerActionTypes from '../actionTypes/players';

const initialState = [
     { name: 'maureen',
        score: 0,
        id:1
      },
      { name: 'mena',
        score: 0,
        id:2
      },
      { name: 'blessing',
        score: 0,
        id:3
      },
      { name: 'joel',
        score: 0,
        id:4
      }
];

export default function playerReducer (state=initialState, action) {
    switch (action.type){
        case PlayerActionTypes.ADD_PLAYER:
            return [
                ...state,
                {
                    name: action.name,
                    score: 0
                }
            ];
        case PlayerActionTypes.REMOVE_PLAYER:
            return [
                ...state.slice(0, action.index),
                ...state.slice(action.index + 1)

            ];
        case PlayerActionTypes.UPDATE_PLAYER_SCORE:
            return state.map((player, index) =>{
                if(index === action.index){
                    return {
                        ...player,
                        score: player.score + action.score

                    };
                };
                return player;
            });
        default:
            return state;
    }
}
