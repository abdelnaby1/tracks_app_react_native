import React, {useContext} from 'react';
import {StyleSheet, View} from 'react-native';
import {Context as AuthContext} from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import {useFocusEffect} from '@react-navigation/native';

const SignupScreen = ({navigation}) => {
  const {state, signup, removeError, localSignIn} = useContext(AuthContext);
  useFocusEffect(
    React.useCallback(() => {
      removeError();
      localSignIn();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []),
  );
  return (
    <View style={styles.container}>
      <AuthForm
        headerText="Sign Up For Tracking"
        errorMsg={state.errorMsg}
        onSubmit={signup}
        submitBtnText="Sign Up"
      />
      <NavLink
        routeName="Signin"
        text="Aleardy have an account? Sing in instead"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 250,
  },
});
export default SignupScreen;
