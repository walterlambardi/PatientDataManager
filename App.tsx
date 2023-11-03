import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ErrorBoundary } from 'react-error-boundary';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import MainNavigation from './src/navigation';
import Fallback from './src/components/Fallback';
import { store, persistor } from './src/store';

const App = () => (
  <ErrorBoundary FallbackComponent={Fallback}>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <MainNavigation />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  </ErrorBoundary>
);

export default App;
