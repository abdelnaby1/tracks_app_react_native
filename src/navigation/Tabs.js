import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AccountStack from './AccountStack';
import TrackListStack from './TrackStack';
import TrackCreateStack from './TrackCreateStack';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/Feather';

const Tab = createBottomTabNavigator();

export const Tabs = () => {
  // const myIcon = <Icon name="rocket" size={30} color="#900" />;

  return (
    <Tab.Navigator initialRouteName="TrackList">
      <Tab.Screen
        name="Tracks"
        component={TrackListStack}
        options={{
          headerShown: false,
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({focused, color, size}) => {
            return <Icon name="th-list" size={20} />;
          },
        }}
      />
      <Tab.Screen
        name="Create"
        component={TrackCreateStack}
        options={{
          headerShown: false,
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({focused, color, size}) => {
            return <Icon name="plus" size={20} />;
          },
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountStack}
        options={{
          headerShown: false,
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({focused, color, size}) => {
            return <Icon2 name="settings" size={20} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};
