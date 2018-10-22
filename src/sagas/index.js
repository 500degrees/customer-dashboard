import { all } from "redux-saga/effects";
import ticketsSagas from './tickets';


export default function *rootSaga() {
    console.log('Running root saga');
    yield all([
        ...ticketsSagas
    ]);
}