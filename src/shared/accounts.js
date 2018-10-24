import fetch from 'isomorphic-fetch';
import { TRANSFER_API } from './constants';

export const clean = async (token, email) => {
  try {
    const headers = new Headers();
    headers.append('Authorization', `JWT ${token}`);
    const fetchOptions = {
      headers,
      method: 'POST'
    }
    const response = await fetch(`${TRANSFER_API}/api/transfer/clean/${email}`, fetchOptions);
    const data = await response.json();
    return data;
  } catch (e) {
    console.log('Error cleaning account', e);
    throw e;
  }
}

export const transfer = async (token, email) => {
  try {
    const headers = new Headers();
    headers.append('Authorization', `JWT ${token}`);
    const fetchOptions = {
      headers,
      method: 'POST'
    }
    const response = await fetch(`${TRANSFER_API}/api/transfer/${email}`, fetchOptions);
    const data = await response.json();
    return data;
  } catch (e) {
    console.log('Error transfering account', e);
    throw e;
  }
}