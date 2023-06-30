import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import TrackCreateScreen from '../screens/TrackCreateScreen';

const Stack = createStackNavigator();
const TrackCreateStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="TrackCreate"
        component={TrackCreateScreen}
      />
    </Stack.Navigator>
  );
};

export default TrackCreateStack;
