import fetch from 'isomorphic-fetch';
import { API } from './constants';

export const getTickets = async (token) => {
  const headers = new Headers();
  headers.append('Authorization', `JWT ${token}`);
  const fetchOptions = {
    headers,
    method: 'GET'
  }
  const response = await fetch(`${API}/support/tickets`, fetchOptions);
  const data = await response.json();
  return data && data.length && data.length > 0 ? data.filter(t => !t.resolved) : [];
}

export const closeTicket = async (token, ticketId) => {
  const headers = new Headers();
  headers.append('Authorization', `JWT ${token}`);
  const fetchOptions = {
    headers,
    method: 'PUT'
  }
  const response = await fetch(`${API}/api/support/tickets/resolve/${ticketId}`, fetchOptions);
  const data = await response.json();
  return data;
}