import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RoutePublic from './public/RoutePublic';
import auth from '@react-native-firebase/auth';
import RouteSecure from './secure/RouteSecure';

const Authapp = () => {
  const [initialize, setInitialize] = useState(true);
  const [user, setUser] = useState();
  const onStateChange = user => {
    setUser(user);
    if (initialize) setInitialize(false);
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onStateChange);
    return subscriber;
  }, []);

  if (initialize) return null;

  return (
    <>
      {!user ? (
        <NavigationContainer>
          <RoutePublic />
        </NavigationContainer>
      ) : (
        <RouteSecure />
      )}
    </>
  );
};

export default Authapp;
