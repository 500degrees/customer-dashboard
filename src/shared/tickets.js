import fetch from 'isomorphic-fetch';
import { SUPPORT_API } from './constants';

export const getTickets = async (token) => {
  try {
    const headers = new Headers();
    headers.append('Authorization', `JWT ${token}`);
    const fetchOptions = {
      headers,
      method: 'GET'
    }
    const response = await fetch(`${SUPPORT_API}/api/support/tickets`, fetchOptions);
    const data = await response.json();
    return data && data.length && data.length > 0 ? data.filter(t => !t.resolved) : [];
  } catch (e) {
    console.log('Error retrieving tickets');
    throw e;
  }
}

export const closeTicket = async (token, ticketId) => {
  try {
    const headers = new Headers();
    headers.append('Authorization', `JWT ${token}`);
    const fetchOptions = {
      headers,
      method: 'PUT'
    }
    const response = await fetch(`${SUPPORT_API}/api/support/tickets/resolve/${ticketId}`, fetchOptions);
    const data = await response.json();
    return data;
  } catch (e) {
    console.log('Error closing ticket');
    throw e;
  }
}