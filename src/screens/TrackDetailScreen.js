import {Text} from '@rneui/themed';
import React, {useContext} from 'react';
import {StyleSheet, View} from 'react-native';
import {Context as TrackContext} from '../context/TrackContext';
import {useFocusEffect} from '@react-navigation/native';
import MapView, {Polyline} from 'react-native-maps';

const TrackDetailScreen = ({route, navigation}) => {
  const {_id} = route.params;
  const {state} = useContext(TrackContext);
  const track = state.find(t => t._id === _id);
  const initialCoords = track.locations[0].coords;
  // console.log(initialCoords);
  useFocusEffect(
    React.useCallback(() => {
      navigation.setOptions({title: track.name});
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []),
  );
  return (
    <>
      {/* <Text style={styles.name}>{`${track.name} journey`}</Text> */}
      <MapView
        style={styles.map}
        initialRegion={{
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
          ...initialCoords,
        }}>
        <Polyline coordinates={track.locations.map(loc => loc.coords)} />
      </MapView>
    </>
  );
};

const styles = StyleSheet.create({
  name: {
    fontSize: 34,
    alignSelf: 'center',
    marginVertical: 25,
  },
  map: {
    height: 300,
  },
});
export default TrackDetailScreen;
