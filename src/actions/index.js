export const REQUEST_LOGIN='REQUEST_LOGIN';
export const REQUEST_LOGIN_SUCCESS='REQUEST_LOGIN_SUCCESS';
export const REQUEST_LOGIN_FAILED='REQUEST_LOGIN_FAILED';
export const onLogin = (email, password) => ({ type: REQUEST_LOGIN, email, password });
export const onLoginSuccess = (token, user) => ({ type: REQUEST_LOGIN_SUCCESS, token, user });
export const onLoginFailed = (error) => ({ type: REQUEST_LOGIN_FAILED, error });
// TICKETS
export const FETCH_TICKETS='FETCH_TICKETS';
export const FETCH_TICKETS_SUCCESS='FETCH_TICKETS_SUCCESS';
export const FETCH_TICKETS_FAILED='FETCH_TICKETS_FAILED';
export const CLOSE_TICKET='CLOSE_TICKET';
export const CLOSE_TICKET_SUCCESS='CLOSE_TICKET_SUCCESS';
export const CLOSE_TICKET_FAILED='CLOSE_TICKET_FAILED';
export const onFetchTickets = () => ({ type: FETCH_TICKETS });
export const onFetchTicketsSuccess = (tickets) => ({ type: FETCH_TICKETS_SUCCESS, tickets });
export const onFetchTicketsFailed = (error) => ({ type: FETCH_TICKETS_FAILED, error });
export const onCloseTicket = (id) => ({ type: CLOSE_TICKET, id });
export const onCloseTicketSuccess = (id) => ({ type: CLOSE_TICKET_SUCCESS, id });
export const onCloseTicketFailed = (error) => ({ type: CLOSE_TICKET_FAILED, error });
// ACCOUNT
export const CLEAN_ACCOUNT='CLEAN_ACCOUNT';
export const CLEAN_ACCOUNT_SUCCESS='CLEAN_ACCOUNT_SUCCESS';
export const CLEAN_ACCOUNT_FAILED='CLEAN_ACCOUNT_FAILED';
export const TRANSFER_ACCOUNT='TRANSFER_ACCOUNT';
export const TRANSFER_ACCOUNT_SUCCESS='TRANSFER_ACCOUNT_SUCCESS';
export const TRANSFER_ACCOUNT_FAILED='TRANSFER_ACCOUNT_FAILED';
export const onAccountClean = (email) => ({ type: CLEAN_ACCOUNT, email });
export const onAccountCleanSuccess = (email) => ({ type: CLEAN_ACCOUNT_SUCCESS, email });
export const onAccountCleanFailed = (error) => ({ type: CLEAN_ACCOUNT_FAILED, error });
export const onAccountTransfer = (email) => ({ type: TRANSFER_ACCOUNT, email });
export const onAccountTransferSuccess = (email) => ({ type: TRANSFER_ACCOUNT_SUCCESS, email });
export const onAccountTransferFailed = (error) => ({ type: TRANSFER_ACCOUNT_FAILED, error });
// DASHBOARD
export const FETCH_DASHBOARD_DATA='FETCH_DASHBOARD_DATA';
export const FETCH_DASHBOARD_DATA_SUCCESS='FETCH_DASHBOARD_DATA_SUCCESS';
export const FETCH_DASHBOARD_DATA_FAILED='FETCH_DASHBOARD_DATA_FAILED';
export const onFetchDashboardData = (from, to) => ({ type: FETCH_DASHBOARD_DATA, from, to });
export const onFetchDashboardDataSuccess = (data) => ({ type: FETCH_DASHBOARD_DATA_SUCCESS, data });
export const onFetchDashboardDataFailed = (error) => ({ type: FETCH_DASHBOARD_DATA_FAILED, error });
