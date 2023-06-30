import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import TrackListScreen from '../screens/TrackListScreen';
import TrackDetailScreen from '../screens/TrackDetailScreen';

const Stack = createStackNavigator();

const TrackListStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="TracksLisr"
        component={TrackListScreen}
        options={{
          headerTitle: 'Your Tracks',
        }}
      />
      <Stack.Screen
        name="TrackDetail"
        component={TrackDetailScreen}
        options={{
          headerBackTitle: 'Back',
        }}
      />
    </Stack.Navigator>
  );
};

export default TrackListStack;
