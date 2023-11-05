import { StyleSheet } from 'react-native';
import { metrics } from '../../themes';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 16 * metrics.scaleCoefficient,
  },
  button: {
    marginTop: 30 * metrics.scaleCoefficient,
  },
});
