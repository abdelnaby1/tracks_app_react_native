import trackerApi from '../api/trackerApi';
import createDataContext from './createDataContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

const authReducer = (state, action) => {
  switch (action.type) {
    // case 'SIGN_IN':
    //   return {...state};
    // case 'SIGN_UP':
    //   return {...state};
    case 'SIGN_OUT':
      return {...state, token: null, errorMsg: ''};
    case 'ADD_ERROR':
      return {...state, errorMsg: action.payload};
    case 'SIGNUP':
      return {...state, token: action.payload, errorMsg: ''};
    case 'SIGNIN':
      return {...state, token: action.payload, errorMsg: ''};
    case 'REMOVE_ERROR':
      return {...state, errorMsg: ''};
    default:
      return state;
  }
};
const signup =
  dispatch =>
  async ({email, password}) => {
    try {
      const response = await trackerApi.post('/signup', {
        email: email,
        password: password,
      });
      await AsyncStorage.setItem('token', response.data.data.token);
      dispatch({type: 'SIGNUP', payload: response.data.data.token});
    } catch (err) {
      dispatch({
        type: 'ADD_ERROR',
        payload: 'Somethine went wrong with sign up',
      });
    }
  };
const signin = dispatch => {
  return async ({email, password}) => {
    try {
      const response = await trackerApi.post('/signin', {
        email: email,
        password: password,
      });
      await AsyncStorage.setItem('token', response.data.data.token);
      dispatch({type: 'SIGNIN', payload: response.data.data.token});
    } catch (err) {
      dispatch({
        type: 'ADD_ERROR',
        payload: 'Somethine went wrong with sign in',
      });
    }
  };
};
const localSignIn = dispatch => {
  return async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      dispatch({type: 'SIGNIN', payload: token});
    } catch (err) {
      // dispatch({
      //   type: 'ADD_ERROR',
      //   payload: 'Somethine went wrong with sign in',
      // });
    }
  };
};
const signout = dispatch => {
  return async () => {
    await AsyncStorage.setItem('token', '');
    dispatch({
      type: 'SIGN_OUT',
    });
  };
};
const removeError = dispatch => {
  return () => {
    dispatch({
      type: 'REMOVE_ERROR',
    });
  };
};
export const {Context, Provider} = createDataContext(
  authReducer,
  {signup, signin, localSignIn, signout, removeError},
  {token: '', errorMsg: ''},
);
