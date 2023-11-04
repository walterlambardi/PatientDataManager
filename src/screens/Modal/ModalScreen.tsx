import React from 'react';
import { View } from 'react-native';
import { Screens } from '@/enums/Screens';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParams } from '@/navigation';
import { TextInput } from 'react-native-paper';
import { Button } from 'react-native-paper';
import { MD3Colors } from 'react-native-paper';
import styles from './modalScreen.style';

export type DetailProps = NativeStackScreenProps<
  RootStackParams,
  Screens.MODAL
>;

const ModalScreen: React.FC<DetailProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.modalWrapper}>
        <TextInput
          placeholder="Name"
          style={[styles.textInput, styles.textInputMargin]}
        />
        <TextInput placeholder="Description" style={styles.textInput} />
        <View style={styles.rowBtnContainer}>
          <Button
            icon="cancel"
            mode="contained"
            buttonColor={MD3Colors.error50}
            onPress={navigation.goBack}>
            Cancel
          </Button>
          <Button
            icon="content-save-edit"
            mode="contained"
            buttonColor={MD3Colors.secondary20}
            onPress={() => console.log('Save')}>
            Save
          </Button>
        </View>
      </View>
    </View>
  );
};

export default ModalScreen;
