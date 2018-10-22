import { FETCH_TICKETS_SUCCEEDED } from '../actions';

export default (state = { all:[], selected: {} }, action) => {
    switch(action.type) {
        case FETCH_TICKETS_SUCCEEDED:
            return {...state, all: action.tickets};
        default:
            return state;
    }
}
