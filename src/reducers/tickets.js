import { 
    FETCH_TICKETS_SUCCESS,
    TRANSFER_ACCOUNT_SUCCESS,
    TRANSFER_ACCOUNT_FAILED,
    CLEAN_ACCOUNT_SUCCESS,
    CLEAN_ACCOUNT_FAILED,
    CLOSE_TICKET_SUCCESS,
    CLOSE_TICKET_FAILED,
} from '../actions';

export default (state = { all:[], selected: {}, message: '' }, action) => {
    switch(action.type) {
        case FETCH_TICKETS_SUCCESS:
            return {...state, all: action.tickets, message: 'All tickets fetched' };
        case TRANSFER_ACCOUNT_SUCCESS:
            return {...state, message: `"${action.email}" transfered`}
        case TRANSFER_ACCOUNT_FAILED:
            return {...state, message: action.error}
        case CLEAN_ACCOUNT_SUCCESS:
            return {...state, message: `"${action.email}" cleaned`}
        case CLEAN_ACCOUNT_FAILED:
            return {...state, message: action.error}
        case CLOSE_TICKET_SUCCESS:
            return {...state, message: `Successful closing ticket`}
        case CLOSE_TICKET_FAILED:
            return {...state, message: action.error}
        default:
            return state;
    }
}
