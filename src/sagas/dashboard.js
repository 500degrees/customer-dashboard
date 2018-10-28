import { onFetchDashboardDataFailed, onFetchDashboardDataSuccess, FETCH_DASHBOARD_DATA } from "../actions";
import { takeLatest, put, call, select } from "redux-saga/effects";
import { getData, getDailyUsers } from '../shared/dashboard';

export function *fetchDashboardDataSaga(action) {
    try {
        const state = yield select();
        const totals = yield call(getData, state.user.token, action.from, action.to);
        const dailyUsers = yield call(getDailyUsers, state.user.token, action.from, action.to);
        yield put(onFetchDashboardDataSuccess({ totals, dailyUsers }));
    } catch (e) {
        yield put(onFetchDashboardDataFailed(e.toString()));
    }
}

export default [
    takeLatest(FETCH_DASHBOARD_DATA, fetchDashboardDataSaga),
];