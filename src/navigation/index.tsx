import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Screens } from '../enums/Screens';
import routes from './routes';

export type RootStackParams = {
  [Screens.HOME]: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParams>();

const MainNavigation = () => (
  <RootStack.Navigator>
    <RootStack.Screen name={Screens.HOME} component={routes[Screens.HOME]} />
  </RootStack.Navigator>
);

export default MainNavigation;
