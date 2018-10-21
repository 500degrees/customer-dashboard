import { LOGIN_SUCCESS, LOGIN_FAILED } from '../actions';

export default (state = { token: '', loggedIn: false, user: {} }, action) => {
    switch(action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state, 
                loggedIn: true, 
                user: action.user, 
                token: action.token,
                error: '', 
            };
        case LOGIN_FAILED:
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
