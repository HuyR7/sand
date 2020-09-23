import React from 'react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';

// Components
import LoginScreen from '../../modules/AuthModule/components/Auth/index';

const Stack = createNativeStackNavigator();

const screenOptions = {
  Navigator: {
    headerTintColor: 'white',
    headerBackTitleVisible: false,
    headerStyle: {
      borderBottomWidth: 0,
      elevation: 0,
      shadowColor: 'transparent',
      shadowRadius: 0,
      shadowOffset: {
        height: 0,
      },
      backgroundColor: 'white',
    },
  },
  LoginScreen: {headerShown: false},
};

const AuthStackNavigator = () => (
  <Stack.Navigator screenOptions={screenOptions.Navigator}>
    <Stack.Screen
      name="LoginScreen"
      component={LoginScreen}
      options={screenOptions.LoginScreen}
    />
  </Stack.Navigator>
);

export default AuthStackNavigator;
