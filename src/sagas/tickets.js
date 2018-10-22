import { onFetchTicketsFailed, onFetchTicketsSuccess, FETCH_TICKETS } from "../actions";
import { takeLatest, put, call, select } from "redux-saga/effects";
import { getTickets } from '../shared/tickets';

export function *fetchTickets() {
    try {
        const state = yield select();
        const tickets = yield call(getTickets, state.user.token);
        yield put(onFetchTicketsSuccess(tickets));
    } catch (e) {
        yield put(onFetchTicketsFailed(e.toString()));
    }
}

export default [
    takeLatest(FETCH_TICKETS, fetchTickets),
];
