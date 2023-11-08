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
