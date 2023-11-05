import { View } from 'react-native';
import React, { useEffect } from 'react';
import styles from './home.style';
import { Patient } from '../../types/api';
import PatientCard from '../../components/PatientCard';
import { ActivityIndicator } from 'react-native-paper';
import { useAppDispatch, useAppSelector } from '../../store/index';
import { fetchPatients } from '../../store/slices/patientSlice';
import { FlashList } from '@shopify/flash-list';

const keyExtractor = (item: Patient) => `${item.id}_${item.name}`;

const renderItem = ({ item }: { item: Patient }) => {
  return <PatientCard item={item} />;
};

const Home = () => {
  const dispatch = useAppDispatch();
  const { patients, error, status } = useAppSelector(state => state.patients);

  useEffect(() => {
    dispatch(fetchPatients());
  }, [dispatch]);

  if (error) {
    throw new Error('Failed to fetch patients data.');
  }

  return (
    <View style={styles.container}>
      {status === 'loading' && <ActivityIndicator animating={true} />}
      {patients.length > 0 && (
        <FlashList
          data={patients}
          estimatedItemSize={200}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
};

export default Home;
