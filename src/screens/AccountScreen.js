import React, {useContext} from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Text, Input} from '@rneui/themed';
import {Context as AuthContext} from '../context/AuthContext';
import Spacer from '../components/Spacer';
import {SafeAreaView} from 'react-native-safe-area-context';
const AccountScreen = () => {
  const {signout} = useContext(AuthContext);

  return (
    <SafeAreaView>
      <Text style={{fontSize: 48}}>My Account</Text>
      <Spacer>
        <Button title="Sign out" onPress={signout} />
      </Spacer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});
export default AccountScreen;
