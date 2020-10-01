import React from 'react';
import { Icon as EIcon } from 'react-native-elements';
import AnimatedTabBar from 'curved-bottom-navigation-bar';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Card from './Card';
import Search from './Search';
import Setting from './SettingTab';
import Home from './HomeTab';

const Tab = createBottomTabNavigator();

export default function App() {
  const tabs = React.useMemo(() => ({
    Home: {
      // eslint-disable-next-line react/prop-types
      icon: ({ progress }) => <EIcon type="material-community" name="home-variant-outline" color="red" size={24} />,
    },

    Search: {
      // eslint-disable-next-line react/prop-types
      icon: ({ progress }) => <EIcon type="material-community" name="magnify" color="red" size={24} />,
    },
    Card: {
      // eslint-disable-next-line react/prop-types
      icon: ({ progress }) => <EIcon type="material-community" name="heart" color="red" size={24} />,
    },
    Setting: {
      // eslint-disable-next-line react/prop-types
      icon: ({ progress }) => <EIcon type="font-awesome" name="user" color="red" size={24} />,
    },
  }), []);

  const tabBar = React.useCallback((props) => {
    return <AnimatedTabBar tabs={tabs} {...props} />;
  }, []);

  return (
    <Tab.Navigator tabBar={tabBar}>
      <Tab.Screen
        name="Home"
        component={Home}
      />
      <Tab.Screen
        name="Search"
        component={Search}
      />
      <Tab.Screen
        name="Card"
        component={Card}
      />
      <Tab.Screen
        name="Setting"
        component={Setting}
      />
    </Tab.Navigator>
  )
}