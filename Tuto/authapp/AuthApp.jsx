import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RoutePublic from './public/RoutePublic';

const Authapp = () => {
  return (
    <>
      <NavigationContainer>
        <RoutePublic />
      </NavigationContainer>
    </>
  );
};

export default Authapp;
