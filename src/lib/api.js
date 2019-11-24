import { AsyncStorage } from 'react-native';
import { URI } from '../config';
import errorThrower from '../utils/errorThrower';

async function getToken() {
  const token = await AsyncStorage.getItem('token');
  if (!token) throw new Error('no token');
  return token;
}

export async function apiRegister(body) {
  const res = await fetch(`${URI}/user/register`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  const response = await res.json();
  errorThrower(res, response);
  return response;
}

export async function apiLogin(body) {
  const res = await fetch(`${URI}/user/login`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  const response = await res.json();
  errorThrower(res, response);
  return await res.json();
}

export async function apiGetCities(queryString) {
  const res = await fetch(`${URI}/hunts/findcity?city=${queryString}`, {
    method: 'get',
    headers: {
      'authorization': await getToken(),
      'Content-Type': 'application/json',
    },
  });
  return await res.json();
}

export async function apiFindHunts(lat, lon) {
  const res = await fetch(`${URI}/hunts/find?lat=${lat}&lon=${lon}`, {
    method: 'get',
    headers: {
      'authorization': await getToken(),
      'Content-Type': 'application/json',
    },
  });
  return await res.json();
}
