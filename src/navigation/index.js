import React, {useState, useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Tabs} from './Tabs';
import AuthStack from './AuthStack';
import {Context as AuthContext} from '../context/AuthContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useFocusEffect} from '@react-navigation/native';

export const NavContainer = () => {
  const {state} = useContext(AuthContext);

  return (
    <NavigationContainer>
      {state.token ? <Tabs /> : <AuthStack />}
    </NavigationContainer>
  );
};
