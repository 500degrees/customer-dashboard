import fetch from 'isomorphic-fetch';
import { AUTH_API } from '../shared/constants';

export const login = async (username, password) => {
  try {
    const response = await fetch(`${AUTH_API}/api/auth/basic/login`, {
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      method: 'POST',
      body: JSON.stringify({
        email: username,
        password,
        deviceId: 'dashboard'
      })
    });
    const data = await response.json();
    return data;
  } catch (e) {
    // console.log(e);
  }
}