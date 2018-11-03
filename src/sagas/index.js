import { all } from "redux-saga/effects";
import userSagas from './user';
import ticketsSagas from './tickets';
import accountSagas from './account';
import dashboardSagas from './dashboard';
import realtimeSagas from './realtime';


export default function *rootSaga() {
    yield all([
        ...userSagas,
        ...ticketsSagas,
        ...accountSagas,
        ...dashboardSagas,
        ...realtimeSagas,
    ]);
}