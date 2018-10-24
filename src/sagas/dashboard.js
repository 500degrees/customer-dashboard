import { onFetchDashboardDataFailed, onFetchDashboardDataSuccess, FETCH_DASHBOARD_DATA } from "../actions";
import { takeLatest, put, call } from "redux-saga/effects";
import { getData } from '../shared/dashboard';

export function *fetchDashboardDataSaga(action) {
    try {
        const data = yield call(getData, action.from, action.to);
        yield put(onFetchDashboardDataSuccess(data));
    } catch (e) {
        yield put(onFetchDashboardDataFailed(e.toString()));
    }
}

export default [
    takeLatest(FETCH_DASHBOARD_DATA, fetchDashboardDataSaga),
];