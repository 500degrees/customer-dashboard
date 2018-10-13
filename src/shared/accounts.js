import fetch from 'isomorphic-fetch';
import { API } from './constants';

export const clean = async (token, email) => {
  try {
    const headers = new Headers();
    headers.append('Authorization', `JWT ${token}`);
    const fetchOptions = {
      headers,
      method: 'POST'
    }
    const response = await fetch(`${API}/transfer/clean/${email}`, fetchOptions);
    const data = await response.json();
    return data;
  } catch (e) {
    console.log('Error cleaning account');
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
    const response = await fetch(`${API}/api/transfer/${email}`, fetchOptions);
    const data = await response.json();
    return data;
  } catch (e) {
    console.log('Error transfering account');
    throw e;
  }
}