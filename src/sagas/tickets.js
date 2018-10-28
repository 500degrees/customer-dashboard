import { onFetchTicketsFailed, onFetchTicketsSuccess, FETCH_TICKETS, onCloseTicketFailed, REQUEST_CLOSE_TICKET, onCloseTicketSuccess } from "../actions";
import { takeLatest, put, call, select } from "redux-saga/effects";
import { getTickets, closeTicket } from '../shared/tickets';

export function *fetchTicketsSaga() {
    try {
        const state = yield select();
        const tickets = yield call(getTickets, state.user.token);
        yield put(onFetchTicketsSuccess(tickets));
    } catch (e) {
        yield put(onFetchTicketsFailed(e.toString()));
    }
}

export function *closeTicketSaga(action) {
    try {
        const state = yield select();
        yield call(closeTicket, state.user.token, action.id);
        yield put(onCloseTicketSuccess(action.id));
    } catch (e) {
        yield put(onCloseTicketFailed(`Error closing ticket with id "${action.id}"`));
    }
}

export default [
    takeLatest(FETCH_TICKETS, fetchTicketsSaga),
    takeLatest(REQUEST_CLOSE_TICKET, closeTicketSaga),
];
