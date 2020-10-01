import { Platform, Dimensions, StyleSheet } from 'react-native';
import Colors from '../../../../constants/colors';

export const WIDTH = Dimensions.get('screen').width;
export const WIDTH_INPUT = (WIDTH / 10) * 8;
export const HEIGHT_INPUT = 45;

const common = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.GRAY,
    // justifyContent: 'center',

  },
  formContainer: {
    flex: 1,
    alignItems: 'center',
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
    borderWidth: 1,
    borderRadius: 20,
    borderColor: 'white',
    height: HEIGHT_INPUT,
    flexDirection: 'row',
    alignItems: 'center',
    // borderBottomWidth: 1,
    // borderBottomColor: '#f1f3f5',
  },
  formInputIcon: {
    width: 30,
  },
});

export default {
  ...common,
};
