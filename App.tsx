import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { ErrorBoundary } from 'react-error-boundary';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import MainNavigation from './src/navigation/index';
import Fallback from './src/components/Fallback';
import { store, persistor } from './src/store';
import {
  PaperProvider,
  MD3LightTheme,
  adaptNavigationTheme,
} from 'react-native-paper';
import FlashMessage from 'react-native-flash-message';

const { LightTheme } = adaptNavigationTheme({
  reactNavigationLight: DefaultTheme,
});

const App = () => (
  <PaperProvider theme={MD3LightTheme}>
    <ErrorBoundary FallbackComponent={Fallback}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <NavigationContainer theme={LightTheme}>
            <MainNavigation />
          </NavigationContainer>
        </PersistGate>
      </Provider>
    </ErrorBoundary>
    <FlashMessage position="top" />
  </PaperProvider>
);

export default App;
