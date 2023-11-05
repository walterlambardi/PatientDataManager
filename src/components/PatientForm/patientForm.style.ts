import { metrics } from '../../themes';
import { StyleSheet } from 'react-native';
import { MD3Colors } from 'react-native-paper';

export default StyleSheet.create({
  cardWrapper: {
    backgroundColor: MD3Colors.primary100,
    borderRadius: 16 * metrics.scaleCoefficient,
    padding: 16 * metrics.scaleCoefficient,
    width: '100%',
  },
  headerItem: {
    height: 60 * metrics.scaleCoefficient,
    justifyContent: 'center',
  },
  textInput: {
    backgroundColor: MD3Colors.primary100,
    fontSize: 12 * metrics.scaleCoefficient,
    height: 40 * metrics.scaleCoefficient,
    padding: 0 * metrics.scaleCoefficient,
  },
  outlineStyle: {
    borderColor: MD3Colors.neutralVariant80,
    borderWidth: 1 * metrics.scaleCoefficient,
  },
  outlineErrorStyle: {
    borderColor: MD3Colors.error70,
    borderWidth: 1 * metrics.scaleCoefficient,
  },
  textAreaInput: {
    backgroundColor: MD3Colors.primary100,
    fontSize: 12 * metrics.scaleCoefficient,
    maxHeight: 125 * metrics.scaleCoefficient,
    minHeight: 125 * metrics.scaleCoefficient,
  },
  helperText: {
    color: MD3Colors.error50,
    fontSize: 9 * metrics.scaleCoefficient,
    marginTop: -5 * metrics.scaleCoefficient,
  },
  rowBtnContainer: {
    alignContent: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: -10 * metrics.scaleCoefficient,
  },
  avatar: {
    borderRadius: 5 * metrics.scaleCoefficient,
  },
  divider: {
    marginVertical: 16 * metrics.scaleCoefficient,
  },
});
