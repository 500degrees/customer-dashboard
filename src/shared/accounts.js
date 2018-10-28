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
    if (response.status === 200) {
      return;
    } else {
      throw new Error(`Received status code ${response.status} while trying to clean account`);
    }
  } catch (e) {
    // console.log('Error cleaning account', e);
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
    if (response.status === 200) {
      return;
    } else {
      throw new Error(`Received status code ${response.status} while trying to transfer account`);
    }
  } catch (e) {
    // console.log('Error transfering account', e);
    throw e;
  }
}