import { FETCH_DASHBOARD_DATA_SUCCESS, FETCH_DASHBOARD_DATA_FAILED } from '../actions';

export default (state = { data: {} }, action) => {
    switch(action.type) {
        case FETCH_DASHBOARD_DATA_SUCCESS:
            return { ...state, data: { ...action.data }, error: undefined };
        case FETCH_DASHBOARD_DATA_FAILED:
            return { ...state, error: action.error, data: {} };
        default:
            return state;
    }
}
