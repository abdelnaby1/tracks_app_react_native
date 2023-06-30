import React, {useContext} from 'react';
import {Button, FlatList, TouchableOpacity} from 'react-native';
import {StyleSheet} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
import {ListItem, Text} from '@rneui/themed';
import {Context as TrackContext} from '../context/TrackContext';

const TrackListScreen = ({navigation}) => {
  const {state, fetchTracks} = useContext(TrackContext);
  useFocusEffect(
    React.useCallback(() => {
      fetchTracks();
      // return () => {};
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []),
  );
  if (state.length === 0) {
    return <Text style={styles.title}>No Tracks Found</Text>;
  }
  return (
    <>
      {/* <Text style={styles.title}>Tracks List</Text> */}
      <FlatList
        data={state}
        keyExtractor={item => item._id}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('TrackDetail', {_id: item._id});
              }}>
              <ListItem>
                <ListItem.Content>
                  <ListItem.Title>{item.name}</ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron />
              </ListItem>
            </TouchableOpacity>
          );
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 48,
    alignSelf: 'center',
    marginBottom: 15,
  },
});
export default TrackListScreen;
