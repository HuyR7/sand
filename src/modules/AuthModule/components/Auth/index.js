import React from 'react';
import {
  View,
  Text,
  TextInput,
  ImageBackground,
} from 'react-native';
import { Icon, Button } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';

// Components

// Variables
import { text } from './text';
import { icons } from './icons';
import styles from './styles';
import colors from '../../../../constants/colors';

import img from '../../../../assets/images/scrrenLogin.jpg';
export default class components extends React.Component {
  render = (navigation) => {
    return (
      <React.Fragment>
        <ImageBackground source={img} style={styles.container} >
          <View style={styles.formContainer}>
            <Animatable.View duration={200} animation="fadeInUp">
              <View style={styles.formInput}>
                <Icon
                  size={icons.size}
                  color={icons.color}
                  name={icons.form.username.name}
                  type={icons.form.username.type}
                  containerStyle={styles.formInputIcon}
                />
                <TextInput
                  autoCapitalize="none"
                  keyboardType="email-address"
                  placeholder={text.form.username}
                  placeholderTextColor={colors.PRIMARY}
                  style={styles.textInput}
                />
              </View>
            </Animatable.View>

            <Animatable.View duration={200} animation="fadeInUp">
              <View style={styles.formInput}>
                <Icon
                  size={icons.size}
                  color={icons.color}
                  name={icons.form.password.name}
                  type={icons.form.password.type}
                  containerStyle={styles.formInputIcon}
                />
                <TextInput
                  autoCapitalize="none"
                  // secureTextEntry={secureTextEntry}
                  placeholder={text.form.password}
                  placeholderTextColor={colors.PRIMARY}
                  style={styles.textInput}
                />
              </View>
            </Animatable.View>

            <Animatable.View animation="fadeInUp">
              <Button
                icon={<Icon type="simple-line-icon" name="key" size={icons.size} color="white" iconStyle={{ marginRight: 8 }} />}
                title={text.login.toUpperCase()}
                onPress={() => navigation.navigate('AppStackNavigator')}
                buttonStyle={styles.formSubmitLogin}
                titleStyle={styles.formSubmitText}
              />
            </Animatable.View>
          </View>
        </ImageBackground>
      </React.Fragment>
    );
  };
}
