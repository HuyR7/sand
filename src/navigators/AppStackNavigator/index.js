import React from 'react';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';

import TabNavigator from '../TabStackNavigator';

// Variables
import Colors from '../../constants/colors';

const Stack = createNativeStackNavigator();

const screenOptions = {
  Navigator: {
    headerTopInsetEnabled: false,
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
      backgroundColor: Colors.PRIMARY,
    },
  },
  TabNavigator: {headerShown: false},
};

export default () => {
  return (
    <Stack.Navigator screenOptions={screenOptions.Navigator}>
      <Stack.Screen
        name="TabNavigator"
        component={TabNavigator}
        options={screenOptions.TabNavigator}
      />
    </Stack.Navigator>
  );
};
