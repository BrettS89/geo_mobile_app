import { AsyncStorage } from 'react-native';
import { URI } from '../config';

async function getToken() {
  const token = await AsyncStorage.getItem('token');
  if (!token) throw new Error('no token');
  return token;
}

export async function apiGetCities(queryString) {
  const res = await fetch(`${URI}/hunts/findcity?city=${queryString}`, {
    METHOD: 'get',
    headers: {
      'authorization': await getToken(),
      'Content-Type': 'application/json',
    },
  });
  return await res.json();
}
