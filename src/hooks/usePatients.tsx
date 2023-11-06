import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../store/index';
import { fetchPatients } from '../store/slices/patientSlice';

export const usePatients = () => {
  const dispatch = useAppDispatch();
  const { patients, error, status } = useAppSelector(state => state.patients);

  useEffect(() => {
    dispatch(fetchPatients());
  }, [dispatch]);

  return { patients, error, status };
};
