import io from 'socket.io-client';
import { REALTIME_ENDPOINT } from './constants';

const createSocketConnection = () => {
  return new Promise(resolve => {
    const socket = io(`${REALTIME_ENDPOINT}`);
    socket.on('connect', () => {
      resolve(socket);
    });
  })
};

export { createSocketConnection };