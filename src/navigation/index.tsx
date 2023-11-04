import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Screens } from '@/enums/Screens';
import routes from './routes';
import HomeHeaderScreenOptions from './options/HomeHeaderScreenOptions';
import modalOptions from './options/modalOptions';

export type RootStackParams = {
  [Screens.HOME]: undefined;
  [Screens.MODAL]: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParams>();

const MainNavigation = () => (
  <RootStack.Navigator>
    <RootStack.Screen
      name={Screens.HOME}
      component={routes[Screens.HOME]}
      options={HomeHeaderScreenOptions}
    />
    <RootStack.Screen
      name={Screens.MODAL}
      component={routes[Screens.MODAL]}
      options={modalOptions}
    />
  </RootStack.Navigator>
);

export default MainNavigation;
