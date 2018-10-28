import { 
    FETCH_TICKETS_SUCCESS,
    REQUEST_TRANSFER_ACCOUNT_SUCCESS,
    REQUEST_TRANSFER_ACCOUNT_FAILED,
    REQUEST_CLEAN_ACCOUNT_SUCCESS,
    REQUEST_CLEAN_ACCOUNT_FAILED,
    REQUEST_CLOSE_TICKET_SUCCESS,
    REQUEST_CLOSE_TICKET_FAILED,
} from '../actions';

export default (state = { all:[], selected: {}, message: '' }, action) => {
    switch(action.type) {
        case FETCH_TICKETS_SUCCESS:
            return {...state, all: action.tickets, message: 'All tickets fetched' };
        case REQUEST_TRANSFER_ACCOUNT_SUCCESS:
            return {...state, message: `"${action.email}" transfered`}
        case REQUEST_TRANSFER_ACCOUNT_FAILED:
            return {...state, message: action.error}
        case REQUEST_CLEAN_ACCOUNT_SUCCESS:
            return {...state, message: `"${action.email}" cleaned`}
        case REQUEST_CLEAN_ACCOUNT_FAILED:
            return {...state, message: action.error}
        case REQUEST_CLOSE_TICKET_SUCCESS:
            return {...state, message: `Successful closing ticket`}
        case REQUEST_CLOSE_TICKET_FAILED:
            return {...state, message: action.error}
        default:
            return state;
    }
}
