import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignUp from './SignUp';
import SignIn from './SignIn';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const RoutePublic = () => {
  return (
    // <NavigationContainer>
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Register" component={SignUp} />
      <Stack.Screen name="Login" component={SignIn} />
    </Stack.Navigator>
    // </NavigationContainer>
  );
};

export default RoutePublic;
