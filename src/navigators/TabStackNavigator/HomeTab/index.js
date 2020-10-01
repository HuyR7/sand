import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Boy from './Boy';
import Girl from './Girl';
import { useWindowDimensions, Platform } from 'react-native';

const TabView = createMaterialTopTabNavigator();

const tabNumber = 2;

const TabViewNavigator = () => {
  const { width } = useWindowDimensions();

  const indicatorSize = 50;

  const tabBarOptions = {
    style: {
      left: 70,
      right: 70,
      position: 'absolute',
      backgroundColor: 'transparent',
      // Android
      elevation: 0,
      // Ios
      shadowOffset: 0,
      shadowColor: 'transparent',
      //All
      paddingTop: Platform.select({ android: 20, ios: 40 }),
    },
    labelStyle: {
      fontSize: 17,
      color: 'white',
    },
    indicatorStyle: {
      width: indicatorSize,
      left: width / tabNumber / 2 - indicatorSize / 2 - 34,
      backgroundColor: 'white',
    },
  };

  return (
    <TabView.Navigator tabBarOptions={tabBarOptions}>
      <TabView.Screen name="Nam" component={Boy} />
      <TabView.Screen name="Nữ" component={Girl} />
    </TabView.Navigator>
  );
};

export default TabViewNavigator;
