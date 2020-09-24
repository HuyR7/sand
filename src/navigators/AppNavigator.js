import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import AuthStackNavigator from './AuthStackNavigator';
import AppStackNavigator from './AppStackNavigator';
import TabNavigator from './TabStackNavigator';

// Components

// Variables

const AppNavigator = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        {/* <AuthStackNavigator /> */}
        <AppStackNavigator />
        {/* <TabNavigator /> */}
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default AppNavigator;
