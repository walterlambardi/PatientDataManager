import React, { useCallback } from 'react';
import {
  NativeStackNavigationOptions,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import { IconButton, MD3Colors } from 'react-native-paper';
import { metrics } from '@/themes';
import { RouteProp } from '@react-navigation/native';
import { RootStackParams } from '..';
import { Screens } from '@/enums/Screens';

type HomeHeaderScreenOptionsProps = (props: {
  route: RouteProp<RootStackParams, Screens.HOME>;
  navigation: NativeStackNavigationProp<RootStackParams, Screens.HOME>;
}) => NativeStackNavigationOptions;

const HomeHeaderScreenOptions: HomeHeaderScreenOptionsProps = ({
  navigation,
}) => {
  const openModalScreen = useCallback(
    () => navigation.navigate(Screens.MODAL),
    [navigation],
  );

  return {
    title: 'Patients',
    headerTitleAlign: 'left',
    headerRight: () => (
      <IconButton
        icon="database-plus"
        iconColor={MD3Colors.neutral10}
        size={22 * metrics.scaleCoefficient}
        onPress={openModalScreen}
      />
    ),
  };
};

export default HomeHeaderScreenOptions;
