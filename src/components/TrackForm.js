import {Button, Input} from '@rneui/themed';
import React, {useContext} from 'react';
import {View, StyleSheet} from 'react-native';
import {Context as LocationContext} from '../context/LocationContext';
import Spacer from './Spacer';
import useSaveTrack from '../hooks/useSaveTrack';
const TrackForm = () => {
  const {
    state: {name, recording, locations},
    startRecording,
    stopRecording,
    changeName,
  } = useContext(LocationContext);
  let shouldDisabled = name.length > 0 ? false : true;
  const [saveTrack] = useSaveTrack();
  console.log(name);
  return (
    <>
      <Spacer>
        <Input
          placeholder="Enter name"
          value={name}
          onChangeText={changeName}
        />
      </Spacer>
      <Spacer>
        {recording ? (
          <Button title="Stop Recording" onPress={stopRecording} />
        ) : (
          <Button
            title="Start Recording"
            disabled={shouldDisabled}
            onPress={startRecording}
          />
        )}
      </Spacer>
      <Spacer>
        {!recording && locations.length ? (
          <Button title="Save Recording" onPress={saveTrack} />
        ) : null}
      </Spacer>
    </>
  );
};
const styles = StyleSheet.create({});
export default TrackForm;
