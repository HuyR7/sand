import { Platform, Dimensions, StyleSheet } from 'react-native';
import Colors from '../../../../constants/colors';

export const WIDTH = Dimensions.get('screen').width;
export const WIDTH_INPUT = (WIDTH / 10) * 8;
export const HEIGHT_INPUT = 45;

const common = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  formContainer: {
    height: 300,
    width: 250,
    borderRadius: 10,
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  formInput: {
    width: 200,
    height: HEIGHT_INPUT,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    alignSelf: 'center',
    borderBottomColor: '#f1f3f5',
  },
  formInputIcon:{
    width: 30,
  },
  textInput: {
    flex: 1,
    color: Colors.PRIMARY,
  },
  formSubmitLogin: {
    height: 40,
    width: 170,
    marginTop: 15,
    borderRadius: 20,
    marginBottom: 12,
    alignSelf: 'center',
    backgroundColor: '#f03e3e',
  },
  formSubmitText: {
    fontSize: 13,
    fontWeight: '700',
  },
});

export default {
  ...common,
};
