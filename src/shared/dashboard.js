import fetch from 'isomorphic-fetch';
import { SUPPORT_API } from '../shared/constants';

export const getData = async (token, from, to) => {
  try {
    const response = await fetch(`${SUPPORT_API}/api/support/dashboard/data/${from}/${to}`, {
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': `JWT ${token}`
      }),
      method: 'GET',
    });
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
    throw(e);
  }
}

export const getDailyUsers = async (token, from, to) => {
  try {
    const response = await fetch(`${SUPPORT_API}/api/support/dashboard/daily/coaches/${from}/${to}`, {
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': `JWT ${token}`
      }),
      method: 'GET',
    });
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
    throw(e);
  }
}