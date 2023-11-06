import { useCallback, useEffect } from 'react';
import { Patient } from '../../types/api';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormData, patientSchema } from './formSchema';
import {
  updatePatient,
  addPatient,
  resetUpdateStatus,
} from '../../store/slices/patientSlice';
import { useAppDispatch, useAppSelector } from '../../store';
import { showMessage } from 'react-native-flash-message';

type HookProps = {
  patient?: Patient;
};

const usePatientForm = ({ patient }: HookProps) => {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const updateStatus = useAppSelector(state => state.patients.updateStatus);

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    defaultValues: {
      description: patient?.description || '',
      name: patient?.name || '',
      website: patient?.website || '',
      avatar: patient?.avatar || '',
    },
    resolver: yupResolver(patientSchema),
  });

  const onSubmit = useCallback(
    (data: Partial<Patient>) => {
      if (patient?.id) {
        data.id = patient?.id;
        dispatch(updatePatient(data));
      } else {
        dispatch(addPatient(data));
      }
    },
    [dispatch, patient?.id],
  );

  useEffect(() => {
    if (updateStatus === 'succeeded') {
      const action = patient?.id ? 'updated' : 'added';
      const msg = patient?.id ? 'Updated correctly!' : 'Patient added to list';
      showMessage({
        message: msg,
        description: `Your patient record has been ${action} successfully. Keep up the excellent work!`,
        type: 'success',
        duration: 2000,
      });
      dispatch(resetUpdateStatus());
      navigation.goBack();
      return;
    }

    if (updateStatus === 'failed') {
      const action = patient?.id ? 'updating' : 'adding';
      showMessage({
        message: 'Error',
        description: `Something went wrong while ${action} patient.`,
        type: 'danger',
        duration: 2000,
      });
      dispatch(resetUpdateStatus());
      return;
    }
  }, [dispatch, navigation, updateStatus, patient?.id]);

  return {
    control,
    errors,
    handleSubmit,
    isSubmitting,
    onSubmit,
    updateStatus,
  };
};

export default usePatientForm;
