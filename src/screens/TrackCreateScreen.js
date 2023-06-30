import {Text} from '@rneui/themed';
import React, {useContext, useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Map from '../components/Map';
import Geolocation from '@react-native-community/geolocation';
import {Context as LocationContext} from '../context/LocationContext';
import useLocations from '../hooks/useLocations';
import TrackForm from '../components/TrackForm';

const TrackCreateScreen = () => {
  const {state, addLocation} = useContext(LocationContext);
  const [err] = useLocations(state.recording, location => {
    addLocation(location, state.recording);
  });

  return (
    <SafeAreaView style={styles.container}>
      <Text h2 style={styles.title}>
        Create a Track
      </Text>
      <Map />
      {err ? <Text>Please enable location services</Text> : null}
      <TrackForm />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
  },
  title: {
    alignSelf: 'center',
    marginBottom: 30,
  },
  button: {
    width: 240,
    height: 44,
    marginTop: 40,
    backgroundColor: '#336699',
    borderWidth: 1,
    borderColor: '#202040',
    borderRadius: 10,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    textAlign: 'center',
  },
});
export default TrackCreateScreen;
