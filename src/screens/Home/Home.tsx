import { View, Text, FlatList, Image } from 'react-native';
import React from 'react';
import styles from './home.style';
import { useGetPatientsQuery } from '../../api/services';
import { Patient } from '../../types/api';

const keyExtractor = (item: Patient) => `${item.id}_${item.name}`;

const renderItem = ({ item }: { item: Patient }) => {
  return (
    <View style={styles.cardContainer}>
      <Image source={{ uri: item.avatar }} style={styles.avatar} />
      <Text>{item.name}</Text>
    </View>
  );
};

const Home = () => {
  const { data } = useGetPatientsQuery();
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default Home;
