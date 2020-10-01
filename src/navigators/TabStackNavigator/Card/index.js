import React from 'react';
import {
  View,
  Text,
  Platform,
  TextInput,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { Icon, Button } from 'react-native-elements';

// Components

// Variables
import styles from './styles';
import text from '../../../constants/text';
import icons from '../../../constants/icons';
import colors from '../../../constants/colors';

export default class Card extends React.Component {
  render = () => {
    return (
      <View style={styles.container}>
        <View style={styles.form}>
          <Text>Card</Text>
        </View>
      </View>
    );
  };
}
