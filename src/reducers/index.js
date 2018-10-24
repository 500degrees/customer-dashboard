import { combineReducers } from 'redux';
import user from './user';
import dashboard from './dashboard';
import tickets from './tickets';

export default combineReducers({
    user,
    dashboard,
    tickets,
});
