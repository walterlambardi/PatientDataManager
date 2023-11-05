import { StyleSheet } from 'react-native';
import { metrics } from '../../themes';
import { MD3Colors } from 'react-native-paper';

export default StyleSheet.create({
  cardContainer: {
    alignContent: 'center',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: MD3Colors.secondary80,
  },
  avatar: {
    marginStart: 16 * metrics.scaleCoefficient,
    borderRadius: 5 * metrics.scaleCoefficient,
  },
  accordionTitleStyle: {
    color: MD3Colors.neutral0,
    fontSize: 14 * metrics.scaleCoefficient,
    lineHeight: 18 * metrics.scaleCoefficient,
    fontWeight: '500',
  },
  accordionDescriptionStyle: {
    fontSize: 12 * metrics.scaleCoefficient,
    lineHeight: 16 * metrics.scaleCoefficient,
    color: MD3Colors.neutral30,
  },
  itemTitleStyle: {
    fontSize: 14 * metrics.scaleCoefficient,
    lineHeight: 22 * metrics.scaleCoefficient,
    fontWeight: '500',
    color: MD3Colors.neutral0,
  },
  itemDescriptionStyle: {
    fontSize: 12 * metrics.scaleCoefficient,
    lineHeight: 16 * metrics.scaleCoefficient,
    color: MD3Colors.neutral30,
  },
  section: {
    marginLeft: -34 * metrics.scaleCoefficient,
    marginBottom: 10 * metrics.scaleCoefficient,
  },
  sectionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  editBtn: {
    marginRight: 16 * metrics.scaleCoefficient,
  },
});
