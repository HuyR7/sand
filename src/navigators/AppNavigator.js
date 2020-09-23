import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import AuthStackNavigator from './AuthStackNavigator';
import AppStackNavigator from './AppStackNavigator';

// Components

// Variables

const AppNavigator = () => {
  return (
    <React.Fragment>
      <NavigationContainer>
        <AuthStackNavigator />
        <AppStackNavigator />
      </NavigationContainer>
    </React.Fragment>
  );
};

export default AppNavigator;
