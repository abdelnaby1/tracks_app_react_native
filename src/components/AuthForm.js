import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Button, Text, Input} from '@rneui/themed';
import Spacer from '../components/Spacer';

const AuthForm = ({headerText, errorMsg, onSubmit, submitBtnText}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <>
      <Spacer>
        <Text h3>{headerText}</Text>
      </Spacer>
      <Input
        label="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Spacer />
      <Input
        secureTextEntry
        label="Password"
        value={password}
        onChangeText={setPassword}
        autoCapitalize="none"
        autoCorrect={false}
      />
      {errorMsg ? <Text style={styles.error}>{errorMsg}</Text> : null}
      <Spacer>
        <Button
          title={submitBtnText}
          onPress={() => onSubmit({email, password})}
        />
      </Spacer>
      {/* <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
        <Spacer>
          <Text style={styles.link}>
            Aleardy have an account? Sign in instead
          </Text>
        </Spacer>
      </TouchableOpacity> */}
    </>
  );
};
const styles = StyleSheet.create({
  error: {
    color: 'red',
    fontSize: 16,
    marginLeft: 15,
    marginTop: 15,
  },
});
export default AuthForm;
