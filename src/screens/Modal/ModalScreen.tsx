import React from 'react';
import { View, StatusBar } from 'react-native';
import { Screens } from '../../enums/Screens';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParams } from '../../navigation';
import styles from './modalScreen.style';
import PatientForm from '../../components/PatientForm/PatientForm';
import { MD3Colors } from 'react-native-paper';

export type ModalScreenProps = NativeStackScreenProps<
  RootStackParams,
  Screens.MODAL
>;

const ModalScreen: React.FC<ModalScreenProps> = ({ route }) => {
  const { patient } = route.params ?? {};
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={MD3Colors.error20} barStyle="light-content" />
      <PatientForm patient={patient} />
    </View>
  );
};

export default ModalScreen;
