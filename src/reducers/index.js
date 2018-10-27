import { combineReducers } from 'redux';
import user from './user';
import dashboard from './dashboard';
import tickets from './tickets';
import status from './status';

export default combineReducers({
    user,
    dashboard,
    tickets,
    status
});
