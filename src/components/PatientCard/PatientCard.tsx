import { View } from 'react-native';
import React from 'react';
import styles from './patientCard.style';
import { Patient } from '../../types/api';
import { Divider, List, MD3Colors, IconButton } from 'react-native-paper';
import { format } from 'date-fns';
import { useNavigation } from '@react-navigation/native';
import { Screens } from '../../enums/Screens';
import { RootStackParams } from '../../navigation';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

interface PatientCardProps {
  item: Patient;
}

const PatientCard: React.FC<PatientCardProps> = ({ item }) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  return (
    <View style={styles.cardContainer}>
      <List.Accordion
        title={item.name}
        titleNumberOfLines={1}
        titleStyle={styles.accordionTitleStyle}
        description={item.website}
        descriptionNumberOfLines={1}
        descriptionStyle={styles.accordionDescriptionStyle}
        // eslint-disable-next-line react/no-unstable-nested-components
        right={props =>
          props.isExpanded === false ? (
            <List.Icon {...props} icon="chevron-down" />
          ) : (
            <List.Icon {...props} icon="chevron-up" />
          )
        }
        // eslint-disable-next-line react/no-unstable-nested-components
        left={() => (
          <List.Image source={{ uri: item.avatar }} style={styles.avatar} />
        )}>
        <Divider />
        <View style={styles.section}>
          <View style={styles.sectionRow}>
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
            <IconButton
              icon="square-edit-outline"
              iconColor={MD3Colors.secondary0}
              containerColor={MD3Colors.secondary95}
              size={20}
              mode="contained"
              onPress={() =>
                navigation.navigate(Screens.MODAL, { patient: item })
              }
              style={styles.editBtn}
            />
          </View>

          <List.Item
            title={'Website'}
            description={item.website}
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
