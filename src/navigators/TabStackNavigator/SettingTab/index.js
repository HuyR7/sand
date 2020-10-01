import React from 'react';
import {
  View,
  Text,
  Image,
  Platform,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { Icon, Button } from 'react-native-elements';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import TouchableRipple from '../../../components/TouchableRipple';

// Components

// Variables
import styles from './styles';
import icons from '../../../constants/icons';
import Colors from '../../../constants/colors';

import avatar from '../../../assets/images/avatar.png';
export default class SettingTab extends React.Component {
  render = () => {
    return (
      <View style={[styles.container, { backgroundColor: Colors.GRAY }]}>
        <View style={styles.formHeader}>
          <View style={styles.formInfo}>
            <Image source={avatar} style={styles.image} resizeMode="contain"/>
            <View style={styles.viewInfo}>
              <Text>Name: HuyR7</Text>
              <Text>Phone: 0366614567</Text>
            </View>
          </View>
        </View>

        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : ''} style={styles.container}>
            <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
              <TouchableRipple>
                <View style={styles.viewField}>
                  <View style={styles.viewLeft}>
                    <MIcon name="key" style={styles.iconLeftField} />
                    <Text style={styles.textField}>Đổi mật khẩu</Text>
                  </View>
                  <MIcon name="arrow-right" style={styles.iconRightField} />
                </View>
              </TouchableRipple>
              <TouchableRipple>
                <View style={styles.viewField}>
                  <MIcon name="arrow-right-bold-box-outline" style={styles.iconOut} />
                  <Text style={styles.textField}>Thoát tài khoản</Text>
                </View>
              </TouchableRipple>
            </ScrollView>
          </KeyboardAvoidingView>
      </View>
    );
  };
}
