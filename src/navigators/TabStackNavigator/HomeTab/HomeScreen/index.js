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
import text from '../../../../constants/text';
import icons from '../../../../constants/icons';
import colors from '../../../../constants/colors';

export default class HomeScreen extends React.Component {
  render = () => {
    return (
      <View style={styles.container}>
        <View style={styles.form}>
          <Animatable.View duration={200} animation="fadeInUp">
            <View style={styles.formInput}>
              <Icon
                size={icons.size}
                color={icons.color}
                name={icons.form.search.name}
                type={icons.form.search.type}
                containerStyle={styles.formInputIcon}
              />
              <TextInput
                autoCapitalize="none"
                placeholder="Search"
                placeholderTextColor="#adb5bd"
              />
            </View>
          </Animatable.View>
        </View>
      </View>
    );
  };
}
