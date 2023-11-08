import { metrics } from '../../themes';
import { StyleSheet } from 'react-native';
import { MD3Colors } from 'react-native-paper';

export default StyleSheet.create({
  textInput: {
    backgroundColor: MD3Colors.primary100,
    fontSize: 12 * metrics.scaleCoefficient,
    height: 40 * metrics.scaleCoefficient,
    padding: 0 * metrics.scaleCoefficient,
  },
  outlineStyle: {
    borderColor: MD3Colors.neutralVariant80,
    borderWidth: StyleSheet.hairlineWidth,
  },
  outlineErrorStyle: {
    borderColor: MD3Colors.error70,
    borderWidth: StyleSheet.hairlineWidth,
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
});
