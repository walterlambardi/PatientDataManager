import React, { useCallback } from 'react';
import {
  NativeStackNavigationOptions,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import { IconButton, MD3Colors } from 'react-native-paper';
import { metrics } from '../../themes';
import { RouteProp } from '@react-navigation/native';
import { RootStackParams } from '..';
import { Screens } from '../../enums/Screens';
import { StyleSheet } from 'react-native';
import { isiOS } from '../../utils/platformUtils';

type HomeHeaderScreenOptionsProps = (props: {
  route: RouteProp<RootStackParams, Screens.HOME>;
  navigation: NativeStackNavigationProp<RootStackParams, Screens.HOME>;
}) => NativeStackNavigationOptions;

const HomeHeaderScreenOptions: HomeHeaderScreenOptionsProps = ({
  navigation,
}) => {
  const openModalScreen = useCallback(
    () => navigation.navigate(Screens.MODAL, {}),
    [navigation],
  );

  return {
    title: 'Patients',
    headerStyle: {
      backgroundColor: MD3Colors.error50,
    },
    headerTintColor: MD3Colors.primary100,
    headerRight: () => (
      <IconButton
        icon="database-plus"
        size={18 * metrics.scaleCoefficient}
        onPress={openModalScreen}
        mode="contained"
        style={styles.btnStyle}
        iconColor={MD3Colors.primary100}
        containerColor={MD3Colors.error30}
      />
    ),
  };
};

const styles = StyleSheet.create({
  btnStyle: {
    marginTop: isiOS ? 0 : 5 * metrics.scaleCoefficient,
  },
});

export default HomeHeaderScreenOptions;
