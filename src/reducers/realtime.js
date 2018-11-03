import { ADD_STAT } from '../actions';

export default (state = { all: [] }, action) => {
    switch (action.type) {
        case ADD_STAT:
            const stats = [action.stat, ...state.all];
            return {...state, all: stats};
        default:
            return state;
    }
}