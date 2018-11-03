import { take, put, call } from 'redux-saga/effects'
import { eventChannel } from 'redux-saga'
import { createSocketConnection } from '../shared/realtime';
import {addStat} from '../actions';

const createSocketChannel = socket => eventChannel(emit => {
    const statHandler = (event) => {
        if (event && event.fullDocument && event.operationType === 'insert' && event.fullDocument._id) {
            emit(getStatEntry(event.fullDocument));
        }
    }
    socket.on('db-change', statHandler);
    socket.emit('listen-db-changes');
    return () => {
        socket.off('db-change', statHandler)
    }
});

const getStatEntry = (stat) => {
    const statEntry = {
        title: stat.player ?
            `${stat.player.firstName}${stat.player.lastName ? ' ' + stat.player.lastName : ''}` :
            stat.team.name,
        address: (stat.game.address && stat.game.address.address) ? 
            (stat.game.address.address && stat.game.address.address.address) ? 
                stat.game.address.address.address : 
                stat.game.address.address :
            (stat.game.address && stat.game.address.length > 0) ? stat.game.address: 'empty address',
        statLabel: stat.stat.name,
        entryDate: stat.createdAt,
        coach: stat.userId,
    }
    return statEntry;
}

export function* watchOnStats() {
    const socket = yield call(createSocketConnection)
    const socketChannel = yield call(createSocketChannel, socket)

    while (true) {
        const stat = yield take(socketChannel)
        yield put(addStat(stat));
    }
}


export default [
    watchOnStats()
];