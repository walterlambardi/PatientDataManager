import React from 'react';
import { View, TouchableWithoutFeedback } from 'react-native';
import { Screens } from '../../enums/Screens';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParams } from '../../navigation';
import styles from './modalScreen.style';
import PatientForm from '../../components/PatientForm/PatientForm';

export type ModalScreenProps = NativeStackScreenProps<
  RootStackParams,
  Screens.MODAL
>;

const ModalScreen: React.FC<ModalScreenProps> = ({ route }) => {
  const { patient } = route.params ?? {};
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={e => e.stopPropagation()}>
        <PatientForm patient={patient} />
      </TouchableWithoutFeedback>
    </View>
  );
};

export default ModalScreen;
