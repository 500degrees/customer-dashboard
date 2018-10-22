import { 
    onAccountCleanSuccess,
    onAccountCleanFailed,
    onAccountTransferSuccess,
    onAccountTransferFailed,
    CLEAN_ACCOUNT,
    TRANSFER_ACCOUNT } from "../actions";
import { takeLatest, put, call, select } from "redux-saga/effects";
import { clean, transfer } from '../shared/accounts';

export function *cleanAccount(action) {
    try {
        const state = yield select();
        const cleanResponse = yield call(clean, state.user.token, action.email);
        console.log('Account clean', cleanResponse);
        yield put(onAccountCleanSuccess(action.email));
    } catch (e) {
        yield put(onAccountCleanFailed(`Failed to clean "${action.email}"`));
    }
}

export function *transferAccount(action) {
    try {
        const state = yield select();
        const transferResponse = yield call(transfer, state.user.token, action.email);
        console.log('Account transfered', transferResponse);
        yield put(onAccountTransferSuccess(action.email));
    } catch (e) {
        yield put(onAccountTransferFailed(`Failed to transfer "${action.email}"`));
    }
}

export default [
    takeLatest(CLEAN_ACCOUNT, cleanAccount),
    takeLatest(TRANSFER_ACCOUNT, transferAccount),
];