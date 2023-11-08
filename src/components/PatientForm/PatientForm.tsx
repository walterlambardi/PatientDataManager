import React, { useCallback, useRef } from 'react';
import {
  Button,
  List,
  MD3Colors,
  Card,
  Text,
  ActivityIndicator,
  Divider,
} from 'react-native-paper';
import styles from './patientForm.style';
import { Patient } from '../../types/api';
import { TextInput as RNTextInput } from 'react-native';
import usePatientForm from './usePatientForm';
import { useNavigation } from '@react-navigation/native';
import ControlledTextInput from '../ControlledTextInput';

type PatientFormProps = {
  patient: Patient | undefined;
};

const PatientForm: React.FC<PatientFormProps> = ({ patient }) => {
  const navigation = useNavigation();
  const {
    control,
    handleSubmit,
    errors,
    isSubmitting,
    updateStatus,
    onSubmit,
  } = usePatientForm({
    patient,
  });

  const avatarRef = useRef<RNTextInput>(null);
  const descriptionRef = useRef<RNTextInput>(null);
  const nameRef = useRef<RNTextInput>(null);
  const websiteRef = useRef<RNTextInput>(null);

  const renderHeader = useCallback(() => {
    if (updateStatus === 'loading') {
      return <ActivityIndicator animating={true} color={MD3Colors.error50} />;
    }
    if (patient?.name) {
      return (
        <List.Item
          title={patient.name}
          // eslint-disable-next-line react/no-unstable-nested-components
          left={() => (
            <List.Image
              source={{ uri: patient.avatar }}
              style={styles.avatar}
            />
          )}
          style={styles.headerItem}
        />
      );
    }
    return <Text variant="headlineSmall">New Patient</Text>;
  }, [patient, updateStatus]);

  return (
    <Card style={styles.cardWrapper}>
      {renderHeader()}

      <Divider style={styles.divider} />

      <ControlledTextInput
        control={control}
        errors={errors.name}
        fieldName={'name'}
        inputRef={nameRef}
        isSubmitting={isSubmitting}
        label="Patient name"
        onSubmitEditing={() => avatarRef?.current?.focus()}
        placeholder="Patient name"
      />

      <ControlledTextInput
        control={control}
        errors={errors.avatar}
        fieldName={'avatar'}
        inputRef={avatarRef}
        isSubmitting={isSubmitting}
        label="Avatar url"
        onSubmitEditing={() => websiteRef?.current?.focus()}
        placeholder="Avatar url"
      />

      <ControlledTextInput
        control={control}
        errors={errors.website}
        fieldName={'website'}
        inputRef={websiteRef}
        isSubmitting={isSubmitting}
        label="Website url"
        onSubmitEditing={() => descriptionRef?.current?.focus()}
        placeholder="Website url"
      />

      <ControlledTextInput
        control={control}
        errors={errors.description}
        fieldName={'description'}
        inputRef={descriptionRef}
        isSubmitting={isSubmitting}
        isTextAreaInput
        label="Description"
        numberOfLines={10}
        onSubmitEditing={handleSubmit(onSubmit)}
        placeholder="Description"
      />

      <Card.Actions style={styles.rowBtnContainer}>
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
          onPress={handleSubmit(onSubmit)}>
          Save
        </Button>
      </Card.Actions>
    </Card>
  );
};

export default PatientForm;
