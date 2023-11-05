import React, { useCallback } from 'react';
import {
  NativeStackNavigationOptions,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import { IconButton } from 'react-native-paper';
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
    headerRight: () => (
      <IconButton
        icon="database-plus"
        size={18 * metrics.scaleCoefficient}
        onPress={openModalScreen}
        mode="contained-tonal"
        style={styles.btnStyle}
      />
    ),
  };
};

const styles = StyleSheet.create({
  btnStyle: {
    marginTop: isiOS ? 0 : 10 * metrics.scaleCoefficient,
  },
});

export default HomeHeaderScreenOptions;
