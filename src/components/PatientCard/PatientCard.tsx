/* eslint-disable react/no-unstable-nested-components */
import { View } from 'react-native';
import React from 'react';
import styles from './patientCard.style';
import { Patient } from '@/types/api';
import { Divider, List } from 'react-native-paper';
import { format } from 'date-fns';

interface PatientCardProps {
  item: Patient;
}

const PatientCard: React.FC<PatientCardProps> = ({ item }) => {
  return (
    <View style={styles.cardContainer}>
      <List.Accordion
        title={item.name}
        titleNumberOfLines={1}
        titleStyle={styles.accordionTitleStyle}
        description={item.website}
        descriptionNumberOfLines={1}
        descriptionStyle={styles.accordionDescriptionStyle}
        right={props =>
          props.isExpanded === false ? (
            <List.Icon {...props} icon="chevron-down" />
          ) : (
            <List.Icon {...props} icon="chevron-up" />
          )
        }
        left={() => (
          <List.Image source={{ uri: item.avatar }} style={styles.avatar} />
        )}>
        <Divider />
        <View style={styles.section}>
          <List.Item
            title={'Added'}
            description={format(
              new Date(item.createdAt),
              'MMMM d, yyyy, HH:mm:ss a',
            )}
            titleStyle={styles.itemTitleStyle}
            descriptionStyle={styles.itemDescriptionStyle}
            descriptionNumberOfLines={30}
          />
          <List.Item
            title={'Description'}
            description={item.description}
            titleStyle={styles.itemTitleStyle}
            descriptionStyle={styles.itemDescriptionStyle}
            descriptionNumberOfLines={30}
          />
        </View>
      </List.Accordion>
    </View>
  );
};

export default PatientCard;
