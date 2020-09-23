import React from 'react';
import { MaterialTopTabBar } from '@react-navigation/material-top-tabs';
import {
  Animated,
  Platform,
  Keyboard,
  SafeAreaView,
} from 'react-native';

const CustomBottomTabBar = (props) => {
  const animation = React.useMemo(() => new Animated.Value(1), []);

  React.useEffect(() => {
    let keyboardShowSubscription;
    let keyboardHideSubscription;

    if (Platform.OS === 'android') {
      keyboardShowSubscription = Keyboard.addListener('keyboardDidShow', () => animation.setValue(0));

      keyboardHideSubscription = Keyboard.addListener('keyboardDidHide', () => animation.setValue(1));
    }

    return () => {
      if (Platform.OS === 'android') {
        // eslint-disable-next-line no-unused-expressions
        keyboardShowSubscription?.remove();

        // eslint-disable-next-line no-unused-expressions
        keyboardHideSubscription?.remove();
      }
    };
  }, []);

  const customStyles = {
    container: {
      maxHeight: animation.interpolate({ inputRange: [0, 1], outputRange: [0, 100] }),
    },
  };

  return (
    <Animated.View style={customStyles.container}>
      <SafeAreaView>
        <MaterialTopTabBar {...props} />
      </SafeAreaView>
    </Animated.View>
  );
};

export default CustomBottomTabBar;
