import React from 'react';
import { FallbackProps } from 'react-error-boundary';
import { View, Text, Button } from 'react-native';
import styles from './fallback.style';

const Fallback = ({ resetErrorBoundary }: FallbackProps) => {
  return (
    <View style={styles.container}>
      <Text>Oops! Something went wrong</Text>
      <Button onPress={resetErrorBoundary} title="Try again" />
    </View>
  );
};

export default Fallback;
