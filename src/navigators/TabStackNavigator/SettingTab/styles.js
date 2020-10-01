import { Platform, Dimensions, StyleSheet } from 'react-native';
import Colors from '../../../constants/colors';

export const WIDTH = Dimensions.get('screen').width;
export const WIDTH_INPUT = (WIDTH / 10) * 8;
export const HEIGHT_INPUT = 45;

const common = StyleSheet.create({
  container: {
    flex: 1,
  },
  formHeader: {
    margin: 30,
    padding: 20,
    marginTop: 40,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'white',
    backgroundColor: 'white',
  },
  formInfo: {
    flexDirection: 'row',
  },
  formInfoIcon: {
    width: 30,
  },
  image: {
    height: 70,
    width: 70,
  },
  viewInfo: {
    paddingLeft: 20,
  },
  textInfo: {

  },
  formBody: {
    margin: 20,
    padding: 20,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'white',
    backgroundColor: 'white',
  },
  viewField: {
    height: 40,
    // marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    marginHorizontal: 20,
    // paddingHorizontal: 20,
    borderBottomColor: 'black',
  },
  iconLeftField: {
    fontSize: 18,
    color: '#f8b601',
    marginRight: 10,
  },
  textField: {
    fontSize: 16,
    color: 'black',
  },
  viewLeft: {
    flex: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconRightField: {
    fontSize: 18,
    color: '#1194f6',
  },
  iconOut: {
    color: 'red',
    fontSize: 18,
    marginRight: 10,
  },
});

export default {
  ...common,
};
