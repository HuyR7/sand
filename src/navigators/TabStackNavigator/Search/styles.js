import { Platform, Dimensions, StyleSheet } from 'react-native';
import Colors from '../../../constants/colors';

export const WIDTH = Dimensions.get('screen').width;
export const WIDTH_INPUT = (WIDTH / 10) * 8;
export const HEIGHT_INPUT = 45;

const common = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.GRAY,
  },
  formContainer: {
    margin: 20,
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  form: {
    height: 40,
    width: 290,
    marginTop: 30,
    borderWidth: 1,
    borderRadius: 10,
    alignSelf: 'center',
    paddingHorizontal: 8,
    justifyContent: 'center',
    borderColor: Colors.GRAY,
  },
  formInput: {
    // borderWidth: 1,
    // borderRadius: 20,
    // borderColor: 'white',
    height: HEIGHT_INPUT,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
  formInputIcon: {
    width: 30,
  },
  viewIcon: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {

  },
  textIcon: {
    paddingTop: 10,
  },
  viewBody: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  textTitle: {
    fontSize: 17,
    paddingTop: 10,
    fontWeight: 'bold',
  },
  viewTab: {
    marginTop: 20,
  },
  textTab: {
    marginTop: 5,
    fontSize: 14,
  },
});

export default {
  ...common,
};
