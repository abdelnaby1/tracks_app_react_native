import React, {useState, useEffect, useContext} from 'react';
import Geolocation from '@react-native-community/geolocation';
import {useFocusEffect} from '@react-navigation/native';

export default (recording, callback) => {
  const [err, setErr] = useState(null);
  const startWatching = () => {
    Geolocation.getCurrentPosition(
      info => {
        // console.log(info);
      },
      error => {
        setErr(error);
      },
    );
    const id = Geolocation.watchPosition(
      callback,
      error => {
        setErr(error);
      },
      {
        interval: 1000,
        //   enableHighAccuracy: true,
        distanceFilter: 10,
      },
    );
    return id;
  };

  useFocusEffect(
    React.useCallback(() => {
      const watchId = startWatching();

      return () => {
        Geolocation.clearWatch(watchId);
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [recording]),
  );

  return [err];
};
