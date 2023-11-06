import { StatusBar, View } from 'react-native';
import React from 'react';
import styles from './home.style';
import { Patient } from '../../types/api';
import PatientCard from '../../components/PatientCard';
import { ActivityIndicator, MD3Colors } from 'react-native-paper';
import { FlashList } from '@shopify/flash-list';
import { usePatients } from '../../hooks/usePatients';

const keyExtractor = (item: Patient) => `${item.id}_${item.name}`;

const renderItem = ({ item }: { item: Patient }) => {
  return <PatientCard item={item} />;
};

const Home = () => {
  const { patients, error, status } = usePatients();

  if (error) {
    throw new Error('Failed to fetch patients data.');
  }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={MD3Colors.error50} barStyle="light-content" />
      {status === 'loading' && (
        <ActivityIndicator animating={true} size={'large'} />
      )}
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
