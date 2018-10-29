import openSocket from 'socket.io-client';
import { REALTIME_ENDPOINT } from './constants';
const  socket = openSocket(`${REALTIME_ENDPOINT}`,);

function subscribeToTimer(cb) {
  socket.on('timer', timestamp => cb(null, timestamp));
  socket.emit('subscribeToTimer', 1000);
}

function subscribeDatabaseChanges(cb) {
    socket.on('db-change', change => cb(null, change));
    socket.emit('listen-db-changes');
  }

export { subscribeToTimer, subscribeDatabaseChanges };