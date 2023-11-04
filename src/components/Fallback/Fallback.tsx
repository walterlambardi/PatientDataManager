import React from 'react';
import { FallbackProps } from 'react-error-boundary';
import { View } from 'react-native';
import styles from './fallback.style';
import { Text, Button } from 'react-native-paper';

const Fallback = ({ resetErrorBoundary }: FallbackProps) => {
  return (
    <View style={styles.container}>
      <Text variant="titleLarge">Oops! Something Went Wrong</Text>
      <Text variant="bodyMedium">
        Sorry for the inconvenience. Please try again later.
      </Text>
      <Button
        icon="refresh"
        mode="contained"
        onPress={resetErrorBoundary}
        style={styles.button}>
        Try again
      </Button>
    </View>
  );
};

export default Fallback;
