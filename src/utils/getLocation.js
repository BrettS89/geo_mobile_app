import * as Location from 'expo-location';

export default async () => {
  let { coords: { latitude, longitude } } = await Location.getCurrentPositionAsync({ accuracy: 6 });
};
