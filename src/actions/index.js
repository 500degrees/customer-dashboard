// Action types
export const LOGIN='LOGIN';
export const LOGIN_SUCCESS='LOGIN_SUCCESS';
export const LOGIN_FAILED='LOGIN_FAILED';
export const FETCH_TICKETS='FETCH_TICKETS';
export const FETCH_TICKETS_SUCCEEDED='FETCH_TICKETS_SUCCEEDED';
export const FETCH_TICKETS_FAILED='FETCH_TICKETS_FAILED';
// Action creators
export const onLogin = (userName, password) => ({ type: LOGIN, userName, password });
export const onLoginSuccess = (token, user) => ({ type: LOGIN_SUCCESS, token, user });
export const onLoginFailed = (error) => ({ type: LOGIN_FAILED, error });
export const onFetchTickets = () => ({ type: FETCH_TICKETS });
export const onFetchTicketsSuccess = (tickets) => ({ type: FETCH_TICKETS_SUCCEEDED, tickets });
export const onFetchTicketsFailed = (error) => ({ type: FETCH_TICKETS_FAILED, error });
