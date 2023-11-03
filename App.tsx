import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigation from './src/navigation';
import { ErrorBoundary } from 'react-error-boundary';
import Fallback from './src/components/Fallback';

const App = () => (
  <ErrorBoundary FallbackComponent={Fallback}>
    <NavigationContainer>
      <MainNavigation />
    </NavigationContainer>
  </ErrorBoundary>
);

export default App;
