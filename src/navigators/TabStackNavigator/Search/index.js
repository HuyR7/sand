import React from 'react';
import {
  View,
  Text,
  Modal,
  Platform,
  TextInput,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { Icon, Button } from 'react-native-elements';
import TouchableRipple from '../../../components/TouchableRipple';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';
// Components

// Variables
import styles from './styles';
import text from '../../../constants/text';
import icons from '../../../constants/icons';
import colors from '../../../constants/colors';

export default class Search extends React.Component {
  render = () => {
    return (
      <View style={styles.container}>
        <View style={styles.form}>
          <Animatable.View duration={200} animation="fadeInUp">
            <View style={styles.formInput}>
              <Icon
                size={icons.size}
                color="black"
                name={icons.form.search.name}
                type={icons.form.search.type}
                containerStyle={styles.formInputIcon}
              />
              <TextInput
                autoCapitalize="none"
                placeholder="Tìm kiếm"
                placeholderTextColor="black"
              />
            </View>
          </Animatable.View>
        </View>

        <View style={styles.formContainer}>
          <TouchableRipple>
            <View style={styles.viewIcon}>
              <MIcon
                size={icons.size}
                color="black"
                style={styles.icon}
                name={icons.form.image.name}
                type={icons.form.image.type}
              />
              <Text style={styles.textIcon}>Ảnh</Text>
            </View>
          </TouchableRipple>

          <TouchableRipple>
            <View style={styles.viewIcon}>
              <MIcon
                size={icons.size}
                color="black"
                style={styles.icon}
                name={icons.form.locate.name}
                type={icons.form.locate.type}
              />
              <Text style={styles.textIcon}>Các cửa hàng</Text>
            </View>
          </TouchableRipple>

          <TouchableRipple>
            <View style={styles.viewIcon}>
              <MIcon
                size={icons.size}
                color="black"
                style={styles.icon}
                name={icons.form.activeCode.name}
                type={icons.form.activeCode.type}
              />
              <Text style={styles.textIcon}>Quét</Text>
            </View>
          </TouchableRipple>
        </View>

        <View style={styles.viewBody}>
          <Text style={styles.textTitle}>CÁC XU HƯỚNG</Text>
          <View style={styles.viewTab}>
            <Text style={styles.textTab}>Áo</Text>
            <Text style={styles.textTab}>Áo khoác</Text>
            <Text style={styles.textTab}>Giày</Text>
            <Text style={styles.textTab}>Nước hoa</Text>
          </View>
        </View>
      </View>
    );
  };
}
