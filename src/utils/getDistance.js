import * as Location from 'expo-location';
import distanceAlgo from './distanceAlgo';

export default async (lat, lon) => {
  let { coords: { latitude, longitude } } = await Location.getCurrentPositionAsync({ accuracy: 6 });
  console.log(latitude, longitude);
  return distanceAlgo(lat, lon, latitude, longitude);
};
