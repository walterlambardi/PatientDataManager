import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
  },
  cardContainer: {
    alignContent: 'center',
    alignItems: 'center',
    borderBottomColor: 'lightgray',
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: 'row',
    padding: 16,
    width: '100%',
  },
  avatar: {
    borderRadius: 4,
    height: 40,
    marginRight: 16,
    width: 40,
  },
});
