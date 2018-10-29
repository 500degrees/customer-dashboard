import { REQUEST_LOGIN_SUCCESS, REQUEST_LOGIN_FAILED } from '../actions';

const initialState = { token: '', loggedIn: false, user: {} };

export default (state = initialState, action) => {
    switch(action.type) {
        case REQUEST_LOGIN_SUCCESS:
            return {
                ...state, 
                loggedIn: true, 
                user: action.user, 
                token: action.token,
                error: '', 
            };
        case REQUEST_LOGIN_FAILED:
            return {
                ...state, 
                loggedIn: false, 
                user: {}, 
                token: '',
                error: action.error 
            };
        default:
            return state;
    }
}
