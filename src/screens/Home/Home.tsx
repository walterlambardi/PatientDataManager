import { View, FlatList } from 'react-native';
import React from 'react';
import styles from './home.style';
import { useGetPatientsQuery } from '@/api/services';
import { Patient } from '@/types/api';
import PatientCard from '@/components/PatientCard';
import { ActivityIndicator } from 'react-native-paper';

const keyExtractor = (item: Patient) => `${item.id}_${item.name}`;

const renderItem = ({ item }: { item: Patient }) => {
  return <PatientCard item={item} />;
};

const Home = () => {
  const { data, isLoading, error } = useGetPatientsQuery();

  if (error) {
    throw new Error('Failed to fetch patients data.');
  }

  return (
    <View style={styles.container}>
      {isLoading && <ActivityIndicator animating={true} />}
      {data && (
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
};

export default Home;
