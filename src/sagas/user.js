import { REQUEST_LOGIN, onLoginSuccess, onLoginFailed } from "../actions";
import { takeLatest, put, call } from "redux-saga/effects";
import { login } from '../shared/auth';

export function *requestLoginSaga(action) {
    try {
        const loginReponse = yield call(login, action.email, action.password);
        yield put(onLoginSuccess(loginReponse.accessToken, loginReponse.user));
    } catch (e) {
        yield put(onLoginFailed(e.toString()));
    }
}

export default [
    takeLatest(REQUEST_LOGIN, requestLoginSaga),
];
