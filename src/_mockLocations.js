import Geolocation from '@react-native-community/geolocation';

const tenMetersWithDegrees = 0.0001;

const getLocation = increment => {
  return {
    timestamp: 10000000,
    coords: {
      speed: 0,
      heading: 0,
      accuracy: 5,
      altitudeAccuracy: 5,
      altitude: 5,
      longitude: -122.031286 + increment * tenMetersWithDegrees,
      latitude: 37.33233141 + increment * tenMetersWithDegrees,
    },
  };
};
let counter = 0;
setInterval(() => {
  const watchID = Geolocation.watchPosition(
    position => {
      return getLocation(counter);
      //   console.log(position);
    },
    error => {
      console.log(error);
    },
  );
  counter++;
}, 1000);
