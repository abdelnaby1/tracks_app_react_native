import React, {useContext, useEffect} from 'react';
import {Context as AutContext} from '../context/AuthContext';
const LoadingScreen = () => {
  const {localSignIn} = useContext(AutContext);
  useEffect(() => {
    localSignIn();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
};

export default LoadingScreen;
