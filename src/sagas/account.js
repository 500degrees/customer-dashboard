import { 
    onAccountCleanSuccess,
    onAccountCleanFailed,
    onAccountTransferSuccess,
    onAccountTransferFailed,
    REQUEST_CLEAN_ACCOUNT,
    REQUEST_TRANSFER_ACCOUNT } from "../actions";
import { takeLatest, put, call, select } from "redux-saga/effects";
import { clean, transfer } from '../shared/accounts';

export function *cleanAccount(action) {
    try {
        const state = yield select();
        yield call(clean, state.user.token, action.email);
        yield put(onAccountCleanSuccess(action.email));
    } catch (e) {
        yield put(onAccountCleanFailed(`Failed to clean "${action.email}"`));
    }
}

export function *transferAccount(action) {
    try {
        const state = yield select();
        yield call(transfer, state.user.token, action.email);
        yield put(onAccountTransferSuccess(action.email));
    } catch (e) {
        yield put(onAccountTransferFailed(`Failed to transfer "${action.email}"`));
    }
}

export default [
    takeLatest(REQUEST_CLEAN_ACCOUNT, cleanAccount),
    takeLatest(REQUEST_TRANSFER_ACCOUNT, transferAccount),
];
