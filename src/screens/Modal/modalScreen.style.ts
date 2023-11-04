import { metrics } from '@/themes';
import { StyleSheet } from 'react-native';
import { MD3Colors } from 'react-native-paper';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  modalWrapper: {
    backgroundColor: MD3Colors.secondary100,
    borderRadius: 16 * metrics.scaleCoefficient,
    padding: 16 * metrics.scaleCoefficient,
    width: 340 * metrics.scaleCoefficient,
  },
  textInput: {
    padding: 0 * metrics.scaleCoefficient,
    backgroundColor: MD3Colors.neutral95,
    fontSize: 12 * metrics.scaleCoefficient,
    height: 40 * metrics.scaleCoefficient,
  },
  textInputMargin: {
    marginBottom: 16 * metrics.scaleCoefficient,
  },
  rowBtnContainer: {
    alignContent: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16 * metrics.scaleCoefficient,
  },
});
