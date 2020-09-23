import React from 'react';
import {Platform, StatusBar} from 'react-native';
import {Icon as EIcon} from 'react-native-elements';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import CustomBottomTabBar from '../../components/CustomBottomTabBar';

import HomeTab from './HomeTab/HomeScreen';
import SettingTab from './SettingTab/index';
import Colors from '../../constants/colors';

const Tab = createMaterialTopTabNavigator();

const screenOptions = {
  Navigator: {},
  HomeTab: {
    title: 'Trang chủ',
    // eslint-disable-next-line react/prop-types
    tabBarIcon: ({color, size}) => (
      <EIcon type="font-awesome" name="home" color={color} size={size} />
    ),
  },
  // NewsTab: {
  //   title: 'Bản tin',
  //   // eslint-disable-next-line react/prop-types
  //   tabBarIcon: ({color, size}) => (
  //     <EIcon type="font-awesome" name="pie-chart" color={color} size={size} />
  //   ),
  // },
  SettingTab: {
    title: 'Thiết lập',
    // eslint-disable-next-line react/prop-types
    tabBarIcon: ({color, size}) => (
      <EIcon type="material-community" name="apps" color={color} size={size} />
    ),
  },
};

const tabBarOptions = {
  showIcon: true,
  activeTintColor: Colors.PRIMARY,
  inactiveTintColor: Colors.PRIMARY,
  tabStyle: {
    padding: 5,
  },
  labelStyle: {
    textTransform: 'none',
  },
  iconStyle: {
    width: '100%',
  },
  indicatorStyle: {
    top: 0,
    backgroundColor: Colors.PRIMARY,
  },
};

const tabBar = (props) => <CustomBottomTabBar {...props} />;

const TabNavigator = () => {
  React.useEffect(() => {
    if (Platform.OS === 'ios') {
      StatusBar.setBarStyle('light-content', true);
    }
  }, []);
  return (
    <Tab.Navigator
      tabBar={tabBar}
      swipeEnabled={false}
      tabBarPosition="bottom"
      tabBarOptions={tabBarOptions}
      screenOptions={screenOptions.Navigator}>
      <Tab.Screen
        name="HomeTab"
        component={HomeTab}
        options={screenOptions.HomeTab}
      />
      <Tab.Screen
        name="SettingTab"
        component={SettingTab}
        options={screenOptions.SettingTab}
      />
    </Tab.Navigator>
  );
};
export default TabNavigator;
