export const LOGIN='LOGIN';
export const LOGIN_SUCCESS='LOGIN_SUCCESS';
export const LOGIN_FAILED='LOGIN_FAILED';

export const onLogin = (userName, password) => ({ type: LOGIN, userName, password });
export const onLoginSuccess = (token, user) => ({ type: LOGIN_SUCCESS, token, user });
export const onLoginFailed = (error) => ({ type: LOGIN_FAILED, error });