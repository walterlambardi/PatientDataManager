import React, { useRef } from 'react';
import {
  Button,
  List,
  TextInput,
  MD3Colors,
  Card,
  Text,
  HelperText,
  ActivityIndicator,
  Divider,
} from 'react-native-paper';
import styles from './patientForm.style';
import { Patient } from '../../types/api';
import { Controller } from 'react-hook-form';
import { TextInput as RNTextInput } from 'react-native';
import usePatientForm from './usePatientForm';
import { useNavigation } from '@react-navigation/native';

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

  return (
    <Card style={styles.cardWrapper}>
      {updateStatus === 'loading' && <ActivityIndicator animating={true} />}
      {patient?.name && (
        <List.Item
          title={patient?.name}
          // eslint-disable-next-line react/no-unstable-nested-components
          left={() => (
            <List.Image
              source={{ uri: patient?.avatar }}
              style={styles.avatar}
            />
          )}
          style={styles.headerItem}
        />
      )}
      {!patient?.name && <Text variant="headlineSmall">New Patient</Text>}

      <Divider style={styles.divider} />

      <Controller
        name="name"
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <>
            <TextInput
              ref={nameRef}
              mode="outlined"
              numberOfLines={1}
              onBlur={onBlur}
              onChangeText={onChange}
              placeholder="Patient name"
              style={styles.textInput}
              value={value}
              label="Name"
              error={!!errors.name}
              disabled={isSubmitting}
              outlineStyle={
                !errors.name ? styles.outlineStyle : styles.outlineErrorStyle
              }
              onSubmitEditing={() => avatarRef.current?.focus()}
            />
            <HelperText
              type="error"
              visible={!!errors.name}
              style={styles.helperText}>
              Name is required!
            </HelperText>
          </>
        )}
      />

      <Controller
        name="avatar"
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <>
            <TextInput
              ref={avatarRef}
              mode="outlined"
              numberOfLines={1}
              onBlur={onBlur}
              onChangeText={onChange}
              placeholder="Avatar url"
              style={styles.textInput}
              value={value}
              label="Avatar url"
              error={!!errors.avatar}
              disabled={isSubmitting}
              outlineStyle={
                !errors.avatar ? styles.outlineStyle : styles.outlineErrorStyle
              }
              onSubmitEditing={() => websiteRef.current?.focus()}
            />
            <HelperText
              type="error"
              visible={!!errors.avatar}
              style={styles.helperText}>
              Avatar is invalid!
            </HelperText>
          </>
        )}
      />

      <Controller
        name="website"
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <>
            <TextInput
              ref={websiteRef}
              mode="outlined"
              numberOfLines={1}
              onBlur={onBlur}
              onChangeText={onChange}
              placeholder="Website"
              style={styles.textInput}
              value={value}
              label="Website"
              error={!!errors.website}
              disabled={isSubmitting}
              outlineStyle={
                !errors.website ? styles.outlineStyle : styles.outlineErrorStyle
              }
              onSubmitEditing={() => descriptionRef.current?.focus()}
            />
            <HelperText
              type="error"
              visible={!!errors.website}
              style={styles.helperText}>
              Website is invalid!
            </HelperText>
          </>
        )}
      />

      <Controller
        name="description"
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <>
            <TextInput
              ref={descriptionRef}
              label="Description"
              mode="outlined"
              multiline={true}
              numberOfLines={10}
              onBlur={onBlur}
              onChangeText={onChange}
              placeholder="Patient description"
              style={styles.textAreaInput}
              value={value}
              error={!!errors.description}
              disabled={isSubmitting}
              outlineStyle={
                !errors.description
                  ? styles.outlineStyle
                  : styles.outlineErrorStyle
              }
              onSubmitEditing={handleSubmit(onSubmit)}
            />
            <HelperText
              type="error"
              visible={!!errors.description}
              style={styles.helperText}>
              Description is required!
            </HelperText>
          </>
        )}
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
