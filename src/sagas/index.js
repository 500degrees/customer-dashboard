import { all } from "redux-saga/effects";
import ticketsSagas from './tickets';
import accountSagas from './account';
import dashboardSagas from './dashboard';


export default function *rootSaga() {
    yield all([
        ...ticketsSagas,
        ...accountSagas,
        ...dashboardSagas,
    ]);
}