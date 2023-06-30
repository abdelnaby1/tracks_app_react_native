import React, {useContext} from 'react';
import {StyleSheet, View} from 'react-native';
import {Context as AuthContext} from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import {useFocusEffect} from '@react-navigation/native';
const SigninScreen = ({navigation}) => {
  const {state, signin, removeError} = useContext(AuthContext);
  useFocusEffect(
    React.useCallback(() => {
      removeError();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []),
  );

  return (
    <View style={styles.container}>
      <AuthForm
        headerText="Sign In For Tracking"
        errorMsg={state.errorMsg}
        onSubmit={signin}
        submitBtnText="Sign In"
      />
      <NavLink
        routeName="Signup"
        text="Don't have an account? Try Create one"
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
  error: {
    color: 'red',
    fontSize: 16,
    marginLeft: 15,
    marginTop: 15,
  },
  link: {
    color: 'blue',
  },
});
export default SigninScreen;
