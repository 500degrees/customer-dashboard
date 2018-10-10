import fetch from 'isomorphic-fetch';
import fakeTickes from '../fakes/tickets';

export const getTickets = async () => {
  return Promise.resolve(fakeTickes);
}